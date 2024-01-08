//per gestire i punti
let counter = 0;
let clicked = false;
const audio = new Audio('boom.wav')

function getPoints() {
  let points = document.getElementById('number');
  points.innerHTML = counter++;
  let palla = document.getElementById('palla');
  // palla.style = ('transition-duration: 700ms; transform: scale(1.7)');
  // clicked = true;
  // audio.play();
}
getPoints();

//mov palla
function move() {
  let palla = document.getElementById('palla');
  let positionY = 0;
  let positionRandomX = Math.floor(Math.random()*85)
  palla.style.left = positionRandomX + '%'

  const ball = setInterval(function() {
    if (positionY <= 100 && positionY >= 0) {
      positionY = positionY + 1;
      palla.style.top = positionY + '%';
    }else {
      clearInterval(ball);
      start();
    }
  }, 60)
  
}

function start() {
  move();
}

window.onload = () => {
  move();
  
}

