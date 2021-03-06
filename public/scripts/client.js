/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



//sets up time ago
const locale = function(number, index, totalSec) {
  // number: the time ago / time in number;
  // index: the index of array below;
  // totalSec: total seconds between date to be formatted and today's date;
  return [
    ['just now', 'right now'],
    ['%s seconds ago', 'in %s seconds'],
    ['1 minute ago', 'in 1 minute'],
    ['%s minutes ago', 'in %s minutes'],
    ['1 hour ago', 'in 1 hour'],
    ['%s hours ago', 'in %s hours'],
    ['1 day ago', 'in 1 day'],
    ['%s days ago', 'in %s days'],
    ['1 week ago', 'in 1 week'],
    ['%s weeks ago', 'in %s weeks'],
    ['1 month ago', 'in 1 month'],
    ['%s months ago', 'in %s months'],
    ['1 year ago', 'in 1 year'],
    ['%s years ago', 'in %s years']
  ][index];
};

timeago.register('pt_BR', locale);


//Tweeting Functions
$(document).ready(function() {
  
  const createTweetElement = function(tweetObj) {

    const escape = function(str) {
      let div = document.createElement("div");
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    };
    
    const person = {
      name: tweetObj.user.name,
      username: tweetObj.user.handle,
      "single-tweet": escape(tweetObj.content.text),
      "date-posted": timeago.format(tweetObj.created_at, 'pt_BR'),
      "small-avatar": tweetObj.user.avatars
    };

    const markup = `
    <article>
      <header>
        <div class="tweet-head-left">
          <div class="small-avatar"><img src="${person["small-avatar"]}"></div>
          <div class="name">${person.name}</div>
        </div>
        <div class="username">${person.username}</div>
      </header>
      <div class="single-tweet">${person["single-tweet"]}</div>
      <footer>
        <div class="date-posted">${person["date-posted"]}</div>
        <div class="action-icons">
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </div>
      </footer>
    </article>
    `;

    return markup;
  };



  const renderTweets = function(tweetsArray) {
    for (let i = 0; i < tweetsArray.length; i++) {
      const newTweet = createTweetElement(tweetsArray[i]);
      $('#tweets-container').prepend(newTweet);
    }
  };


  const loadTweets = function() {
    $.ajax('./tweets', { method: 'GET' })
      .then(function(data) {
        renderTweets(data);
      })
      .catch((err) => console.log(err));
  };

  loadTweets();


  const submitTweet = function(event) {
    event.preventDefault();
    const formData = $(this).serialize();
    const decodedData = decodeURI(formData);
    const entryText = decodedData.slice(5);

    $(".input-error").remove();

    const containerLocation = "body > main > section.new-tweet > form";

    const errorMessage = function(message) {
      return `<div class="input-error"><i class="fa-solid fa-triangle-exclamation"></i>${message}<i class="fa-solid fa-triangle-exclamation"></i></div>`;
    };

    if (entryText.length > 140) {
      const tooLongMessage = errorMessage("You write too much. Please keep your thoughts to 140 characters or less.");
      $(tooLongMessage).prependTo(containerLocation).hide().slideDown();
      return;
    }
    
    if (!entryText) {
      const noTextMessage = errorMessage('You can\'t say "NOTHING". Please write at least one character.');
      $(noTextMessage).prependTo(containerLocation).hide().slideDown();
      return;
    }

    $.ajax({
      method: "POST",
      data: formData,
      url: "/tweets",
    }).then(() => {
      $.ajax('./tweets', { method: 'GET' })
        .then(function(data) {
          const newTweet = createTweetElement(data[data.length - 1]);
          $('#tweets-container').prepend(newTweet);
          $('#tweet-text').val('');
          $('.counter').val(140);
        })
        .catch((err) => console.log(err));
    });


  };


  $(".form-inline").submit(submitTweet);

});