document.addEventListener("DOMContentLoaded", () => {
  // your code here
  addTodoStuff()
  // deleteTodoStuff()

});


const todoForm = document.getElementById('create-task-form')
let todoItem = document.getElementById('new-task-description')
const todoItems = document.getElementById('tasks')
let pri = document.getElementById('priority')


function createDeleteButton() {
  let i = document.createElement("input");
  i.setAttribute('type', "button");
  i.setAttribute('id', "delete-button");
  i.setAttribute('value', "x");
  i.addEventListener('click', () => {
    console.log('clicked!')

    deleteTodoStuff(i)

  })
  return i
}

function createEditButton() {
  let e = document.createElement("input");
  e.setAttribute('type', "button");
  e.setAttribute('id', "edit-button");
  e.setAttribute('value', "edit");
  e.addEventListener('click', () => {
    console.log('clicked!')

    editTodoStuff(e)

  })
  return e
}

function addTodoStuff() {

  todoForm.addEventListener('submit', (ev) => {
    ev.preventDefault()

    const li = document.createElement('li')
    li.textContent = todoItem.value
    i = createDeleteButton()
    e = createEditButton()
    i.setAttribute('datadescription', li.textContent)
    e.setAttribute('datadescription', li.textContent)
    li.setAttribute('id', li.textContent)

    li.classList.add(priority.value);
    todoItems.appendChild(li)
    li.appendChild(i)
    li.appendChild(e)
  })

}

function deleteTodoStuff(i) {

  i.parentElement.parentElement.removeChild(i.parentElement)

}

function editTodoStuff(e) {

  hideButton()
  todoItem.value = e.parentElement.textContent
  pri.value = e.parentElement.classList.value
  deleteTodoStuff(e)

}


function hideButton() {

  document.getElementById('create').style.visibility = "hidden"
  document.getElementById('edit').style.visibility = "visible"

}

function newTask() {

  document.getElementById('create').style.visibility = "visible"
  document.getElementById('edit').style.visibility = "hidden"

}
