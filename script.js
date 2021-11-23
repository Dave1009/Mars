
$('.about__us-slider').slick({
  centerMode: true,
  centerPadding: '100px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
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

const header = document.querySelector('.header__head')
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', () => {
  let currentscrollPos = window.pageYOffset
  if (prevScrollPos > currentscrollPos) {
    header.style.top = '0'
  } else {
    header.style.top = '-86px'
  }
  prevScrollPos = currentscrollPos
})

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



