// let sound = new Audio("percorsoFile");
let play = 1;
let points = 0;
let level = 'easy';
let levels = {
  'easy': 20,
  'medium': 40,
  'hard': 60
}

const levelSelector = document.getElementById('level');
levelSelector.onchange = () =>{
  level = levelSelector.value;
  clearGrid();
  createBomb();
}

function createGrid() {
  const box = document.getElementById('mainDiv');
  for(let i = 0; i < 100; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    square.setAttribute('onclick', 'step(this)');//this ci permette di ascoltare tutto l'evento
    box.appendChild(square);
  }
  createBomb();
}

function createBomb() {
   let squares = document.querySelectorAll('.square');
   squares.forEach(el => {
    el.classList.remove('bomb');
   })
   for(i=0; i <= levels[level]; i++) {
    let casual = Math.floor(Math.random() * 100);
    squares[casual].classList.add('bomb');
   }
}

function step(e) {
  if (!e.classList.contains('bomb') && play === 1) {
    e.classList.add('good');
    points++;
    document.getElementById('points').innerText = points;
  }else if (e.classList.contains('bomb') && play === 1) {
    e.classList.add('exploded');
    //sound.play();
    play = 0;
    document.getElementById('gameOver').style.opacity = 1;
  }
}

function clearGrid() {
  const box = document.getElementById('mainDiv').innerHTML = '';
  play = 1;
  points = 0;
  document.getElementById('points').innerText = '';
  document.getElementById('gameOver').style.opacity = 0;
  createGrid();
}

createGrid();