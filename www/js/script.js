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

    $('.collage-group').fullpage({
        scrollingSpeed: 1200,
        navigation: true,
        controlArrows: true,
    });


});


//BACK TO TOP BUTTON

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        $("#BackToTopButton").fadeIn() = "block";
    } else {
        $("#BackToTopButton").fadeOut() = "none";
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




//CALENDAR RENDERING

let CURR_DATE = new Date();

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

function getTotalDaysInMonth(year, month) {

    return 32 - new Date(year, month, 32)
        .getDate();
}

const grid = document.querySelectorAll('#calendar-table td');
const dateText = document.getElementById('date-text');

grid.forEach(cell => cell.onclick = function () {
    const selectedDate = cell.innerHTML;
    if (selectedDate === '')
        return;
    CURR_DATE.setDate(selectedDate);
    renderCalendar();
});

const calendarTitle = document.querySelectorAll('#calendar-title > span')[0];

// clears all cells
function clearGrid() {
    grid.forEach(cell => {
        cell.innerHTML = '';
        cell.classList.remove('today-cell');
    });
}

function renderCalendar(date = CURR_DATE) {
    clearGrid();

    // sets month and year
    calendarTitle.innerText = `${MONTHS[date.getMonth()]}, ${date.getFullYear()}`;

    const dayOfWeek = date.getDay();
    const dateOfMnth = date.getDate();

    let totalMonthDays = getTotalDaysInMonth(
        date.getFullYear(),
        date.getMonth()
    );

    let startDay = dayOfWeek - dateOfMnth % 7 + 1;

    if (startDay < 0)
        startDay = (startDay + 35) % 7;

    for (let i = startDay; i < totalMonthDays + startDay; i++)
        grid[i % 35].innerHTML = (i - startDay + 1);

    grid[(startDay + dateOfMnth - 1) % 35].classList.add('today-cell');

    dateText.innerHTML = CURR_DATE.toLocaleDateString("en-US", {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

}

[...document.getElementsByClassName('btn')].forEach(btn => {

    let incr = 1;
    // left button decreases month
    if (btn.classList.contains('left'))
        incr = -1;

    btn.onclick = function () {
        CURR_DATE.setMonth(CURR_DATE.getMonth() + incr);
        renderCalendar();
    };

})
//clearGrid()
renderCalendar();

var str = document.getElementById("monthTitle").innerHTML;
var splited = str.split(',');
console.log(splited);