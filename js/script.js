jQuery(document).ready(function () {
    jQuery('.toggle-nav').click(function (e) {
        jQuery(this).toggleClass('active');
        jQuery('.menu ul').toggleClass('active');

        e.preventDefault();
    });


    //progress indicator
    var winHeight = $(window).height(),
        docHeight = $(document).height(),
        progressBar = $('progress'),
        max, value;

    /* Set the max scrollable area */
    max = docHeight - winHeight;
    progressBar.attr('max', max);

    $(document).on('scroll', function () {
        value = $(window).scrollTop();
        progressBar.attr('value', value);
    });
    /*------------------------LOADING SCREEN-----------------------------*/
    setTimeout(function () {
        $('body').addClass('loaded');
        $('nav').css('visibility', 'visible');
    }, 3000);




});


//BACK TO TOP BUTTON

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        $("#BackToTopButton").fadeIn();
    } else {
        $("#BackToTopButton").fadeOut();
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

$('.button').click(function () {
    var buttonId = $(this).attr('id');
    $('#modal-container').removeAttr('class').addClass(buttonId);
    $('body').addClass('modal-active');
})

$('#modal-container').click(function () {
    $(this).addClass('out');
    $('body').removeClass('modal-active');
});


//FODA SCRIPTS

// Acc
$(document).on("click", ".naccs .menu div", function () {
    var numberIndex = $(this).index();

    if (!$(this).is("active")) {
        $(".naccs .menu div").removeClass("active");
        $(".naccs ul li").removeClass("active");

        $(this).addClass("active");
        $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

        var listItemHeight = $(".naccs ul")
            .find("li:eq(" + numberIndex + ")")
            .innerHeight();
        $(".naccs ul").height(listItemHeight + "px");
    }
});