/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2 = 5) {
  let risultato = l1 * l2;
  return risultato;
}

console.log('Il risultato è:', area(2, 4));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(num1, num2) {
  let risultato = Number(num1) + Number(num2);
  if (num1 === num2) {
    return risultato *= 3;
  } else{
    return risultato; 
  }
}

console.log(crazySum(2, 5));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(n) {
  let numFisso = 19;
  let risultato = Math.abs(n - numFisso);
  
  if(n > numFisso) {
    risultato *= 3;
    return risultato;
  }else {
    return risultato;
  }
}

console.log(crazyDiff(2));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
 
  if((n > 20 && n <= 100) || n === 400) {
    return true;
  }else {
    return false;
  }
}

console.log(boundary(100));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(string) {
  let stringaFinale = string.trim();

  if(string.trim().indexOf('EPICODE') === 0) {
    return stringaFinale;
  }else {
    stringaFinale = 'EPICODE ' + string;
    return stringaFinale;
  }
}

console.log(epify('Ciao a tutti'));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(num) {
  num = Math.abs(num);
  let multiplo1 = 3;
  let multiplo2 = 7;

  if(num % multiplo1 === 0 && num % multiplo2 === 0) {
    return 'Il numero inserito è un multiplo di 3 e di 7';
  } else if(num % multiplo1 === 0){
    return 'Il numero inserito è un multiplo di 3';
  }else if(num % multiplo2 === 0) {
    return 'Il numero inserito è un multiplo di 7';
  }else {
    return 'Il numero inserito non è multiplo né di 3, né di 7';
  }
}

console.log(check3and7(8));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(string) {
  let stringa1 = string.split('');
  let stringa2 = stringa1.reverse();
  let stringa3 = stringa2.join('');
  return stringa3;
}

console.log(reverseString('Ciao'))
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(stringa) {  
  let parole = stringa.split(' ');
  let risultato = [];

  for(let i = 0; i < parole.length; i++) {
    let prima = parole[i].charAt(0);
    let parolaTagliata = parole[i].slice(1);
    let parolaFinale = prima.toUpperCase() + parolaTagliata;
    risultato.push(parolaFinale);
  }
  return risultato.join(' ');
}

console.log(upperFirst('ciao a tutti'));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(string) {
  let stringa1 = string.slice(1, -1);
  return stringa1;
}

console.log(cutString('ciao a tutti'));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
  let randomArray = [];

  for(let i = 0; i < n; i++) {
    let randomNumbers = Math.floor(Math.random() * 11);
    randomArray.push(randomNumbers);
  }
  return randomArray;
}

console.log(giveMeRandom(3));