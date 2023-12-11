/* keyApi: LxxBksc399Pbczzy0ANdMxdKf1UytxzlQmbER0qfU1wn31SoS1WGvGRf   */

//fetch
const url = 'https://api.pexels.com/v1/search?query=';
const key = 'LxxBksc399Pbczzy0ANdMxdKf1UytxzlQmbER0qfU1wn31SoS1WGvGRf';


const getPhotos = (query) => {
  const urlFinale = url + query;
  fetch(urlFinale, 
    {headers: {
      'Authorization': key
  }}
  )
  .then((response) => response.json())
  .then((data) => {
    loadingPhotos(data.photos);
  })
}

const searchPhotos = () => {
  const searchUser = document.getElementById('searchUser'); 
  query = searchUser.value;
  const urlFinale = url + query;
  fetch(urlFinale, 
    {headers: {
      'Authorization': key
  }}
  )
  .then((response) => response.json())
  .then((data) => {
    photos = data;
    loadingPhotos(data.photos);
  })
  
}

function loadingPhotos(data) {
  const card = document.getElementById('cardsPhotos');
  card.innerHTML = '';

  data.forEach(element => {
    let newCol = `
    <div class="col-md-4" id='colPhoto'>
    <div class="card mb-4 shadow-sm">
      <img src='${element.src.original}' />
      <div class="card-body">
        <h5 class="card-title">Lorem Ipsum</h5>
        <p class="card-text">
          This is a wider card with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">
              View
            </button>
            <button type="button" class="btn btn-sm btn-outline-secondary" onclick='hidePhoto(event)'>
              Hide
            </button>
          </div>
          <small class="text-muted">${element.id}</small>
        </div>
      </div>
    </div>
  </div>
    `
    card.innerHTML += newCol;
  });
}

const hidePhoto = (event) => {
  event.target.closest('.col-md-4').remove();
};

//Details Img
const detailsPhoto = () => {
  const urlFinale = url + query;
  fetch(urlFinale, 
    {headers: {
      'Authorization': key
  }}
  )
  .then((response) => response.json())
  .then((data) => {
    // photos = data;
    viewPhotos(data.photos);
  })
}


window.onload = () => {
	getPhotos();
};