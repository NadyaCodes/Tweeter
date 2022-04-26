// console.log("composer-char-counter is linked");

$(document).ready(function() {
  console.log("ready is ready")

  let counter = 140
  $('#tweet-text').on('keypress', function() {

    // console.log(this)
    counter--
    console.log(counter)
  })
})

