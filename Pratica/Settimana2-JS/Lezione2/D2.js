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
//Modifiche in base alla spiegazione del prof.
let spedizione = 10;
let totale = totalShoppingCart1;//con questo mettiamo il totale
if (totalShoppingCart1 < 50) {
  totale += spedizione;
}
console.log('Totale: ' + totale);

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
let totalConSconto = totalShoppingCart2*(20/100);//oppure direttamente 80% = 0.8
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

//Essercizio eseguito con il professore
let x1 = 5;
let x2 = 8;
let x3 = 8;


if (x1 >= x2) {
	if (x3 >= x1) {
		console.log(x3, x1, x2);
	} else {
		if (x3 >= x2) {
			console.log(x1, x3, x2);
		} else {
			console.log(x1, x2, x3);
		}
	}
} else {
	if (x3 >= x2) {
		console.log(x3, x2, x1);
	} else {
		if (x3 >= x1) {
			console.log(x2, x3, x1);
		} else {
			console.log(x2, x1, x3);
		}
	}
}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//Esercizio eseguito con il professore

let tipoNumero = 8;

if (typeof tipoNumero === 'number') {
  
  console.log('è un numero');
}else {
  console.log('non è un numero');
}

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
  me.city = 'Toronto';

  console.log(me);
  console.log(me.name);
  console.log(me.lastName);
  console.log(me.skills[0]);
  console.log(me.city);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;
console.log(me.lastName);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.skills[2];
console.log(me.skills[2]);

/* ESERCIZIO 14 
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const arrayNuovo = [];
arrayNuovo[0] = 1;
arrayNuovo[1] = 2;
arrayNuovo[2] = 3;
arrayNuovo[3] = 4;
arrayNuovo[4] = 5;
arrayNuovo[5] = 6;
arrayNuovo[6] = 7;
arrayNuovo[7] = 8;
arrayNuovo[8] = 9;
arrayNuovo[9] = 10;

console.log(arrayNuovo);

/* ESERCIZIO 15 NON FARE
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
arrayNuovo[9] = 100;
console.log(arrayNuovo);