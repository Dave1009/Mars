$('.mijozlar__content-slider').slick({
  prevArrow: '<div class="prev"><i class="far fa-chevron-left chevron slider__chevron-left"></i></div>',
  nextArrow: '<div class="next"><i class="far fa-chevron-right chevron slider__chevron-right"></i></div>',
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,

      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,

      }
    }
  ]
});





$('.about__us-slider').slick({
  prevArrow: '<div class="prev"><i class="far fa-chevron-left chevron slider__chevron-left slider__chevron-head"></i></div>',
  nextArrow: '<div class="next"><i class="far fa-chevron-right chevron slider__chevron-right slider__chevron-head"></i></div>',
  centerMode: true,
  centerPadding: '200px',
  slidesToShow: 2,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        centerPadding: '100px'
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerMode: false
      }
    }
  ]
});





$('.lesson__content-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  // autoplay: true,
  mouseonhover: true,
  responsive: [{
    breakpoint: 1472,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 480,
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

const imgWhite = document.querySelector('.header__logo-img-white');
const imgDefault = document.querySelector('.header__logo-img-default');


const burger = document.querySelector('.header__burger')
const list = document.querySelector('.header__content-list')
const closeIcon = document.querySelector('.header__close')
const head = document.querySelector('.header__head')

burger.addEventListener('click', () => {
  list.classList.add('active')
  head.classList.add('active')
})

closeIcon.addEventListener('click', () => {
  list.classList.remove('active')
  head.classList.remove('active')
})



