/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

console.log("Esercizio 1: ");
console.log(pets);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

let arrayOrdinato = pets.sort();

console.log("Esercizio 2: ");
console.log(arrayOrdinato);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

pets.reverse();
console.log("Esercizio 3: ");
console.log(pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

/*let finale = pets.shift();
  pets.push(finale);
  console.log('Esercizio 4: ');
  console.log(pets);*/

let elementFinale = pets.slice(1);
elementFinale.push(pets[0]);

console.log("Esercizio 4: ");
console.log(elementFinale);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
	{
		brand: "Ford",
		model: "Fiesta",
		color: "red",
		trims: ["titanium", "st", "active"],
	},
	{
		brand: "Peugeot",
		model: "208",
		color: "blue",
		trims: ["allure", "GT"],
	},
	{
		brand: "Volkswagen",
		model: "Polo",
		color: "black",
		trims: ["life", "style", "r-line"],
	},
];

cars[0].licensePlate = "AB456";
cars[1].licensePlate = "CD456";
cars[2].licensePlate = "FG456";

console.log("Esercizio 5: ");
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

let newOggetto = {
	brand: "Fiat",
	model: "Punto",
	color: "white",
	trims: ["life", "style"],
	licensePlate: "HI456",
};
cars.push(newOggetto);

for (let i = 0; i < cars.length; i++) {
	cars[i].trims.pop();
}

console.log("Esercizio 6: ");
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

for (let i = 0; i < cars.length; i++) {
	justTrims.push(cars[i].trims[0]);
}

console.log("Esercizio 7: ");
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

console.log("Esercizio 8: ");
for (let i = 0; i < cars.length; i++) {
	let primaLettera = cars[i].color.charAt(0);
	if (primaLettera === "b") {
		console.log("Fizz");
	} else {
		console.log("Buzz");
	}
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
	6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

console.log("Esercizio 9: ");
let valori = 0;

while (valori < numericArray.length && numericArray[valori] !== 32) {
	console.log(numericArray[valori]);
	valori++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];

function lettere() {
	let arrayLettere = [];

	for (let i = 0; i < charactersArray.length; i++) {
		switch (charactersArray[i]) {
			case "a":
				arrayLettere.push(1);
				break;
			case "b":
				arrayLettere.push(2);
				break;
			case "c":
				arrayLettere.push(3);
				break;
			case "d":
				arrayLettere.push(4);
				break;
			case "e":
				arrayLettere.push(5);
				break;
			case "f":
				arrayLettere.push(6);
				break;
			case "g":
				arrayLettere.push(7);
				break;
			case "h":
				arrayLettere.push(8);
				break;
			case "i":
				arrayLettere.push(9);
				break;
			case "l":
				arrayLettere.push(10);
				break;
			case "m":
				arrayLettere.push(11);
				break;
			case "n":
				arrayLettere.push(12);
				break;
			case "o":
				arrayLettere.push(13);
				break;
			case "p":
				arrayLettere.push(14);
				break;
			case "q":
				arrayLettere.push(15);
				break;
			case "r":
				arrayLettere.push(16);
				break;
			case "s":
				arrayLettere.push(17);
				break;
			case "t":
				arrayLettere.push(18);
				break;
			case "u":
				arrayLettere.push(19);
				break;
			case "v":
				arrayLettere.push(20);
				break;
			case "z":
				arrayLettere.push(21);
				break;
			default:
				arrayLettere.push("Non trovato nell'array");
		}
	}
	return arrayLettere;
}

console.log("Esercizio 10: ");
console.log(lettere());
