let toDoUl = document.getElementById("lista-to-dos")
let inputToDo = document.getElementById("adicionar-um-toDo")
let toDoButoon = document.getElementById("add-button")


let todos = ["Estudar javascript", "Ir para a academia", "Comer um Bolinho"]


function renderizarToDos() {
    toDoUl.innerHTML = ""
    for (todo of todos) {
        let todoElement = document.createElement("li")
        todoElement.setAttribute("class","lista")
        let todoText = document.createTextNode(todo)
        let linkelemnt = document.createElement("a")
        linkelemnt.setAttribute("href", "#")
        let linkText = document.createTextNode("Excluir")

        var pos = todos.indexOf(todo)
        linkelemnt.setAttribute("onclick","removerToDos("+pos+")")
        linkelemnt.setAttribute("class","excluir")

        linkelemnt.appendChild(linkText)
        todoElement.appendChild(todoText)
        todoElement.appendChild(linkelemnt)
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


function removerToDos (pos) {
 todos.splice(pos,1)
 renderizarToDos()
}