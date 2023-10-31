/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero1 = 7;
let numero2 = 6;

if (numero1 > numero2) {
  console.log('Il numero più grande è: ' + numero1)
}else if (numero2 > numero1) {
  console.log('Il numero più grande è: ' + numero2 )
}else {
  console.log('I due numeri sono uguali')
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let number1 = 6;

if (number1 === 5) {
  console.log('Equal')
}else {
  console.log('Not equal')
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let number = 36;


if (number % 5 === 0) {
  console.log('Divisibile per 5')
} else {
  console.log('Non è divisibile per 5')
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numeroIntero1 = 9;
let numeroIntero2 = 1;


if (numeroIntero1 === 8 || numeroIntero2 === 8) {
  console.log ('Uno di questi numeri è uguale a 8')
} else if (numeroIntero1 + numeroIntero2 === 8) {
  console.log('La somma dei due valori è uguale a 8')
} else if (numeroIntero1 - numeroIntero2 === 8 || numeroIntero2 - numeroIntero1 === 8) {
  console.log('La sottrazione tra i due numeri è uguale a 8')
}else {
  console.log('Nessuno dei due numeri sono iguali a 8')
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart1 = 56;

if (totalShoppingCart1 > 50) {
  console.log('Totale: ' + totalShoppingCart1 + '. ' + 'La tua spedizione è gratuita.')
} else {
  console.log('Totale: ', totalShoppingCart1 + 10)
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart2 = 20;
let totalConSconto = totalShoppingCart2*(20/100);
let totaleFinale = totalShoppingCart2 - totalConSconto;

if (totaleFinale > 50) {
  console.log('Totale: ' + totaleFinale + '. ' + 'La tua spedizione è gratuita.')
} else {
  console.log('La spedizione non è gratuita. Totale: ', totaleFinale + 10)
}


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let variabile1 = 5;
let variabile2 = 7;
let variabile3 = 8;


if ((variabile1 > variabile2 && variabile2 > variabile3)) {
 console.log(variabile1, variabile2,  variabile3)
} else if (variabile2 > variabile1 && variabile2 > variabile3 && variabile2 > variabile3) {
  console.log(variabile2, variabile1,  variabile3)
}else if (variabile3 > variabile1 && variabile2 > variabile1) {
  console.log(variabile3,  variabile2,  variabile1)
}else {
  console.log('veamos si funciona')
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let tipoNumero = 8;

console.log(typeof(tipoNumero));

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let parità = 4;

if (parità % 2 === 0) {
  console.log('Il numero è pari')
}else {
  console.log('Il numero è dispari')
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

  let val = 11
  if (val < 5){
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
  const me2 = {...me}
  me2.city = 'Toronto';

  console.log(me2.name);
  console.log(me2.lastName);
  console.log(me2.skills[0]);
  console.log(me2.city);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me2.lastName;
console.log(me2.lastName);

/* ESERCIZIO 13 NON FARE
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me2.skills[2];
console.log(me2.skills[2]);

/* ESERCIZIO 14 NON FARE
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15 NON FARE
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
