let products = [];

const getProducts = () => {
	fetch(myUrl, {
		headers: myHeaders,
	})
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			products = data;
			createProducts(data);
		});
};

//products homePage
const createProducts = (data) => {
	const card = document.getElementById("rowCard");

	data.forEach((element) => {
		let newCol = `
    <div class="card col-3" id=${element._id}>
    <img src="${element.imageUrl}" class="card-img-top" alt="image-products">
    <div class="card-body">
      <h5 class="card-title">${element.name}</h5>
      <p class="card-text">${element.description}</p>
      <p>${element.price}€</p>
      <a class="btn btn-warning" onclick="showModifiche()" href="back-office.html?id=${element._id}">Modifica</a>
      <a class="btn btn-primary" onclick="showDetailsProduct()" href="dettagli.html?id=${element._id}">Scopri di più</a>
    </div>
  </div>
    `;
		card.innerHTML += newCol;
	});
};

window.onload = () => {
	getProducts();
};
