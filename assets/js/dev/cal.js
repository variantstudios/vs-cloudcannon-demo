$(document).ready(function () {
    $('#calendar').fullCalendar({
        events: {
            url: '/all-events.json',
        },

        eventClick: function (event) {
            if (events.url) {
                window.open(events.url);
                return false;
            }
        },

        eventMouseover: function (calEvent, jsEvent) {
            if ( $(document).width() > 767 ) {
                // Use Moment.js to format the start and end dates/times
                var time;
                if (calEvent.end && calEvent.start.format("MMM, Do YYYY h:mm a") != calEvent.end.format("MMM, Do YYYY h:mm a")) {
                    time = calEvent.start.format("MMM, Do YYYY h:mm a");
                    time += " - " + calEvent.end.format("MMM, Do YYYY h:mm a");
                } else {
                    time = calEvent.start.format("MMM, Do YYYY h:mm a");
                }
                var tooltip = '<div class="tooltipevent" style="padding:4px;background:#fff;position:absolute;z-index:10001;border:solid 1px #000;">' +
                    '<b>' + calEvent.title + '</b><br>' + time + '<br>';
                if (calEvent.address) {
                    tooltip += calEvent.address + "<br>";
                }
                if (calEvent.city) {
                    tooltip += calEvent.city + ", " + calEvent.state + " " + calEvent.zip;
                }
                tooltip += '</div>';
                $("body").append(tooltip);
                $(this).mouseover(function (e) {
                    $(this).css('z-index', 10000);
                    $('.tooltipevent').fadeIn('500');
                    $('.tooltipevent').fadeTo('10', 1.9);
                }).mousemove(function (e) {
                    var toolwidth = $('.tooltipevent').width();
                    $('.tooltipevent').css('top', e.pageY + 10);
                    if ( e.pageX > $(window).width() - 250 ) {
                        $('.tooltipevent').css('left', e.pageX - 20 - toolwidth);
                    } else {
                        $('.tooltipevent').css('left', e.pageX + 20);
                    }
                });
            } else {
                $(document).tooltip('disable');
            }
        },

        eventMouseout: function (calEvent, jsEvent) {
            $(this).css('z-index', 8);
            $('.tooltipevent').remove();
        },
    });
});
