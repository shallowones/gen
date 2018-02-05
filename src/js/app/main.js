(function ($, Swiper, jBox) {
  $(function () {

    // текстовый слайдер в хедере
    {
      new Swiper('.js-header-bottom', {
        loop: true,
        grabCursor: true,
        slidesPerView: 'auto',
        autoplay: true
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
          nextEl: '.videos-next',
          prevEl: '.videos-prev'
        },
        on: {
          init: function () {
            const MIN_SLIDES_LENGTH = 4
            if (this.slides.length < MIN_SLIDES_LENGTH) {
              this.$el.addClass('videos-small')
            }
          }
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

    // слайдер (детальные)
    {
      const slider = new Swiper('.js-slider', {
        slidesPerView: 1,
        loop: true,
        loopedSlides: 4,
        grabCursor: true
      })
      new Swiper('.js-slider-thumbs', {
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true,
        loop: true,
        loopedSlides: 4,
        controller: {
          control: slider
        },
        on: {
          init: function () {
            slider.controller.control = this
          }
        }
      })
    }

    // поиск в шапке
    {
      const $search = $('.js-search')
      const $input = $search.parent().find('.header-search__input')
      const showClass = 'show'
      $search.on('click', () => {
        if ($input.hasClass(showClass)) {
          $input.removeClass('show')
        } else {
          $input
            .addClass('show')
            .focus()
        }
      })
    }

    // popup
    {
      new jBox('Modal', {
        attach: '.js-popup',
        width: 'auto',
        height: 'auto',
        onOpen: function () {
          const $target = $(this.source.data('target'))
          this.setContent($target.html())
          console.log(this.source.data('target'))
          $target.html('')
          this.content.find('.close').on('click', this.close.bind(this))
        },
        onCloseComplete: function () {
          const $target = $(this.source.data('target'))
          $target.append(this.content.html())
        }
      })
    }

    // mobile
    {
      const $page = $('.page')
      const $mobile = $('.mobile')
      const $button = $('.mobile__button')
      const $mobileMenu = $mobile.find('.menu')
      $button.on('click', () => { $page.toggleClass('mobile-open') })
      $mobileMenu.find('.parent').each((index, el) => {
        const $parent = $(el)
        $parent.find('> span').on('click', () => {
          $parent
            .toggleClass('open')
            .find('.menu').slideToggle(300)
        })
      })
      const $search = $('.js-search-mobile')
      const $searchParent = $search.parent()
      const showClass = 'show'
      $search.on('click', () => {
        if ($searchParent.hasClass(showClass)) {
          $searchParent.removeClass('show')
        } else {
          $searchParent.addClass('show')
          $searchParent.find('.header-search__input').focus()
        }
      })
    }

    // ошибки формы при фокусе
    {
      const CLASS_INVALID = 'invalid'

      $('.invalid > .form-control__input, .invalid > .form-control__textarea').focus((e) => {
        $(e.currentTarget).parent().removeClass(CLASS_INVALID)
      })
      $('input[type=checkbox].invalid, input[type=radio].invalid').on('change', (e) => {
        $(e.currentTarget).removeClass(CLASS_INVALID)
      })
    }

  })
})(jQuery, Swiper, jBox)
