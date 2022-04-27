/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = function(tweetObj) {


  const $tweet = $(`<article class="tweets">${tweetObj.content.text}</article>`);

  // .name = tweetObj.user.name
  //.username = tweetObj.user.handle
  //.single-tweet = tweetObj.content.text
  //.date-posted = tweetObj.created_at
  //.avatar = tweetObj.user.avatars
  return $tweet;

}


// Tweet data:

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); 