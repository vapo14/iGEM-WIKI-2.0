$(document).ready(function () {
    $('.notebook-content').fadeOut();
})

function changeContent() {
    var month = getMonth();
    var day = getDay();
    $(".dateContent").fadeOut();
    $("." + month + "-" + day).fadeIn();
    do {
        $('#instructions').fadeOut();
        $('.notebook-content').fadeIn();
    } while (false);
}

function getMonth() {
    var dayArr = $('input[type=radio]:checked')[0].id.split('_');
    return calendarDictionary[parseInt(dayArr[2])];
}

function getDay() {
    return $('input[type=radio]:checked').nextAll('span:first')[0].innerHTML;
}

var calendarDictionary = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October"
}



//---------------- COUNTER LOGIC----------------------
// function runAnimtion() {
//     anime({
//         targets: '.counter-1',
//         textContent: [0, 42],
//         round: 1,
//         easing: 'linear',
//         duration: 1000
//     });
// }

// const observer = new IntersectionObserver(
//     entries => {
//         entries.forEach(entry => {
//             if (entry.intersectionRatio >= 0.7) {
//                 runAnimtion();
//                 observer.disconnect();
//             }
//         });
//     }, {
//         threshold: 0.7
//     }
// );

// observer.observe(document.querySelector('.target-section'));

//https://2019.igem.org/wiki/index.php?title=Template:Tec-Chihuahua/anime.js&action=edit