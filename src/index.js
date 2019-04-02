document.addEventListener("DOMContentLoaded", () => {
  addToList()
});

const todoForm = document.getElementById('create-task-form')
const todoItem = document.getElementById('new-task-description')
const todoItems = document.getElementById('tasks')

function createDeleteButton(){
  let i = document.createElement("input")
  i.setAttribute('type', "button")
  i.setAttribute('id', "delete-button")
  i.setAttribute('value', "delete")
  i.addEventListener('click', () => {
    console.log('clicked!')
    deleteTodoStuff(i)
  })
  return i
}


function addToList(){
todoForm.addEventListener('submit', (ev) => {
ev.preventDefault()

const li = document.createElement('li')
li.textContent = todoItem.value
i = createDeleteButton()
todoItems.appendChild(li)
li.appendChild(i)
})
}

function deleteTodoStuff(i){
  i.parentElement.parentElement.removeChild(i.parentElement)
}
