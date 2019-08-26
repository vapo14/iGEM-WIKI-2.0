const len = $(".fullpage-container").children().length; //Variable con los children del main container

var recentScroll = false;
var current; //La pantalla en la que está la ventana
var windowArray = createWindowArray(); //arreglo de dónde comienzan las pantallas

function createWindowArray() {
    //Crea arreglo con los valores de límite de cada pantalla
    var arr = [];
    for (let i = 0; i <= len; i++) {
        arr.push(i * window.innerHeight);
    }
    return arr;
}
function findCurrent(arr, scr) {
    //determina la pantalla en la que está
    var cur = 1;
    scr += window.innerHeight * 0.5; //suma la mitad de la ventana para usar el punto de enmedio para encontrar la pantalla actual
    while (!(scr >= arr[cur - 1] && scr < arr[cur])) {
        cur++;
    }
    return cur;
}

$(window).resize(() => {
    windowArray = createWindowArray();
});

window.ontouchend = e => {
    e.preventDefault();
};

window.addEventListener("wheel", e => {
    if (!recentScroll) {
        //si pasó el tiempo de buffer entre scroll, se ejecuta el scroll

        current = findCurrent(windowArray, window.scrollY);

        if (e.deltaY < 0) {
            //Scroll UP

            if (current != 1) {
                $("html,body").animate(
                    {
                        scrollTop: $(".fullpage:nth-child(" + --current + ")").offset().top
                    },
                    200
                );
            } else if (current == 1) {
                $("html,body").animate(
                    {
                        scrollTop: $(".fullpage:nth-child(" + current + ")").offset().top
                    },
                    200
                );
            }
        } else if (e.deltaY > 0) {
            //scroll DOWN

            if (current != len) {
                $("html,body").animate(
                    {
                        scrollTop: $(".fullpage:nth-child(" + ++current + ")").offset().top
                    },
                    200
                );
            } else if (current == len) {
                $("html,body").animate(
                    {
                        scrollTop: $(".fullpage:nth-child(" + current + ")").offset().top
                    },
                    200
                );
            }
        }

        recentScroll = true; //regresa a true para activar el timer
        setTimeout(() => {
            recentScroll = false;
        }, 600); //Timer de .6 seg
    }
});
