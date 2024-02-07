const myUrl = "https://striveschool-api.herokuapp.com/api/product/";
const myToken =
	"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MjZlZGMwNTgzNTAwMTg1MjJjY2QiLCJpYXQiOjE3MDczMTU2NDEsImV4cCI6MTcwODUyNTI0MX0.gOXj2Mfu-VpJ-mMaaoj_CFYfTGTziOzsLTTp2W9mBOk";
const myHeaders = {
	Authorization: myToken,
	Accept: "application/json",
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
			location.href = "home-page.html";
		})
		.catch((err) => console.error("Error:", err));
}

//resetForm
function reset() {
  document.getElementById("nameInput").value = "";
	document.getElementById("brandInput").value = "";
	document.getElementById("priceInput").value = "";
	document.getElementById("imgInput").value = "";
	document.getElementById("descriptionInput").value = "";
}

//Edit
const urlParams = new URLSearchParams(location.search);
const productId = urlParams.get("id");

//button modifiche
const showModifiche = () => {
	const finalUrl = myUrl + productId;
	fetch(finalUrl, {
		method: "GET",
		headers: myHeaders,
	})
		.then((response) => response.json())
		.then((data) => {
			modificaCard(data);
		})
		.catch((err) => console.log(err));
};

function modificaCard(data) {
	document.getElementById("nameInput").value = data.name;
	document.getElementById("brandInput").value = data.brand;
	document.getElementById("priceInput").value = data.price;
	document.getElementById("imgInput").value = data.imageUrl;
	document.getElementById("descriptionInput").value = data.description;
}

//button salvare modifiche
const saveMofifiche = () => {
  const newRecord = {
		name: document.getElementById("nameInput").value,
		brand: document.getElementById("brandInput").value,
		price: document.getElementById("priceInput").value,
		imageUrl: document.getElementById("imgInput").value,
		description: document.getElementById("descriptionInput").value,
	};

  const finalUrl = myUrl + productId;
  fetch(finalUrl, {
    method: 'PUT',
    headers: myHeaders,
    body: JSON.stringify(newRecord)
  })
  .then(resp => resp.json())
  .then(data => {
    product = data;
    location.href = "home-page.html";
  })
  .catch((err) => console.error("Error:", err));
}

//delete
const deleteProduct = () => {
  const finalUrl = myUrl + productId;
  fetch(finalUrl, {
    method: 'DELETE',
    headers: myHeaders,
  })
  .then(
    location.href = "home-page.html"
  )
}

window.onload = () => {
	getProduct();
	showModifiche();
};
