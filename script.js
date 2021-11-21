$('.lesson__content-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
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
    if(prevScrollPos > currentscrollPos) {
      header.style.top = '0'
    }else {
      header.style.top = '-86px'
    }
    prevScrollPos = currentscrollPos
  })
