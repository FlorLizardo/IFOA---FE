const myUrl = "https://striveschool-api.herokuapp.com/api/product/";
const myToken =
	"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MjZlZGMwNTgzNTAwMTg1MjJjY2QiLCJpYXQiOjE3MDQ4NzE1MDksImV4cCI6MTcwNjA4MTEwOX0.nXK3g9EYqBCVAeJHGaZMQOGgla5nfVDnCXZeEa5XVnU";
const myHeaders = {
	"Authorization": myToken,
	"Accept": "application/json",
	"Content-Type": "application/json",
};

let product = [];

const getProduct = () => {
	fetch(myUrl, {
		headers: myHeaders,
	})
		.then((response) => response.json())
		.then((data) => {
			products = data;
			
		});
};

//Form back-office

function sendProducts() {
  const newRecord = {
    name: document.getElementById("nameInput").value,
    brand: document.getElementById("brandInput").value,
    price: document.getElementById("priceInput").value,
    imageUrl: document.getElementById("imgInput").value,
    description: document.getElementById("descriptionInput").value,
  };
  console.log("newRecord:", newRecord);

  fetch(myUrl, {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(newRecord),
  })
    .then((response) => response.json())
    .then((data) => {
      product = data;
      location.href = '../../home-page.html';
    })
    .catch((err) => console.error("Error:", err));
}


//Edit

const urlParams = new URLSearchParams(location.search);
const productId = urlParams.get('id');


//resetForm
function reset() {
	document.getElementById("nameInput").value = "";
	document.getElementById("brandInput").value = "";
	document.getElementById("priceInput").value = "";
	document.getElementById("imgInput").value = "";
	document.getElementById("descriptionInput").value = "";
}


//modifiche
const showModifiche = () => {
  const finalUrl = myUrl + productId;
  fetch(finalUrl, {
    method: 'GET',
    headers: myHeaders
  })
  .then(response => response.json())
  .then(data => {
    modificaCard(data)
  })
  .catch(err => console.log(err));
}

function modificaCard(data) {
    document.getElementById("nameInput").value = data.name;
    document.getElementById("brandInput").value = data.brand;
    document.getElementById("priceInput").value = data.price;
    document.getElementById("imgInput").value = data.imageUrl;
    document.getElementById("descriptionInput").value = data.description;
}


window.onload = () => {
  getProduct();
  showModifiche()
}
