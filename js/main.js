// Find out how far work and faves are from top of page (store in variables to use in function)
var workOffset = $('.work').offset().top;
var favesOffset = $('.favorites').offset().top;
// var contactOffset = $('.contact').offset().top;

// console.log('The work section is ' + workOffset + ' pixels down the page');

$(window).on('scroll', function () {
  var distanceScrolled = $(document).scrollTop();
  console.log(distanceScrolled);

  if (distanceScrolled >= workOffset - 200) {
    $('.projects').addClass('faded-in');
  }
  if (distanceScrolled >= favesOffset) {
    $('.favorites').addClass('faded-in');
  }
  // if (distanceScrolled >= contactOffset) {
  //   $('.contact').addClass('faded-in');
  // }
});

$(window).on('resize', function () {
  workOffset = $('.work').offset().top;
  favesOffset = $('.favorites').offset().top;
});

//hamburger stuff
$('button').click(function() {
  $(this).toggleClass('expanded').siblings('div').slideToggle();
});


// When a user scrolls to the contact section (.contact)
//  Slowly fadeIn the section .contact

// Smooth scroll this mother!
// Do it when someone clicks a nav link
$('nav a').on('click', function(e) {
  // prevent the standard link operation on click
  e.preventDefault();
  // use the href of the link to identify what
  // section to scroll to
  var thisTarget = $(this).attr('href');
  // get that section's top offset
  var targetOffset = $(thisTarget).offset().top - 59;
  // use jQuery.animate() to animate the body's
  // scrollTop to the targetOffest
  $('body').animate({
    scrollTop: targetOffset
  }, 600);
});
