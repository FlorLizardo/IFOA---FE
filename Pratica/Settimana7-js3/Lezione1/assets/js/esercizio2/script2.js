//Esercizio 2

/*Crea un form per la creazione di oggetti “Pet” (animali domestici). La classe Pet dovrà essere dotata delle seguenti proprietà:- petName- ownerName- species // (cane, gatto, coniglio etc.)- breed // (labrador, soriano, nano etc.) Nella classe che utilizzerai per creare questi oggetti aggiungi anche un metodo che restituisca true se due animali condividono lo stesso padrone. Crea, raccogliendo i dati dal form, diverse istanze della classe Pet e mostrane i dati in una lista sottostante.*/

const petName = document.getElementById("petName");
const ownerName = document.getElementById("ownerName");
const species = document.getElementById("species");
const breed = document.getElementById("breed");
const btn = document.getElementById("invia");
const lista = document.getElementById("datiPets");
const arrayDatiPets = [];

class Pet {
	constructor(petName, ownerName, species, breed) {
		this.petName = petName;
		this.ownerName = ownerName;
		this.species = species;
		this.breed = breed;
	}

	confrontoPadrone(padrone) {
		return this.ownerName === padrone.ownerName;
	}
}

btn.addEventListener("click", function (e) {
	const newPet = new Pet(
		petName.value,
		ownerName.value,
		species.value,
		breed.value
	);

	arrayDatiPets.push(newPet);
	console.log(arrayDatiPets);

	reset();

	scriviLista();


});

function scriviLista() {
	lista.innerHTML = "";

	arrayDatiPets.forEach((el, index) => {
		const listItem = document.createElement("li");
		listItem.innerHTML = `Nome della mascota: ${el.petName}, Padrone: ${el.ownerName}, Tipo di animale: ${el.species}, Razza: ${el.breed}`;
		lista.appendChild(listItem);
	});
}

function reset() {
	petName.value = "";
	ownerName.value = "";
	species.value = "";
	breed.value = "";
}
