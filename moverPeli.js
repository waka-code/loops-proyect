/*CREATION*/

const moverpelis = document.getElementById("moverpelis");

let maxScrollLeft = moverpelis.scrollWidth - moverpelis.clientWidth;
let intervalo = null;
let step = 1;

const star = function () {
  intervalo = setInterval(function() {
    moverpelis.scrollLeft = moverpelis.scrollLeft + step;
    if(moverpelis.scrollLeft === maxScrollLeft){
        step = step * -1;
    }  else if(moverpelis.scrollLeft === 0){
        step = step * -1;
    }
  },10);
};

const stop = function(){
    clearInterval(intervalo);
};

moverpelis.addEventListener("mouseover", function(){
    stop();
})

moverpelis.addEventListener("mouseout", function(){
    star();
})

star();

