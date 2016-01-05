$(window).scroll( function() {
  var currentScrollTop = $(window).scrollTop();
  if ( currentScrollTop > 100 ) {
        $(".nav-header").addClass('nav-header-low');
        $(".content-wrapper").addClass('scroll-override');
  } else {
        $(".nav-header").removeClass('nav-header-low');
        $(".content-wrapper").removeClass('scroll-override');
  }
});
