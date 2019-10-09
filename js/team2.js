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
var carousel = document.querySelector('.carousel');
var container = carousel.querySelector('.carousel-container');
var prevBtn = carousel.querySelector('.carousel-prev');
var nextBtn = carousel.querySelector('.carousel-next');
var pagination = carousel.querySelector('.carousel-pagination');
var bullets = [].slice.call(carousel.querySelectorAll('.carousel-bullet'));
var totalItems = container.querySelectorAll('.carousel-item').length;
var percent = (100 / totalItems);
var currentIndex = 0;

function next() {
    slideTo(currentIndex + 1);
}

function prev() {
    slideTo(currentIndex - 1);
}

function slideTo(index) {
    index = index < 0 ? totalItems - 1 : index >= totalItems ? 0 : index;
    container.style.WebkitTransform = container.style.transform = 'translate(-' + (index * percent) + '%, 0)';
    bullets[currentIndex].classList.remove('active-bullet');
    bullets[index].classList.add('active-bullet');
    currentIndex = index;
}

bullets[currentIndex].classList.add('active-bullet');
prevBtn.addEventListener('click', prev, false);
nextBtn.addEventListener('click', next, false);

pagination.addEventListener('click', function (e) {
    var index = bullets.indexOf(e.target);
    if (index !== -1 && index !== currentIndex) {
        slideTo(index);
    }
}, false);