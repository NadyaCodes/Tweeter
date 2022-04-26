let counter = 140
$(document).ready(function() {
  console.log("ready is ready")


  $('#tweet-text').on('keypress', function() {

    counter--
    console.log(counter)

    if (counter < 0) {
      $('output.negative-counter').text(counter)
      
    } else {
      $('output.counter').text(counter)
    }
    
  })

})


