const btnEstrai = document.getElementById('btnEstrai');
const estratti = [];

function init() {
  for(let i = 0; i < 90; i++) {
    const container = document.querySelector('#container');
    const casella = document.createElement('div');
    casella.classList.add('casella');
    casella.innerText = i + 1;
    container.appendChild(casella);
  }
}

init();


btnEstrai.addEventListener('click', function(){
   estrai();
  });

  function estrai() {
  let estratto = Math.floor(Math.random() * 91) + 1;
  let invalido = estratti.find((el) => el === estratto);

  if(invalido) {
    console.log('già trovato');
    estrai();
  }else {
    estratti.push(estratto);
    document.getElementById('estratti').innerText = estratto;
    console.log(estratti);
    colora(estratto);
      uguali(estratto);
      
  }
}

function colora(numero) {
  const casella = document.querySelectorAll('.casella');
  
  casella.forEach((el) => {
    let numeroCasella = parseInt(el.innerText);
    if(numeroCasella === numero){
      el.style.backgroundColor = 'green';
    }
  })
}

//tabellina con numeri random, per il giocatore

let randomArray = [];
function tabellina() {
  
  for(let i = 0; i < 30; i++) {
    const contTabellina = document.querySelector('#contTabellina');
    const casella = document.createElement('div');
    let randomNumbers = Math.floor(Math.random() * 90) + 1;
    randomArray.push(randomNumbers);
    casella.classList.add('casellaTab');
    casella.innerText = randomNumbers;
    contTabellina.appendChild(casella);
  }
  return randomArray;
}
tabellina();


function uguali(num) {

  const uguale = randomArray.find((el) => el === num);
  if(uguale) {
    document.getElementById('estrattiTabellina').innerText = uguale;
    console.log('coincidenza');
  }else {
  document.getElementById('estrattiTabellina').innerText = 'Non hai questo numero';
}
coloraTab(num);
}

function coloraTab(numero) {
  const casella = document.querySelectorAll('.casellaTab');
  
  casella.forEach((el) => {
    let numeroCasella = parseInt(el.innerText);
    if(numeroCasella === numero){
      el.style.backgroundColor = 'red';
    }
  })
}