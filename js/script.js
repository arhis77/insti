$( document ).ready(function() {

    $('.menu-parent-item').click(function() {
      $(this).toggleClass('active');
    });

    // Magnific popup
    $('.zoom-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      closeOnContentClick: false,
      closeBtnInside: false,
      mainClass: 'mfp-with-zoom mfp-img-mobile',
      image: {
        verticalFit: true,
        titleSrc: function(item) {
          return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank"></a>';
        }
      },
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        duration: 300, // don't foget to change the duration also in CSS
        opener: function(element) {
          return element.find('img');
        }
      }
    });

    // Карта
    $('.map_open').magnificPopup({
        items: {
          src: '#map',
          type: 'inline' // this is default type
        },
    });

    $('.map_open').click(function() {
      $('#map').css('display', 'block');
    //   $('body').addClass('ov_hidden');
    });
    
    $('.menu_toggle__btn').click(function() {
      $(this).toggleClass('active');
      $('.header_right__bottom').toggleClass('active');
    });

    // Получаем высоту картинки в верхнем баннере на Главной и передаем ее блоку с текстом
    var main=jQuery(".banner_top__image").height();
    jQuery(".banner_top").css("height", main);

    // Фиксированное меню при прокрутке
    var nav = $('.header');
 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 136) {
            nav.addClass("fixed_temp");
        } else {
            nav.removeClass("fixed_temp");
        }

        if ($(this).scrollTop() > 170) {
            nav.addClass("fixed");
        } else {
            nav.removeClass("fixed");
        }
    });

    // Swiper
    new Swiper('.work_order-slider', {
        // Стрелки
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        watchOverflow: true, // чтобы слайдер не инициализировался, если слайдов меньше чем необходимо
        spaceBetween: 30,
        // Включение/отключение
        // перетаскивания на ПК
        simulateTouch: true,
        // Чувствительность свайпа
        touchRatio: 1, // Значение 0 отключит swipe перетаскивание на всех устройствах
        // Угол срабатывания свайпа/перетаскивания
        touchAngel: 45,
        // Курсор перетаскивания
        grabCursor: true,
        // Управление колесом мыши
        // mousewheel: {
        //     // Чувствительность колеса мыши
        //     sensitivity: 1,
        //     // Класс объекта на котором
        //     // будет срабатывать прокрутка мышью.
            
        //     // если много слайдеров, то крутится будут все, поэтому лушче оставлять по умолчанию
        //     // eventTargets: ".image-slider" 
        // },
        // Автовысота
        // autoHeight: true,
        breakpoints: {
            320: {
                slidesPerView: 1.8,
                initialSlide: 0
            },
            577: {
                slidesPerView: 5,
            }
        },
    });

    // Swiper - our_benefits-slider
    new Swiper('.our_benefits-slider', {
        // Стрелки
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        watchOverflow: true,
        // Автовысота
        autoHeight: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            577: {
                slidesPerView: 4,
            }
        },
    });
    
});
