/*●Crea un semplice form di registrazione con un input field in cui l’utente possa inserire il proprio nome. A fianco di questo input field crea due pulsanti: uno salverà il valore in localStorage, uno rimuoverà il valore precedentemente salvato (se presente). Mostra sopra l’input field il valore precedentemente salvato, se presente. ●Crea un contatore che tenga conto del tempo che passa, utilizzando sessionStorage. Aggiornando la pagina il valore prosegue, chiudendo la pagina - ovviamente - ricomincia. Il valore del contatore deve aggiornarsi ad ogni secondo*/

//FORM
const nameUtente = document.getElementById('name');
const btnSalva = document.getElementById('btnSalva');
const btnCancella = document.getElementById('btnCancella');
const stampaName = document.getElementById('stampaNome');

const salvaName = localStorage.getItem('nomeUtente');
if(salvaName) {
  stampaName.innerText = salvaName;
}

btnSalva.addEventListener('click', function (e) {
  const nome = nameUtente.value;
  localStorage.setItem('nomeUtente', nome);
  stampaName.innerText = nome;
});

btnCancella.addEventListener('click', function (e) {
  localStorage.removeItem('nomeUtente');
  stampaName.innerText = '';
});

//CONTATORE
let times = sessionStorage.getItem('contatore');
const contatore = document.getElementById('contatore');

const interval = setInterval (() => {
contatore.innerText = times;
times++;
sessionStorage.setItem('contatore', times);
}, 1000);

interval;