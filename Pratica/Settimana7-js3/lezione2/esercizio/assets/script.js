/*●Crea un semplice form di registrazione con un input field in cui l’utente possa inserire il proprio nome. A fianco di questo input field crea due pulsanti: uno salverà il valore in localStorage, uno rimuoverà il valore precedentemente salvato (se presente). Mostra sopra l’input field il valore precedentemente salvato, se presente. ●Crea un contatore che tenga conto del tempo che passa, utilizzando sessionStorage. Aggiornando la pagina il valore prosegue, chiudendo la pagina - ovviamente - ricomincia. Il valore del contatore deve aggiornarsi ad ogni secondo*/

//FORM
const nameUtente = document.getElementById('name');
const btnSalva = document.getElementById('btnSalva');
const btnCancella = document.getElementById('btnCancella');
const stampaName = document.getElementById('stampaNome');

btnSalva.addEventListener('click', function (e) {
  const nome = nameUtente.value;
  localStorage.setItem('nomeUtente', nome);
  check();
});

btnCancella.addEventListener('click', function (e) {
  localStorage.removeItem('nomeUtente');
  check();
});

const check = function () {
  const salvaName = localStorage.getItem('nomeUtente');
  if(salvaName) {
    txt = 'Ciao ' + localStorage.getItem('nomeUtente');
  } else {
    txt = 'Inserisci un nome';
  }
  document.getElementById('stampaNome').innerText = txt;
}

window.onload = check;

//CONTATORE
// let times = sessionStorage.getItem('contatore');
// const contatore = document.getElementById('contatore');

// const interval = setInterval (() => {
// contatore.innerText = times;
// times++;
// sessionStorage.setItem('contatore', times);
// }, 1000);

// interval;

//con il prof
let i = sessionStorage.getItem('count') ? parseInt (sessionStorage.getItem('count')) : 0;
const conta = function () {
  i++;
  document.getElementById('contatore').innerText = i;
  sessionStorage.setItem('count', i);
}

setInterval(conta, 1000);