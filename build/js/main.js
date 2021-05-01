// start hover 'after', 'before' in image 
$('.hover').mouseleave(
  function () {
    $(this).removeClass('hover');
  }
);

// end hover 'after', 'before' in image 

// start SWIPER 
var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// end SWIPER


// start animation AOS 
AOS.init({
  // Global settings:
  disable: false,// accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 0, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 0, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 250, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 2000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

// end animation AOS 

// start Anchor links in header

$(document).ready(function () {
  $("#header-menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });
});

// end  Anchor links in header

// start header-burger 
$(function () {
  $('.header__burger').on('click', function () {
    $('.menu').slideToggle();
  });

  document.querySelector('.header__burger').onclick = function () {
    this.classList.toggle('header__active');
  }

  $('.menu__item').on('click', function () {
    $('.menu').slideToggle();
  });

  $('.menu__item').on('click', function () {
    $('.header__burger').removeClass('header__active');
  });
});
// end header-burger 