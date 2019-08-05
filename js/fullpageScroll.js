const len = $('#fullpage-container').children().length;     //Variable con los children del main container

var recentScroll = false;
var current;            //La pantalla en la que está la ventana
var windowArray;        //arreglo de dónde comienzan las pantallas

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

    current = windowArray.indexOf(window.scrollY) + 1;    //Reconoce en qué sección de la página estás para moverte a la correspondiente

    if (!recentScroll) {        //si pasó el tiempo de buffer entre scroll, se ejecuta el scroll
        recentScroll = true;    //regresa a true para activar el timer
        if (e.deltaY < 0) {     //Scroll UP

            if (current != 1) {
                $('html,body').animate({
                    scrollTop: $(".fullpage:nth-child(" + --current + ")").offset().top
                }, 200);
            }
        }

        else if (e.deltaY > 0) {        //scroll DOWN

            if (current != len) {

                $('html,body').animate({
                    scrollTop: $(".fullpage:nth-child(" + ++current + ")").offset().top
                }, 200);
            }
        }
        setTimeout(() => { recentScroll = false; }, 750)        //Timer de .5 seg
    }
});