document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById("create-task-form");
  const taskDesc = document.getElementById("new-task-description");
  const list = document.getElementById("list");
  const tasks = document.getElementById("tasks");
  let count = 0;

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addTask();
  })

  function addTask() {
    const li = document.createElement("li");
    console.log(li)
    li.classList.add(priority.value)
    const editbutton = document.createElement("button");
    editbutton.textContent = "edit"
    editbutton.addEventListener('click', e => {
      edit_task(li)
    })
    const deletebutton = document.createElement("button");
    deletebutton.textContent = "delete"
    deletebutton.addEventListener('click', e => {
      tasks.removeChild(li)
    })

    const span = document.createElement('span')
    span.textContent = taskDesc.value;
    li.appendChild(span)
    li.appendChild(editbutton)
    li.appendChild(deletebutton)
    tasks.appendChild(li);
    // count++;
    // console.log(count);
  }

  function edit_task(parent) {
    edit = document.createElement('input')
    submit = document.createElement('button')
    submit.textContent = "submit"

    span = parent.children[0]
    editButton = parent.children[1]
    deleteButton = parent.children[2]

    submit.addEventListener('click', (e) => {
      // Save the text in input to span
      // Restore showing buttons
      span.textContent = edit.value
      editButton.style.display = "initial"
      deleteButton.style.display = "initial"
    })

    edit.value = span.textContent
    span.textContent = ""
    editButton.style.display = "none"
    deleteButton.style.display = "none"
    span.appendChild(edit)
    span.appendChild(submit)
  }
});


// arrow function example
// function some_method(num) {
//
// }

// some_method = (num) => {
//
// }
