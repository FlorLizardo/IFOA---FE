//url, token, headers
// const myUrl = "https://striveschool-api.herokuapp.com/api/product/";
// const myToken =
// 	"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MjZlZGMwNTgzNTAwMTg1MjJjY2QiLCJpYXQiOjE3MDIzNzMxMDEsImV4cCI6MTcwMzU4MjcwMX0.qjIrOD2ZubrmodVoTVey8dY2Xb9oBh3hYQmXgIMxbGU";
// const myHeaders = {
// 	"Authorization": myToken,
// 	"Accept": "application/json",
// 	"Content-Type": "application/json",
// };

let products = [];

const getProducts = () => {
	fetch(myUrl, {
		headers: myHeaders,
	})
		.then((response) => response.json())
		.then((data) => {
			products = data;
			createProducts(data);
		});
};

//products homePage
const createProducts = (data) => {
	const card = document.getElementById("rowCard");
	// card.innerHTML = '';

	data.forEach((element) => {
		let newCol = `
    <div class="card col-3" >
    <img src="${element.imageUrl}" class="card-img-top" alt="image-products">
    <div class="card-body">
      <h5 class="card-title">${element.name}</h5>
      <p class="card-text">${element.description}</p>
      <p>${element.price}€</p>
      <a class="btn btn-warning" onclick="modificaCard('${element._id}')" href="../../back-office.html?id=${element._id}">Modifica</a>
      <a class="btn btn-primary" onclick="showDetailsProduct()" href="../../dettagli.html?id=${element._id}">Scopri di più</a>
    </div>
  </div>
    `;
		card.innerHTML += newCol;
	});
};

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
console.log(productId)

function modificaCard(productId) {
  
  const finalUrl = myUrl + productId
  fetch(finalUrl, {
    method: "GET",
		headers: myHeaders,
		// body: JSON.stringify(newRecord),
  })
  .then((response) => {response.json()
    console.log(response)})
 
  .then((data) => {
    console.log(document.getElementById("nameInput").value = data.name);
    document.getElementById("brandInput").value = data.brand;
    document.getElementById("priceInput").value = data.price;
    document.getElementById("imgInput").value = data.imageUrl;
    document.getElementById("descriptionInput").value = data.description;
   
    // window.location.href = `../../back-office.html?id=${productId}`;
  })
		.catch((err) => console.log(err));
}




//dettagli

window.onload = () => {
	getProducts();

};
