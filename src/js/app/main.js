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
          prevEl: '.swiper-button-prev'
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

    // слайдер main-second
    {
      new Swiper('.js-videos', {
        loop: false,
        slidesPerView: 'auto',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      })
    }

    // слайдер partners
    {
      new Swiper('.js-partners', {
        loop: true,
        slidesPerView: 'auto',
        navigation: {
          nextEl: '.partners-next',
          prevEl: '.partners-prev'
        }
      })
    }

    // range
    {
      const $range = $('.js-range')
      const getData = ((needed) => { return $range.data(needed) })
      const getValue = ((needed) => { return parseInt($(getData(needed)).val()) })
      $range.slider({
        values: [ getValue('target-1'), getValue('target-2') ],
        range: true,
        min: getData('min'),
        max: getData('max'),
        step: getData('step'),
        slide: (event, ui) => {
          const selector = 'target-' + (ui.handleIndex + 1)
          $(getData(selector)).val(ui.value)
        }
      })
    }

  })
})(jQuery, Swiper)
