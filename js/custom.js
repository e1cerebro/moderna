// WOW js setup
jQuery(function () {
  new WOW().init();
});
// Magnific popup - WORK SECTION
jQuery(function () {
  $('#work').magnificPopup({
    type: 'image',
    delegate: 'a',
    gallery: {
      enabled: true,
    },
  });
});

// Lazy Load
jQuery(function () {
  var el = document.querySelector('img');
  var observer = lozad(el); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
  observer.observe();
});

// OWL carousel
jQuery(function () {
  $('#team-members').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    animateOut: 'slideOutDown',
    smartSpeed: 450,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      500: {
        items: 3,
        nav: false,
      },
    },
  });
});

jQuery(function () {
  $('#client-testimonials').owlCarousel({
    items: 1,
    loop: true,
    autoplay: false,
  });
});

jQuery(function () {
  $('#list-of-clients').owlCarousel({
    items: 5,
    loop: true,
    smartSpeed: 700,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 3,
      },
      768: {
        items: 5,
      },
      992: {
        items: 6,
      },
    },
  });
});

/* ============= Counter up ================== */
jQuery(function () {
  jQuery('.counter').counterUp({
    delay: 10,
    time: 3000,
  });
});

jQuery(function () {
  var initialScrollHeight = window.scrollY;

  var height = getWindowHeight();
  // Get the 40% of the document
  var scrollShowHeight = (25 / 100) * height;

  if (initialScrollHeight > scrollShowHeight) {
    $('#scroll-top').addClass('show');
    $('#scroll-top').removeClass('hide');
  } else {
    $('#scroll-top').addClass('hide');
    $('#scroll-top').removeClass('show');
  }

  $(window).scroll(function () {
    let scrollHeight = window.scrollY;

    if (scrollHeight > scrollShowHeight) {
      $('#scroll-top').addClass('show');
      $('#scroll-top').removeClass('hide');
      $('#scroll-top').fadeIn();
    } else {
      $('#scroll-top').addClass('hide');
      $('#scroll-top').removeClass('show');
      $('#scroll-top').fadeOut();
    }
  });
});

/*======================================== NAVIGATION ==========================================*/
jQuery(function () {
  $(window).scroll(function () {
    var height = getWindowHeight();
    var scroll_top = $(this).scrollTop();

    // Fix navigation at the top when you scroll upto 10% of the page
    var fixedNavShowHeight = (3 / 100) * height;

    if (scroll_top >= fixedNavShowHeight) {
      // downscroll code
      $('#mordena-nav-container').addClass('fixed-top');
    } else {
      // upscroll code
      $('#mordena-nav-container').removeClass('fixed-top');
    }

    var position = $(window).scrollTop();

    //fix during scrolling up effect
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll < position) {
        $('#mordena-nav-container').addClass('fixed-top');
      }
      position = scroll;
    });
  });
});

function getWindowHeight() {
  //Get windows total height
  var body = document.body,
    html = document.documentElement;

  var height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );

  return height;
}

/*======================================== SMOOTH SCROLL ==========================================*/

jQuery(function () {
  $('a.mordena-smooth-scroll').click(function (e) {
    e.preventDefault();

    //Get target ID value
    var targetSectionId = $(this).attr('href');
    $('html, body').animate(
      {
        scrollTop: $(targetSectionId).offset().top,
      },
      500
    );
  });
});

/*========================================  SCROLL TO TOP ==========================================*/

jQuery(function () {
  $('#scroll-top').click(function (e) {
    e.preventDefault();

    //Get target ID value
    var targetSectionId = $(this).attr('href');
    $('html, body').animate(
      {
        scrollTop: $(targetSectionId).offset().top - 100,
      },
      300
    );
  });
});

/* ============= NAVIGATION ==================== */
jQuery(document).ready(function ($) {
  $(document).click(function (event) {
    var clickover = $(event.target);
    var _opened = $('.navbar-collapse').hasClass('show');
    if (_opened === true && !clickover.hasClass('navbar-toggle')) {
      $('button.navbar-toggler').click();
    }
  });
});
