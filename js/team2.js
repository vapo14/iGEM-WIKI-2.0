$(function () {
    $('.material-card > .mc-btn-action').click(function () {
        var card = $(this).parent('.material-card');
        var icon = $(this).children('i');
        icon.addClass('fa-spin-fast');

        if (card.hasClass('mc-active')) {
            card.removeClass('mc-active');

            window.setTimeout(function () {
                icon
                    .removeClass('fa-arrow-left')
                    .removeClass('fa-spin-fast')
                    .addClass('fa-bars');

            }, 800);
        } else {
            card.addClass('mc-active');

            window.setTimeout(function () {
                icon
                    .removeClass('fa-bars')
                    .removeClass('fa-spin-fast')
                    .addClass('fa-arrow-left');

            }, 800);
        }
    });
});
/*------------- CAROUSEL -------------- */

$(document).ready(function () {
    var slide = $(".slide");
    var viewWidth = $(window).width();
    var sliderInner = $(".slider-inner");
    var childrenNo = sliderInner.children().length;

    sliderInner.width(viewWidth * childrenNo);

    $(window).resize(function () {
        viewWidth = $(window).width();
    });

    function setWidth() {
        slide.each(function () {
            $(this).width(viewWidth);
            $(this).css("left", viewWidth * $(this).index());
        });
    }

    function setActive(element) {
        var clickedIndex = element.index();

        $(".slider-nav .active").removeClass("active");
        element.addClass("active");

        sliderInner.css("transform", "translateX(-" + clickedIndex * viewWidth + "px) translateZ(0)");

        $(".slider-inner .active").removeClass("active");
        $(".slider-inner .slide").eq(clickedIndex).addClass("active");
    }

    setWidth();

    $(".slider-nav > div").on("click", function () {
        setActive($(this));
    });

    $(window).resize(function () {
        setWidth();
    });

    setTimeout(function () {
        $(".slider").fadeIn(500);
    }, 2000);
});