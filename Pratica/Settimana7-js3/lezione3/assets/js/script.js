//creazione delle cards
const url = "https://striveschool-api.herokuapp.com/books";
const rowContainer = document.getElementById("root");
const shoppingCart = document.getElementById("shoppingCart");

let booksArray = [];
let shoppingCartList = JSON.parse(localStorage.getItem("shoppingCart")) || [];

const books = () => {
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			populateHomePage(data);
			booksArray = data;
		});
};

function populateHomePage(data) {
	rowContainer.innerHTML = "";

	data.forEach((el) => {
		const isBookInCart =
			shoppingCartList.findIndex((bookCart) => bookCart.asin === el.asin) !== -1;
		rowContainer.innerHTML += `
		<div class='col-4 g-4'>
		<div class='card'>
        <img src="${el.img}" class="card-img-top w-75 ps-5" alt="copertina del libro">
        <div class="card-body">
          <h5 class="card-title">${el.title}</h5>
          <span class="bg-secondary-subtle py-1 px-2 rounded-2">${el.category}</span>          
          <p class="card-text">${el.price}€</p>
          <button class="btnScarta btn btn-danger" onclick="btnScarta(event)">Scarta</button>
          <button class="btnCompra btn btn-success" onclick="btnCompra(event, '${el.asin}')">Compra</button>
        </div>
		</div>
		</div>
		
        `;
	});
}

//Onclick

const btnScarta = (event) => {
	event.target.closest(".col-4").remove();
};

const btnCompra = (event, asin) => {
	const isBookInCart =
		shoppingCartList.findIndex((book) => book.asin === asin) !== -1;
	if (isBookInCart) {
		return;
	}

	const book = booksArray.find((book) => book.asin === asin);
	shoppingCartList.push(book);
	localStorage.setItem("shoppingCart", JSON.stringify(shoppingCartList));

	listaBookCart();
	event.target.closest(".col-4").classList.add("selected");
};

//creazioneCarrello
function listaBookCart() {
	shoppingCart.innerHTML = "";

	shoppingCartList.forEach((el) => {
		shoppingCart.innerHTML += `
	 <div class="shopping-item">
	 <div class="d-flex align-items-start gap-2">
					 <img src=${el.img}  class="img-fluid" width="60" />
			 <div class="flex-grow-1">
					 <p class="mb-3">
							 ${el.title}
					 </p>
					 <div class="d-flex justify-content-between">
							 <p class="fw-bold">
									 ${el.price}€
							 </p>
							 <div>
									 <div>
											 <button class="btn btn-danger" onclick="deleteItem('${el.asin}')">Elimina </button>
									 </div>
							 </div>
						</div >
						</div >
						</div >
						<hr class="text-ligth" width="200"/>
	 </div>
	 `;
	});
}

function deleteItem(asin) {
	const index = shoppingCartList.findIndex((book) => book.asin === asin);

	if (index !== -1) {
		shoppingCartList.splice(index, 1);
		localStorage.setItem("shoppingCart", JSON.stringify(shoppingCartList));
	}

	listaBookCart();
}

window.onload = () => {
	books();
};
