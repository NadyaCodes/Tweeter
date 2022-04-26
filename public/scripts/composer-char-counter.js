// console.log("composer-char-counter is linked");

let counter = 140
$(document).ready(function() {
  console.log("ready is ready")


  $('#tweet-text').on('keypress', function() {
    // console.log(this)

    // console.log(this)
    counter--
    console.log(counter)

    // $('.counter').on('keypress', function() {
    //   console.log("Hey");
    //   $('span').text(counter);
    // })

    $('output.counter').text(counter)
    
  })






})


