document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const inputField = document.getElementById('newTaskDescription'); 
    tasklist(inputField.value); 
    e.target.reset(); 
  });
}); 

function tasklist(TaskDescription) {
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', deleteTask)
  li.textContent = `${TaskDescription}  `
  btn.textContent = 'x'
  li.appendChild(btn)
  console.log(li)
  document.querySelector('#tasks').appendChild(li)
 }

 function deleteTask(e){
  e.target.parentNode.remove()
 }
 
