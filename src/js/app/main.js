(function ($, Swiper) {
  $(function () {

    // текстовый слайдер в хедере
    {
      new Swiper('.js-header-bottom', {
        loop: false,
        grabCursor: true,
        slidesPerView: 'auto'
      })
    }

    // слайдер на индексной
    {
      new Swiper('.js-index-slider', {
        loop: true,
        slidesPerView: 'auto',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      })
    }

    // слайдер main
    {
      new Swiper('.js-main-slider', {
        loop: false,
        slidesPerView: 'auto',
        grabCursor: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      })
    }

  })
})(jQuery, Swiper)
