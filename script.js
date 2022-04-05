/*responsiveMenu*/
let btnNav = document.getElementById("hamburguesa");
let menuNav = document.getElementById("menulh");


btnNav.addEventListener("click", () => {
    menuNav.classList.toggle("menuham");
});


/*InteractiveBody*/

document.getElementById("primerBtn").onclick = aplicar;

function aplicar()  { 
  swal({
     icon: "info",
     title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero accusantium maiores voluptatem, deserunt aliquid dolor minima veniam aspernatur? Reprehenderit consequatur expedita eveniet quibusdam quod nesciunt amet odio sunt illum earum."
  });
}



    