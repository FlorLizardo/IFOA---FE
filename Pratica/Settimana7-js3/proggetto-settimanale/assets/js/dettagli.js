const myUrl = "https://striveschool-api.herokuapp.com/api/product/";
const myToken =
	"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MjZlZGMwNTgzNTAwMTg1MjJjY2QiLCJpYXQiOjE3MDQ4NzE1MDksImV4cCI6MTcwNjA4MTEwOX0.nXK3g9EYqBCVAeJHGaZMQOGgla5nfVDnCXZeEa5XVnU";
const myHeaders = {
	"Authorization": myToken,
	"Accept": "application/json",
	"Content-Type": "application/json",
};

            const params = new URLSearchParams(location.search)
            const id = params.get("id")


            const showDetailsProduct = () =>{
                console.log(id);
                fetch(myUrl + id, {
                    headers: myHeaders,
                })
            .then(res => res.json())
            .then(data => populateDetailPage(data))
            };


            function populateDetailPage(data){

                const containerDetails = document.getElementById("containerDetails");
                containerDetails.innerHTML="";

                let newDetails = `
                <img src="${data.imageUrl}" alt="" height="300px">
                        <div class=p-5>
                            <h5>Nome prodotto: ${data.name}</h5>
                            <p>Descrizione: ${data.description}</p>
                            <p>Brand: ${data.brand}</p>
                            <p>Prezzo: ${data.price}€</p>
                        </div>`

                containerDetails.innerHTML = newDetails;

            };

            window.onload = showDetailsProduct;

