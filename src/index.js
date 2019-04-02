

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
});

const form = document.getElementById('create-task-form')
const list=document.getElementById('tasks')

form.addEventListener('submit', (ev) => {
  ev.preventDefault()
  let input=document.getElementById('new-task-description')
  let btn = document.createElement("BUTTON");

  const li = document.createElement('li')
  li.textContent = input.value
  li.appendChild(btn)
  btn.innerText="X";
  btn.addEventListener('click', ()=> {
    btn.parentNode.remove()
  })
  list.appendChild(li)

  let edit = document.createElement("button");
  const li2 = document.createElement('li')
  li2.textContent = input.value
  li2.appendChild(edit)
  edit.innerText="X";
  edit.addEventListener('click', ()=> {
    edit.parentNode.remove()
  })
  li.appendChild(li2)
  

});

const btn2=document.createElement("button")
btn2.textContent='X';
const title=document.getElementById('list').children[0]

title.appendChild(btn2)

btn2.addEventListener('click', ()=> {
  let length=list.children.length
  for (let i = 0; i < length-1; i++) {
    
  }
  // while (list.firstChild) {
  //   list.removeChild(list.firstChild);
  // }
})









