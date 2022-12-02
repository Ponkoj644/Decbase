// Owl Carousel
$(document).ready(function () {
  $(".all-services").owlCarousel({
    loop: true,
    margin: 2,
    nav: true,
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".all-testimonial").owlCarousel({
    loop: true,
    margin: 2,
    nav: true,
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },

      1000: {
        items: 2,
      },
    },
  });
});
