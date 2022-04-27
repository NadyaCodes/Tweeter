/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {
  console.log("client is ready");

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];


  const createTweetElement = function(tweetObj) {

    const person = {
      name: tweetObj.user.name,
      username: tweetObj.user.handle,
      "single-tweet": tweetObj.content.text,
      "date-posted": tweetObj.created_at,
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
      $('#tweets-container').append(newTweet);
    }
  };

  renderTweets(data);

});