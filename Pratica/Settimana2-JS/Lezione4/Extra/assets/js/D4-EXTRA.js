// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
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


function checkArray(array) {
  let somma = 0;
	for (let i = 0; i < array.length; i++) {
    if (array[i] > 5) {
      console.log('Il numero ' + array[i] + ' è maggiore di 5');
      somma += array[i];
    }else {
      console.log('Il numero ' + array[i] + ' è minore di 5');
    }
  }
  console.log('La somma dei numeri maggiori di 5 è: ' + somma);
}

checkArray(giveMeRandom(3));

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const shoppingCart = [
  {
    price: 7,
    name: 'Prodotto1',
    id: 1,
    quantity: 2
  },
  {
    price: 18,
    name: 'Prodotto2',
    id: 2,
    quantity: 6
  },
  {
    price: 35,
    name: 'Prodotto3',
    id: 3,
    quantity: 3
  }
]

function shoppingCartTotal() {
  let totale = 0;

  for(let i = 0; i < shoppingCart.length; i++) {
    let value = shoppingCart[i].price * shoppingCart[i].quantity;
    totale += value;
  }
  return totale;
}
console.log(shoppingCartTotal());

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

  const newItem = [
    {
    price: 21,
    name: 'Prodotto4',
    id: 4,
    quantity: 1
    }
  ]

function addToShoppingCart(item) {
  shoppingCart.push(item);
  console.log(shoppingCart.length);
}

addToShoppingCart(newItem);
console.log(shoppingCart);

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

  function maxShoppingCart() {
    let prices = [];

    for(let i = 0; i < shoppingCart.length; i++) {
      prices.push(shoppingCart[i].price);
    }

    let priceMax = prices[0]
    for (let i = 0; i < prices.length; i++) {
      if(prices[i] > priceMax) {
        priceMax = prices[i];
      }
    }

    return priceMax;
  }

  console.log('Esercizio 4: ' + maxShoppingCart());

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function latestShoppingCart() {
  let ultimo = shoppingCart.length - 1;
  return shoppingCart[ultimo];
}

console.log(latestShoppingCart());

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

  function loopUntil(n) {
    let x = 0;

    while (x < 3) {
      let valore = Math.floor(Math.random() * 10);
      console.log(valore);
      if(valore > n) {
        x++;
      }
    }
  }

  console.log('Esercizio 6: ');
  loopUntil(5);

  

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

  function average(array) {
    let nuovoArray = [];
    let somma = 0;

    for (let i = 0; i < array.length; i++) {
      if(typeof array[i] === 'number'){
        nuovoArray.push(array[i]);
        somma += array[i];
      }
    }
    return somma / nuovoArray.length;
  }

  console.log('Esercizio 7: ' + average([3, 6, 'Hello']));

  

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

  function longest(stringa) {
    let lettere = stringa[0].length;
    let parola = '';

    for(let i = 0; i < stringa.length; i++) {
      if(stringa[i].length > lettere) {
        lettere = stringa[i].length;
        parola = stringa[i];
      }
    }
    return parola;
  }

  let stringa = ['hello', 'Come va?', 'Tutti']

  console.log('Esercizio 8: ' + longest(stringa));
/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

  function filtro(emailContent) {
    let email = false;
    if((emailContent.search('SPAM') === -1 && emailContent.search('SCAM')) === -1) {
      return email = true;
    }
    return email;
  }

  console.log('Esercizio 9: ' + filtro('HOLA'));  

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let dataInserire = new Date(2002, 7, 9);
  
function giorniPassati(data) {
  let oggi = new Date();
  let differenza = oggi - data;
  let giorni = differenza / (1000 * 60 * 60 * 24);
  return Math.floor(giorni);
}

console.log('Esercizio 10: ' + giorniPassati(dataInserire)); 


/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function matrixGenerator(num1, num2) {
  let matrice = [];

  for(let i = 0; i < num1; i++) {
    let riga = [];
    for(let j = 0; j < num2; j++) {
      riga.push(i.toString() + j.toString());
    }
    matrice.push(riga);
  }
  return matrice;
}

console.log(matrixGenerator(5, 4));  


