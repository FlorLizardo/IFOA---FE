const myUrl = "https://striveschool-api.herokuapp.com/api/product/";
const myToken =
	"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MjZlZGMwNTgzNTAwMTg1MjJjY2QiLCJpYXQiOjE3MDIzNzMxMDEsImV4cCI6MTcwMzU4MjcwMX0.qjIrOD2ZubrmodVoTVey8dY2Xb9oBh3hYQmXgIMxbGU";
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
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      product = data;
      
    })
    .catch((err) => console.error("Error:", err));
}


//Edit

// const urlParams = new URLSearchParams(window.location.search);
// const productId = urlParams.get('id');


//resetForm
function reset() {
	document.getElementById("nameInput").value = "";
	document.getElementById("brandInput").value = "";
	document.getElementById("priceInput").value = "";
	document.getElementById("imgInput").value = "";
	document.getElementById("descriptionInput").value = "";
}


window.onload = () => {
  getProduct();
}
