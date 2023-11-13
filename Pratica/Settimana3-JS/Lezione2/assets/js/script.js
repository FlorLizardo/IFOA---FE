/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

const changeTitle = function () {
	document.querySelector("h1").innerText = "Titolo della pagina cambiato";
};

changeTitle();

/* ESERCIZIO 2
       Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
    */

const addClassToTitle = function () {
	document.querySelector("h1").className = "myHeading";
};

addClassToTitle();

/* ESERCIZIO 3
       Scrivi una funzione che cambi il testo dei p figli di un div
      */

const changePcontent = function () {
	const changeP = document.querySelectorAll("div p");
	changeP.forEach((el) => {
		el.innerText = "Testo del paragrafo cambiato";
	});
};

changePcontent();

/* ESERCIZIO 4
       Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
      */

const changeUrls = function () {
	const link = document.querySelectorAll("a:not(footer a)");

	link.forEach((el) => {
		el.setAttribute("href", "https://www.google.com");
	});
};

changeUrls();

/* ESERCIZIO 5
       Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
    */

const addToTheSecond = function () {
	const list = document.getElementById("secondList");
	const newElemento = document.createElement("li");
	newElemento.innerText = "Nuovo elemento di lista";
	list.appendChild(newElemento);
};

addToTheSecond();

/* ESERCIZIO 6
       Scrivi una funzione che aggiunga un paragrafo al primo div
    */
//querySelector
const addParagraph = function () {
	const divScelto = document.querySelector("div");
	const newP = document.createElement("p");
	newP.innerText = "Sono un nuovo paragrafo";
	divScelto.appendChild(newP);
};

addParagraph();

/* ESERCIZIO 7
       Scrivi una funzione che faccia scomparire la prima lista non ordinata
    */
//style.display
const hideFirstUl = function () {
	let listU = document.getElementById("firstList");
	listU.style.display = "none";
};

hideFirstUl();

/* ESERCIZIO 8 
       Scrivi una funzione che renda verde il background di ogni lista non ordinata
      */
//querySelectorAll
const paintItGreen = function () {
	const colorList = document.querySelectorAll("ul");
	colorList.forEach((el) => {
		el.style.backgroundColor = "green";
	});
};

paintItGreen();

/* ESERCIZIO 9
       Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
      */

const makeItClickable = function () {
	const lettera = document.querySelector("h1");

	lettera.onclick = function () {
		lettera.innerText = lettera.innerText.slice(0, -1);
	};
};

makeItClickable();

/* ESERCIZIO 10
       Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
      */

const revealFooterLink = function () {
	const footer = document.querySelector("footer");

	footer.addEventListener("click", function () {
		const url = document.querySelector("footer h3 a");
		//const link = url.href;
		//è meglio usare getAttribute('href')
		alert(url.getAttribute("href"));
	});
};

revealFooterLink();

/* ESERCIZIO 11
       Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
       La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
    */

const prodotti = [
	{
		id: 1,
		immagine: "immagine1",
		nomeProd: "prodotto1",
		quantita: 25,
		prezzo: 54,
	},
	{
		id: 2,
		immagine: "immagine2",
		nomeProd: "prodotto2",
		quantita: 25,
		prezzo: 54,
	},
	{
		id: 3,
		immagine: "immagine3",
		nomeProd: "prodotto3",
		quantita: 25,
		prezzo: 54,
	},
	{
		id: 4,
		immagine: "immagine4",
		nomeProd: "prodotto4",
		quantita: 25,
		prezzo: 54,
	},
	{
		id: 5,
		immagine: "immagine5",
		nomeProd: "prodotto5",
		quantita: 25,
		prezzo: 54,
	},
];
const generateTable = function () {
	const table = document.getElementById("tableArea");
	const tab = document.createElement("table");
	tab.style.width = "50vw";
	tab.classList.add("tabella");
	//const tabella = table.appendChild(tabella);
	const head = document.createElement("tr");

	const intImagine = document.createElement("th");
	intImagine.innerText = "Imagine";

	const intNome = document.createElement("th");
	intNome.innerText = "Nome";

	const intQuant = document.createElement("th");
	intQuant.innerText = "Quantità";

	const intPrezzo = document.createElement("th");
	intPrezzo.innerText = "Prezzo";

	head.appendChild(intImagine);
	head.appendChild(intNome);
	head.appendChild(intQuant);
	head.appendChild(intPrezzo);
	tab.appendChild(head);

	for (let i = 0; i < prodotti.length; i++) {
		const head = document.createElement("tr");

		const cellaImmagine = document.createElement("td");
		cellaImmagine.innerText = `${prodotti[i].immagine}`;
		const cellaNome = document.createElement("td");
		cellaNome.innerText = `${prodotti[i].nomeProd}`;
		const cellaQuant = document.createElement("td");
		cellaQuant.innerText = `${prodotti[i].quantita}`;
		const cellaPrezzo = document.createElement("td");
		cellaPrezzo.innerText = `${prodotti[i].prezzo}`;

		head.appendChild(cellaImmagine);
		head.appendChild(cellaNome);
		head.appendChild(cellaQuant);
		head.appendChild(cellaPrezzo);
		tab.appendChild(head);
	}

	table.appendChild(tab);
};

generateTable();

/* ESERCIZIO 12
       Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
    */

const addRow = function (imag, prod, quant, prezzo) {
	const nuoviProd = {
		id: 6,
		immagine: "immagine6",
		nomeProd: "prodotto6",
		quantita: 25,
		prezzo: 54,
	};

	prodotti.push(nuoviProd);

	const nuova = document.querySelector("table");
	const head = document.createElement("tr");
	let i = prodotti.length - 1;

	const cellaImmagine = document.createElement("td");
	cellaImmagine.innerText = `${prodotti[i].immagine}`;
	const cellaNome = document.createElement("td");
	cellaNome.innerText = `${prodotti[i].nomeProd}`;
	const cellaQuant = document.createElement("td");
	cellaQuant.innerText = `${prodotti[i].quantita}`;
	const cellaPrezzo = document.createElement("td");
	cellaPrezzo.innerText = `${prodotti[i].prezzo}`;

	head.appendChild(cellaImmagine);
	head.appendChild(cellaNome);
	head.appendChild(cellaQuant);
	head.appendChild(cellaPrezzo);
	nuova.appendChild(head);
};

addRow();


/* ESERCIZIO 14
      Crea una funzione che nasconda le immagini della tabella quando eseguita
    */

const hideAllImages = function () {
	const immagini = document.querySelectorAll("td img");
	immagini.forEach((el) => (el.style.display = "none"));
};

/* EXTRA ESERCIZIO 15
      Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
    */

const changeColorWithRandom = function () {
	let cambiaColore = document.getElementById("changeMyColor");
	cambiaColore.style.cursor = "pointer";
	cambiaColore.onclick = function () {
		const red = Math.floor(Math.random() * 256);
		const green = Math.floor(Math.random() * 256);
		const blue = Math.floor(Math.random() * 256);

		let coloreRandom = `rgb(${red}, ${green},${blue})`;

		cambiaColore.style.color = coloreRandom;
	};
};

changeColorWithRandom();

/* EXTRA ESERCIZIO 16
      Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
    */

const deleteVowels = function () {
	document.querySelectorAll("h1, h2, li, a, p, h3, th, td").forEach((el) => {
		el.innerText = [...el.innerText]
			.filter((caratteri) => {
				caratteri = caratteri.toLowerCase();
				return (
					caratteri !== "a" &&
					caratteri !== "e" &&
					caratteri !== "i" &&
					caratteri !== "o" &&
					caratteri !== "u"
				);
			})
			.join("");
	});
};

deleteVowels();
