$(document).ready(function() {

    $('.js nav.top-nav').prepend('<button class="menu-btn">Menu</button>');
    $('.js nav.top-nav ul').addClass('hide');

    $(".menu-btn").click(function() {
        $(".js nav ul").toggleClass('hide');
        $(".menu-btn").toggleClass('close');
    });

    // Modernizer Code
    if (Modernizr.mq('only all')) {
        $('html').addClass('mq');
    } else {
        $('html').addClass('no-mq');
    };

    $(".js .about-content h2").each(function() {
        $(".toc").append(
            "<li>" +
	            "<a href='#" + $(this).attr("id") + "'>" +
	            	$(this).text() +
	            "</a>" +
            "</li>");
    });

    // Resets default activity when linking to an ID so we can get a fancy scroll animation
    $('a[href*=#]').click(function(){
        var offsetTop = $($.attr(this, 'href')).offset().top;
        if ( $(window).width() > 786 ) {
            $('html, body').stop().animate( {scrollTop: offsetTop - 130 }, 500 );
        } else {
            $('html, body').stop().animate( {scrollTop: offsetTop - 10 }, 500 );
        }
        return false;
    });

    $('.collapse').click(function() {
        $('.toc').toggle(500);
        //$('.vert').toggleClass('norm');
    });

    // All PDF's open in new tab
    $(function() { $('a[href$=".pdf"]').prop('target', '_blank'); });

    // All external links open in new window
    if (window.location.host != "app.cloudcannon.com") {
        $('a').each(function() {
            var a = new RegExp('/' + window.location.host + '/');
            if (!a.test(this.href)) {
                $(this).click(function(event) {
                    event.preventDefault();
                    event.stopPropagation();
                    window.open(this.href, '_blank');
                });
            }
        });
    }

    // Make sure photos aren't ever stretched
    $('a.gallery').colorbox({
        rel: 'gal',
        maxWidth: '100%'
    });
});