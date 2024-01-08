import { todoList } from "./list.js";
let listGlobal = [...todoList];

const increment = function() {
  let counter = 0;

  return function() {
    counter++;
    document.getElementById('counter').innerText = counter;
  }
}()

function showToDo() {
  const list = document.getElementById('list');
  list.innerHTML = '';
  listGlobal.forEach((el) => {
    let newLi = document.createElement('li');
    const newButton = document.createElement('button');
    newButton.innerText = 'X';
    newButton.addEventListener('click', () => {
      deleteToDo(Object.keys(el), Object.values(el))
    })
    newLi.innerHTML = Object.keys(el) + ' - ' + Object.values(el);
    newLi.appendChild(newButton);
    list.appendChild(newLi);
  })
}

function addNewToDo(){
  const newToDo = document.getElementById('newToDoInput').value;
  const newToDoTime = document.getElementById('toDoTime').value;
  if(newToDo === '') {
    alert('Devi inserire del testo');
    return;
  }
  if(newToDoTime === '') {
    alert('Devi inserire una data');
    return;
  }
  listGlobal.push({[newToDoTime] : newToDo})
  listGlobal.sort((a, b) => {
    return Object.keys(a) < Object.keys(b) ? -1 : 1;
  })
  increment();
  showToDo();
}

function deleteToDo(date, task) {
  let tiHoBeccato = 0;
  listGlobal.find((el, index) => {
    const keys = Object.keys(el)[0];
    const value = Object.values(el)[0];
    console.log(keys, value);
    if (keys == date && value == task) {
      tiHoBeccato = index;
    }
  })
  listGlobal.splice(tiHoBeccato, 1);
  showToDo();
}

export {showToDo, addNewToDo}

