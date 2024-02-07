const myUrl = "https://striveschool-api.herokuapp.com/api/product/";
const myToken =
	"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MjZlZGMwNTgzNTAwMTg1MjJjY2QiLCJpYXQiOjE3MDczMTU2NDEsImV4cCI6MTcwODUyNTI0MX0.gOXj2Mfu-VpJ-mMaaoj_CFYfTGTziOzsLTTp2W9mBOk";
const myHeaders = {
	Authorization: myToken,
	Accept: "application/json",
	"Content-Type": "application/json",
};

let product = [];

//Form back-office
function sendProducts() {
	
	const	name = document.getElementById("nameInput").value;
	const	brand = document.getElementById("brandInput").value;
	const	price = document.getElementById("priceInput").value;
	const	imageUrl = document.getElementById("imgInput").value;
	const	description = document.getElementById("descriptionInput").value;

  if(name && brand && price && imageUrl && description) {
    const newRecord = {
      name, brand, price, imageUrl, description
    }
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
  }else {
    alert('Devi compilare tutti i campi')
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

//salvare le modifiche
const saveMofifiche = () => {
  const name = document.getElementById("nameInput").value;
  const brand = document.getElementById("brandInput").value;
  const price = document.getElementById("priceInput").value;
  const imageUrl = document.getElementById("imgInput").value;
  const description = document.getElementById("descriptionInput").value;

  if (name && brand && price && imageUrl && description) {
    const newRecord = {
      name,
      brand,
      price,
      imageUrl,
      description
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
  } else {
    alert("Compila tutti i campi");
  }
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

//buttons
const getButtons = () => {
  const edit = document.getElementById('edit');
  const deleteButton = document.getElementById('delete');
  const save = document.getElementById('save');

  if(productId) {
    edit.style.display = 'block';
    deleteButton.style.display = 'block';
    save.style.display = 'none'
  }else {
    edit.style.display = 'none';
    deleteButton.style.display = 'none';
    save.style.display = 'block'
  }
}

window.onload = () => {
	showModifiche();
  getButtons();
};
