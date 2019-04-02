const mainDiv = document.getElementById('main-content');
const form = document.getElementById('create-task-form');
const input = document.getElementById('new-task-description');
const list = document.getElementById('list');
const tasks = document.getElementById('tasks');
const priority = document.getElementById('priority');

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();

    let userInput = input.value;
    let userPriority = priority.value;

    const li = document.createElement('li');

    li.innerText = userInput
    li.classList.add(userPriority);

    tasks.appendChild(li);

    const button = document.createElement('button');
    button.innerText = "Delete";

    button.addEventListener('click', () => {
      li.parentNode.removeChild(li);
    });

    li.appendChild(button);


    const editButton = document.createElement('button');
    editButton.innerText = "Edit";

    editButton.addEventListener('click', (ev) => {
      ev.preventDefault();

      const editForm = document.createElement('form');
      let editInput = document.createElement('input');
      editForm.appendChild(editInput);

      li.innerText = "";
      li.appendChild(editForm);
      let submit = document.createElement('button');
      editForm.appendChild(submit);
      submit.addEventListener('click', () => {
        li.innerText = editInput.value

      });

    });

    li.appendChild(editButton);

  });

});
