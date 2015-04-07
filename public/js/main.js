(function ($) {

    var intro = $('[data-fixed-panel]');
    var resume = $('[data-overlay]');

    var windowHasChanged = function() {

        if( $(window).width() > 700 ) {

            var winheight = $(this).height();

            intro.next('section').css('margin-top', winheight);

            var waypoints = $('[data-project]').waypoint({
                handler: function(direction) {

                    if(direction === 'down') {
                        $(this.element).find('.project-image').addClass('animate-in-bottom');
                        $(this.element).find('.project-description').addClass('animate-in-right');
                    }
                },
                offset: (winheight - 200)
            });

        } else {
            intro.next('section').css('margin-top', 0);
        }
    };

    // Events

    $("[data-overlay-trigger]").on('click', function(e){
        resume.addClass('on');
        e.preventDefault();
    });

    $("[data-close-overlay]").on('click', function(e){
        resume.addClass('off');
        setTimeout(function() {
            resume.removeClass('on off');
        }, 500);

        e.preventDefault();
    });

    // Resizing Window

    $(window).on('load resize', windowHasChanged);

}(jQuery));