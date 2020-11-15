// ========================================banner srart
$('.banner-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class="fa fa-arrow-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-arrow-right next" aria-hidden="true"></i>',
  });

// ========================================dropdown
$(".dp").click(function(){
  $(".dop2").slideToggle()
})


// $(".mobile-port").click(function(){
//   $(".mobile").slideToggle()
// })



// ========================================venobox srart
$('.venobox').venobox();

// ========================================sarvice srart
$('.sarvice-slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  autoplay: false,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: 0,
  vertical: true,
  prevArrow: '<i class="fa fa-angle-up prev" aria-hidden="true"></i>',
  nextArrow: '<i class="fa fa-angle-down next" aria-hidden="true"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});

// ========================================testi srart
$('.img-slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  autoplay: false,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  centerMode: true,
  centerPadding: 0,
  prevArrow: '<i class="fa fa-angle-up prev" aria-hidden="true"></i>',
  nextArrow: '<i class="fa fa-angle-down next" aria-hidden="true"></i>',
  asNavFor: '.text-slider',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        vertical:false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical:false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.text-slider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  autoplay: false,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: true,
  asNavFor: '.img-slider',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        vertical:false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical:false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// ========================================counter srart
$('.counter').counterUp({
  delay: 10,
  time: 1000
});

// ========================================images slider srart
$('.image-slider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: 0,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});