$(document).ready(function() {

  $('.new-tweet').on('keyup', "textarea", function() {
     
    let textL = this.textLength;
    let charsLeft = 140 - textL;

    $('output.counter').text(charsLeft);

    if (charsLeft < 0) {
      $('output.counter').addClass("negative-counter");

    } else {
      $('output.counter').removeClass("negative-counter");
    }
      
  });

});


