document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form')
  const task = document.getElementById('new-task-description')
  const tasks = document.getElementById('tasks')
  const deleteForm = document.getElementById('delete-form')
  const ul = document.getElementById('tasks')

  form.addEventListener('submit', (ev) => {
    ev.preventDefault()

    const li = document.createElement('li')
    li.textContent = task.value
    li.classList.add(priority.value)

    tasks.appendChild(li)

    const button = document.createElement('button')
    button.innerText = "Delete"

    button.addEventListener('click', (ev) => {
      ev.preventDefault()
      li.parentNode.removeChild(li)
    })

    li.appendChild(button)

    const edit = document.createElement('button')
    edit.innerText = "Edit"

    edit.addEventListener('click', (ev) => {
      ev.preventDefault()


      const editInput = document.createElement("input")
      editInput.type= "text"
      const submit = document.createElement("button")
      submit.innerText = "Submit"

      li.innerText = ""
      li.appendChild(editInput)
      li.appendChild(submit)


      submit.addEventListener('click', () => {
        li.textContent = editInput.value
        li.appendChild(button)
        li.appendChild(edit)
      })

    })

    li.appendChild(edit)

  })


  deleteForm.addEventListener('submit', (ev) => {
    ev.preventDefault()

    const array_list = document.querySelectorAll('#tasks li')
    for(var i=0; item=array_list[i]; i++){
      ul.removeChild(item)
    }
  })

});
