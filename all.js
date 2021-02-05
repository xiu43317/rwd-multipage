$(document).ready(function () {
    $('.showmenu').click(function (e) {
        e.preventDefault();
        $('body').toggleClass('menu-show');
    });
    $('.scrollTop').click(function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var targetPos = $(target).offset().top;
        $('body,html').animate({ scrollTop: targetPos }, 1000);
    });
    $('.fa-arrow-circle-up').click(function (e) {
        e.preventDefault();
        $('body,html').animate({ scrollTop: 0 }, 1000);
    })
    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scrollPos > 200) {
            $('.fa-arrow-circle-up').show();
        } else {
            $('.fa-arrow-circle-up').hide();
        }
        // animated
        $('.animated').each(function () {
            var thisPos = $(this).offset().top;
            //console.log('animated',thisPos);
            if ((windowHeight + scrollPos) >= thisPos) {
                $(this).addClass('fadeIn');
            }
        });
    });
});