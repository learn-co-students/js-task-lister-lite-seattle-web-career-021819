const taskForm = document.querySelector("#create-task-form")
const newTask = document.querySelector("#new-task-description")
const todoList = document.querySelector("#tasks")
const priority = document.getElementById('priority')

taskForm.addEventListener("submit", (ev) => {
  ev.preventDefault()

  const task = newTask.value
  const item = document.createElement("li")

  const deleteButton = document.createElement("input")
  deleteButton.type = "button"
  deleteButton.value = "X"

  let select = priority.options[priority.selectedIndex].value

  const editButton = document.createElement("input")
  editButton.type = "button"
  editButton.value = "edit"

  item.innerText = task + " " + select
  todoList.appendChild(item).appendChild(deleteButton)
  item.appendChild(editButton)


  item.classList.add(select)
  list = document.getElementById("tasks").children
  a = Array.from(list)
  // a.sort(function(x, y){
  //   let a = x.class;
  //   let b = y.class;
  //   return a.localeCompare(b)
  // });

  deleteButton.addEventListener("click", (ev) => {
    deleteButton.parentNode.remove()
  })

  editButton.addEventListener("click", (ev) => {
    let form = document.createElement("input")
    form.type = "text"
    form.value = item.innerText

    item.innerText = ""

    item.appendChild(form)
    const submitButton = document.createElement("input")
    submitButton.type = "button"
    submitButton.value = "submit"

    item.appendChild(submitButton)

    submitButton.addEventListener("click", (ev) => {
      item.innerText = form.value
      item.appendChild(deleteButton)
      item.appendChild(editButton)
    })

  })

})
