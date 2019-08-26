const len = $('.fullpage-container').children().length;

var recentScroll = false;
var current;
var windowArray = createWindowArray();

function createWindowArray() {      //Crea arreglo con los valores de límite de cada pantalla
    var arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i * window.innerHeight);
    }
    return arr;
}

$(window).resize(() => { windowArray = createWindowArray() });

window.ontouchend = (e) => {
    e.preventDefault();
};

window.addEventListener('wheel', (e) => {
    const scrolled = window.scrollY;
    current = windowArray.indexOf(scrolled) + 1;
    if (!recentScroll) {        //si pasó el tiempo de buffer entre scroll, se ejecuta el scroll
        console.log(scrolled);
        recentScroll = true;    //regresa a true para activar el timer
        if (e.deltaY < 0) {     //Scroll UP
            console.log("UP");

            if (current != 1) {
                $('html,body').animate({
                    scrollTop: $(".fullpage:nth-child(" + --current + ")").offset().top
                }, 200);
            }
        }

        else if (e.deltaY > 0) {        //scroll DOWN
            console.log("DOWN");

            if (current != len) {

                $('html,body').animate({
                    scrollTop: $(".fullpage:nth-child(" + ++current + ")").offset().top
                }, 200);
            }
        }
        console.log("current: " + current);
        setTimeout(() => { recentScroll = false; }, 750)        //Timer de .5 seg
    }
});