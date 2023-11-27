/*Cambio colore del header*/
const header = document.getElementById('header');
let prevY = window.scrollY;

window.addEventListener('scroll', function(){
  if(window.scrollY > 350){
    header.classList.add('cambioColore');
  }else {
    header.classList.remove('cambioColore');
  }
  prevY = window.scrollY;
});

/*Cambio colore del button*/
const bottone = document.querySelector('header button');
let previY = window.scrollY;

window.addEventListener('scroll', function(){
  if(window.scrollY > 350){
    bottone.classList.add('cambioColoreButton');
  }else {
    bottone.classList.remove('cambioColoreButton');
  }
  previY = window.scrollY;
});


