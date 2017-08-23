

$(window).on('scroll', function () {
  var distanceScrolled = $(window).scrollTop();
  console.log(distanceScrolled);


  if ($(document).scrollTop() >= 750) {
    $('.projects').addClass('faded-in');
  }
  if ($(document).scrollTop() >= 2276) {
    $('.fave-things').addClass('faded-in');
  }
});


// $('.fave-things').not(':offscreen').addClass('faded-in');
// $('.projects').not(':offscreen').addClass('faded-in');
// // when target offset top = (value offset of the window) => then trigger fade in.

// When a user scrolls to the contact section (.contact)
//  Slowly fadeIn the section .contact
