import * as todoFunctions from './todoFunction.js'

document.getElementById('addToDo').addEventListener('click', todoFunctions.addNewToDo)

todoFunctions.showToDo()