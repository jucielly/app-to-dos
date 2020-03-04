let toDoUl = document.getElementById("lista-to-dos")
let inputToDo = document.getElementById("adicionar-um-toDo")
let toDoButoon = document.getElementById("add-button")


let todos = ["Estudar javascript", "Ir para a academia", "Comer um Bolinho"]


function renderizarToDos() {
    toDoUl.innerHTML = ""
    for (todo of todos) {
        let todoElement = document.createElement("li")
        let todoText = document.createTextNode(todo)


        todoElement.appendChild(todoText)
        toDoUl.appendChild(todoElement)
    }


}

renderizarToDos()


function adicionarToDos() {
    let todoText = inputToDo.value

    todos.push(todoText)
    inputToDo.value = ""
    renderizarToDos()
}

toDoButoon.onclick = adicionarToDos