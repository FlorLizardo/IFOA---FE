//url, token, headers
const myUrl = "https://striveschool-api.herokuapp.com/api/product/";
const myToken =
	"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MjZlZGMwNTgzNTAwMTg1MjJjY2QiLCJpYXQiOjE3MDIzNzMxMDEsImV4cCI6MTcwMzU4MjcwMX0.qjIrOD2ZubrmodVoTVey8dY2Xb9oBh3hYQmXgIMxbGU";
const myHeaders = {
	Authorization: myToken,
	Accept: "application/json",
	"Content-Type": "application/json",
};

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
      <a href="../../backOffice/back-office.html?id=${element._id}" class="btn btn-warning" id="${element._id}" ">Modifica</a>
      <a class="btn btn-primary" id="${element._id}" onclick="handleCard('${element._id}','show')">Scopri di più</a>
    </div>
  </div>
    `;
		card.innerHTML += newCol;
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

	fetch(myUrl, {
		method: "POST",
		headers: myHeaders,
		body: JSON.stringify(newRecord),
	})
		.then((response) => response.json())
		.then((data) => {
			products = data;
			createProducts(products);
		})
		.catch((err) => console.log(err));
	console.log(products);
	window.location.href = '../../homePage/home-page.html'
}

//Edit
function modificaCard() {
  const newRecord = {
		name: document.getElementById("nameInput").value,
		brand: document.getElementById("brandInput").value,
		price: document.getElementById("priceInput").value,
		imageUrl: document.getElementById("imgInput").value,
		description: document.getElementById("descriptionInput").value,
	};
  fetch(myUrl, {
		method: "POST",
		headers: myHeaders,
		body: JSON.stringify(newRecord),
	})
		.then((response) => response.json())
		.then((data) => {
			products = data;
			createProducts(products);
		})
		.catch((err) => console.log(err));
	console.log(products);
	window.location.href = '../../homePage/home-page.html'
}


//Delete Product
function deleteProd(id) {
	const deleteUrl = myUrl + id;
	fetch(deleteUrl, {
		method: "DELETE",
		headers: myHeaders,
	})
		.then(() => {
			products.splice(
				products.findIndex((el) => el._id === id),
				1
			);
			createProducts(products);
		})
		.catch((err) => console.log(err));
}

//card modifica
async function getRecord(id) {
  const finalUrl = myUrl + id
  const response = await fetch(finalUrl, {
      headers: myHeaders
  })
  return response.json()   
}

async function handleCard(id, action) {
  action === 'show'
  ? document.getElementById('edit').style.display = 'none'
  : document.getElementById('edit').style.display = 'block';

  if(id !== null) {
    try {
      const data = await getRecord(id);
      document.getElementById('productDetailsTitle').innerText = 'Modifica:' + data.name;
      document.getElementById('nameInput').value = data.name;
      document.getElementById('brandInput').value = data.brand;
      document.getElementById('priceInput').value = data.price;
      document.getElementById('imgInput').value = data.imageUrl;
      document.getElementById('descriptionInput').value = data.description;
    } catch (error) {
      console.error('errore', error);
    }
  }else {
    document.getElementById('productDetailsTitle').innerText = 'Add products';
      document.getElementById('nameInput').value = '';
      document.getElementById('brandInput').value = '';
      document.getElementById('priceInput').value = '';
      document.getElementById('imgInput').value = '';
      document.getElementById('descriptionInput').value = '';
  }
}

//resetForm
function reset() {
	document.getElementById("nameInput").value = "";
	document.getElementById("brandInput").value = "";
	document.getElementById("priceInput").value = "";
	document.getElementById("imgInput").value = "";
	document.getElementById("descriptionInput").value = "";
}

//dettagli

window.onload = () => {
	getProducts();
};
