window.addEventListener('load', () => {
  document.getElementById('name').value = localStorage.getItem('login_email')
})


const item = document.getElementById("text");
const addTask = document.getElementById("add-task");
const saveTask= document.getElementById("save-todo");
const listBox= document.getElementById("listBox");
const saveSpot = document.getElementById("saveSpot");

let todoArray = [];

addTask.addEventListener("click",(e)=> {
  e.preventDefault();
  let todo = localStorage.getItem("todo");
    if (todo === null) {
       alert("Can't leave the space blank.");
    }
     else {
        todoArray = JSON.parse(todo);
      }
  todoArray.push(item.value);
  item.value = "";
  localStorage.setItem("todo", JSON.stringify(todoArray));
  displayTodo();
  });

  //show the list
  function displayTodo() {
    let todo = localStorage.getItem("todo");
       if (todo === null) {
          todoArray = [];
       } else {
           todoArray = JSON.parse(todo);
       }


//hide item you dont want to see on the list
  var hideItem = document.getElementsByClassName("close");
  var i;
  for (i = 1; i < hide.length-1; i++) {
    hide[i].onclick = function() {
      var show = this.parentElement;
      show.style.display = "none";
    }
  }
    let htmlCode = "";
    todoArray.forEach((list, ind) => {
    htmlCode += `<div class='flex mb-4 items-center'>
    <p class='w-full text-grey-darkest'>${list}</p>
    <button onclick='edit(${ind})' class='flex-no-shrink p-2 ml-4 mr-2 border-2 rounded text-white text-grey bg-green-600'>Edit</button>
    <button onclick='deleteTodo(${ind})' class='flex-no-shrink p-2 ml-2 border-2 rounded text-white bg-red-500'>Delete</button>
    </div>`;
    });
    listBox.innerHTML = htmlCode;
} 
    
function emptyInput()
{
  var input = document.getElementById("content_todo").value;
  if (input.replaceAll(' ', '').length == 0) {
    alert("You forgot to put your task in!");
    return false;
  }
}
