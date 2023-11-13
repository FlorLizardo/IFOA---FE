/*1. Capire in che mese siamo, per scriverlo nell'h1, e quanti giorni ha il mese, per generare il corretto nro di celle.*/

const now = new Date();

/*per salvare gli appuntamenti abbiamo bisogno di un array, perchè ogni apputo è una stringa, ogni giotno puo contenere infiniti appti e ogni mese ha un numero di gironi variabile
creeremo un array di array, dove l'array padre èe il mese e gli array figli rappresentano i giorni:

[rapprensenta il mese
  [giorno 1], [giorno2], []]

  Es.
  [
    [], 
    [],
    ['09:00 - live coding calendario', '14: 00 - esercizio quotidiano', '18:00 - apperitivo']
    []
  ]

*/

//d'accordo a quello anteriore, Si crea il guscio del mese.

const appointments = [];

//Dentro appointments pushiamo tanti sottoarray quanti sono i giorni del mese corrente

const monthName = [
	"Gennaio",
	"Febbraio",
	"Marzo",
	"Aprile",
	"Maggio",
	"Giugno",
	"Luglio",
	"Agosto",
	"Settembre",
	"Ottobre",
	"Novembre",
	"Dicembre",
];

const scriviMese = function () {
	const title = document.querySelector("h1");
	const indiceMese = now.getMonth(); //restituice l'indice
	const nomeMese = monthName[indiceMese]; //novembre
	title.innerText = nomeMese;
};

scriviMese();

//sappiamo in che mese siamo, ma quanti giorni ha questo mese?
//per sapere quanti giorni ha mi serve anche l'anno

const giorniTotali = function () {
	const anno = now.getFullYear(); //2023
	const mese = now.getMonth(); //adesso 10

	//nell'oggetto date il numero dei giorni del mese parte da 1, mi basta sapere qual'è l'ultimo giorno del mese in corso per avere il suo numero di giorni
	//Per sapere l'ultimo giorno del mese in corso, creo la data del primo giorno del mese succesivo al mese in corso e faccio -1

	let ultimoGiorno = new Date(anno, mese + 1, 0); //oggi questa data corrisponde allo 0 dicembre 2023, che non esiste, e quindi è il 30 novembre; novembre ha 30 giorni

	const numeroGiorni = ultimoGiorno.getDate();
	return numeroGiorni; //numeroGiorni è il nro di volte per qui dovvrò ripetere la creazione dei div correspondenti ai singoli giorni
};

//quando carico un mese, eventuali classi selected devono essere rimosse, senno vedrò selezzionati i giorni del mese precedente che avevano degli appmti

//seleziono tutti gli elementi con classi .selected e rimuovo la classe

const deselezionaCelle = function () {
	const celle = document.querySelectorAll(".day");
	celle.forEach((el) => {
		el.classList.remove("selected");
	});
};

//quando faccio click su un giorno, nel div id=newMeetingDay, dovrò leggere la data selezionata

const giornoAppuntamento = function (indiceGiorno) {
	const giorno = document.getElementById("newMeetingDay");
	giorno.classList.add("hasDay");
	giorno.innerText = indiceGiorno + 1;
};

//a questo punto va creata la griglia dei div contenenti i giorni del mese in corso; questa userà il numero di giorni per gestire l'array globale creato all'inizio e scrivera i vari div

const creaGriglia = function (numeroGiorni) {
	//numeroGiorni e il nro di giorni del mese corrente

	const calendarDiv = document.getElementById("calendar");

	for (let i = 0; i < numeroGiorni; i++) {
		const cellaGiorno = document.createElement("div"); //ad ogni giorno associo un div
		cellaGiorno.classList.add("day");

		cellaGiorno.addEventListener("click", function (el) {
			deselezionaCelle(); //deseleziono l'eventuale altra cella selezionata
			cellaGiorno.classList.add("selected"); //aggiungo la classe css per mostrare la selezione del giorno cliccato
			giornoAppuntamento(i); //il giorno cliccato nella sezione giorno del form
			//se ci sono già eventi nella giornata devo fare comparire la lista degli eventi che ci sono già
			if (appointments[i].length > 0) {
				mostraAppuntamenti(i);
			} else {
				const divAppuntamenti = document.getElementById("appointments");
				divAppuntamenti.style.display = "none";
			}
		});
		//devo scrivere il nro del giorno nel div
		const valoreCella = document.createElement("h3");
		valoreCella.innerText = i + 1;
		//appendo gli elementi creati
		cellaGiorno.appendChild(valoreCella);
		calendarDiv.appendChild(cellaGiorno);

		//creato il calendario, inserisco nell'array appointments l'array dei giorni del mese
		appointments.push([]);
	}
};

creaGriglia(giorniTotali());

const mostraAppuntamenti = function (indiceGiorno) {
	//con questa funzione si popola la lista degli appti con gli appti del giorno

	//1-prendere gli appti giusti
	const appuntamentiGiorno = appointments[indiceGiorno];
	//2-selezionare la lista contenitore
	const lista = document.querySelector("#appointments ul");
	//3.svuotare la lista
	lista.innerHTML = "";
	//4.ciclare gli apputi del giorno e creare un li per ciascuno di essi
	appuntamentiGiorno.forEach((el) => {
		const newLi = document.createElement("li");
		newLi.innerText = el;
		lista.appendChild(newLi);
	});
	//5.la lista è piena ma ancora nascosta
	const divAppuntamenti = document.getElementById("appointments");
	divAppuntamenti.style.display = "block";
};

//dobbiamo creare nuovi appti
const meetingForm = document.querySelector("form");
meetingForm.addEventListener("submit", function (e) {
	e.preventDefault();

	//giorno dell'evento selezionato
	const selectedDay = document.getElementById("newMeetingDay").innerText;
	//2.ora del evento slezionato
	const meetingTime = document.getElementById("newMeetingTime").value;
	//3.nome dell'apputo
	const meetingName = document.getElementById("newMeetingName").value;
	//4.creo la stringa dell'appto
	const stringaAppuntamento = `${meetingTime} - ${meetingName}`;
	//5.scrivo l'appto nell'array
	const indiceArray = parseInt(selectedDay) - 1;

	appointments[indiceArray].push(stringaAppuntamento);

	//creo un pallino che evidenzi nel calendario la presenza di un calendario

	const pallino = document.createElement("div");
	pallino.classList.add("pallino");
	//cerco il div del giorno selezionato
	const divSelezionato = document.querySelector(".selected");
	if (!divSelezionato.querySelector(".pallino")) {
		divSelezionato.appendChild(pallino);
	}

	meetingForm.reset();

	mostraAppuntamenti(indiceArray);
});
