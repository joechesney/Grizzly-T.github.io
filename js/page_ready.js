$(document).ready(function () {
  // Hide band bio
  $("#band-bio").hide();
  // Band bio event listener
  $("#band-bio-secret-click").click(function(e) {
    $("#band-bio").toggle();
  });

  // play hilarious fart sound

  function play(randomF){
    const audio = document.getElementById(`top-secret-audio${randomF}`);
    audio.play();
  }


  $(".band-member").click(function(e) {
    const randomF = Math.ceil(Math.random() * 8);
    play(randomF)
  })
  
  // spin the pictures around
  $(".img-circle").click(function(e) {
    $(this).rotate()
  })

  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
})