const btn = document.getElementById('salva');
let ul = document.getElementById('task');
let taskInput = document.getElementById('input');
const arrayTask = [];


btn.addEventListener('click', function(e) {
  e.preventDefault();

  if(taskInput.value !== ''){
    aggiungiTask();
    scriviLista();
    cancellaInput();
  }else {
    alert('Il campo di task non può essere vuoto!'); 
    return;
    
  }
});
  
const aggiungiTask = () => {
  arrayTask.push(taskInput.value);
}

const scriviLista = () => {
  ul.innerHTML = '';
  arrayTask.forEach((el, index) => {
    let singleTask = document.createElement('li');
    singleTask.classList.add('lista');
    singleTask.innerHTML = `${el}`;

    let pulsante = document.createElement('button');
    pulsante.classList.add('button');
    pulsante.innerHTML = '❎';
    pulsante.setAttribute('onclick', `elimina(${index})`);

    singleTask.appendChild(pulsante);
    ul.appendChild(singleTask);
  });
  barraTask();
}

function  cancellaInput() {
  taskInput.value = '';
}

function elimina(index) {
  arrayTask.splice(index, 1);
  scriviLista();
}

function barraTask() {
  const elencoTask = document.querySelectorAll('li');
  elencoTask.forEach((el) => {
    el.onclick = function() {
      el.classList.toggle('barrato');
    }
  })
}

  
  /*let li = document.createElement('li');
   li.innerText = taskValue;

   ul.appendChild(li);

   taskInput.value = '';*/
  
  /*let elimina = document.createElement('button');
  elimina.innerText = 'Fatto';
  elimina.onclick = function() {

  }*/




function taskCompletata() {

}