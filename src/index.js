console.log('running');
//creates a list
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');

  const task = document.getElementById('new-task-description');
  const tasks = document.getElementById('tasks');

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const button = document.createElement('BUTTON');
    button.innerText = "Delete Item";
    button.id = "delete-button";

    const li = document.createElement('li');
    li.innerText = task.value;
    li.classList.add(priority.value)
      if (priority.value === "low"){
        li.id = "3";
      } else if (priority.value === "med") {
        li.id = "2";
      } else {
        li.id = "1";
      }
    tasks.appendChild(li);
    li.appendChild(button);

    button.addEventListener('click', (ev) => {
      ev.preventDefault();
      const item = button.parentNode;
      const parent = item.parentNode;
      parent.removeChild(item);
    });
  });
});

function sortTasks(){
  const list = document.querySelectorAll('#tasks li');
  list.sort((a,b) => a.id - b.id);
}



//deletes all items from list
document.addEventListener("DOMContentLoaded", () => {
  const dbutton = document.getElementById('delete-form');
  dbutton.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const array_list = document.querySelectorAll('#tasks li');
     for(var i=0; item=array_list[i]; i++){
       const parent = item.parentNode;
       parent.removeChild(item);
     };
  });
});

//edits items from list
