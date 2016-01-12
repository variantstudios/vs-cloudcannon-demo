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