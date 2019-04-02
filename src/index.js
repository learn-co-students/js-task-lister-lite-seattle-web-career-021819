

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // const submit = document.getElementById('submit');
  const form = document.getElementById('create-task-form');
  const form2 = document.getElementById('create-task2-form');
  const list = document.getElementById('list');
  const list2 = document.getElementById('list2');
  const text = document.getElementById('new-task-description');
  const text2 = document.getElementById('new-task2-description');
  form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    let li = document.createElement("li");
    li.textContent = text.value;
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    let editButton = document.createElement("button");
    editButton.innerText = "Edit";
    li.classList.add(priority.value);

    deleteButton.addEventListener("click", () => {
      li.remove();
    });
    editButton.addEventListener("click", ()=> {
      let editInput = document.createElement("input");
      let editSubmit = document.createElement("button");
      editSubmit.innerText = "Submit";
      li.appendChild(editSubmit);
      li.appendChild(editInput);
      editButton.remove();
      deleteButton.remove();
      editSubmit.addEventListener("click", () => {
        li.textContent = editInput.value
        li.appendChild(deleteButton);
        li.appendChild(editButton);
        list.appendChild(li);
      })
    })
    li.appendChild(deleteButton);
    li.appendChild(editButton);
    list.appendChild(li);
  });

  form2.addEventListener('submit', (ev) => {
    ev.preventDefault();

    let li = document.createElement("li");
    li.textContent = text2.value
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    let editButton = document.createElement("button");
    editButton.innerText = "Edit"
    li.classList.add(priority2.value);


    deleteButton.addEventListener("click", () => {
      li.remove();
    });
    editButton.addEventListener("click", ()=> {
      let editInput = document.createElement("input");
      let editSubmit = document.createElement("button");
      editSubmit.innerText = "Submit";
      li.appendChild(editSubmit);
      li.appendChild(editInput);
      editButton.remove();
      deleteButton.remove();
      editSubmit.addEventListener("click", () => {
        li.textContent = editInput.value
        li.appendChild(deleteButton);
        li.appendChild(editButton);
        list2.appendChild(li);
      })
    })
    li.appendChild(deleteButton);
    li.appendChild(editButton);
    list2.appendChild(li);
  });
});
