window.addEventListener('load', () => {
  todos = JSON.parse(localStorage.getItem('todos')) || []
  const nameInput = document.querySelector('#name')
  const newTodoForm = document.querySelector('#new-todo-form')
  const username = localStorage.getItem('username') || ''

  nameInput.value = username

  nameInput.addEventListener('change', (e) => {
    localStorage.setItem('username', e.target.value)
  })

  newTodoForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const todo = {
      content: e.target.elements.content.value,
      category: e.target.elements.category.value,
      done: false,
      createdAt: new Date().getTime(),
    }

    todos.push(todo)

    localStorage.setItem('todos', JSON.stringify(todos))

    // Reset the form
    e.target.reset()

    DisplayTodos()
  })

  DisplayTodos()
})

//Validation of the registring credentials
function formVal() {
  var emailId = document.getElementById('login_email').value
  var pass = document.getElementById('password').value
}

var pw = document.getElementById('pw')
var name = document.getElementById('name')

function store() {
  localStorage.setItem(
    'login_email',
    document.getElementById('login_email').value
  )
  localStorage.setItem('pw', pw.value)
}

function valPas() {
  var signup_pass = document.getElementById('signup_pass').value
  var signup_confirm_pass = document.getElementById('signup_confirm_pass').value
  if (signup_pass != signup_confirm_pass) {
    document.getElementById('wrong_pass_alert').style.color = 'red';
    document.getElementById('wrong_pass_alert').innerHTML
      = '☒ Use same password';
    document.getElementById('create').disabled = true;
    document.getElementById('create').style.opacity = (0.4);
  } else {
    document.getElementById('wrong_pass_alert').style.color = 'green';
    document.getElementById('wrong_pass_alert').innerHTML =
        '🗹 Password Matched';
    document.getElementById('create').disabled = false;
    document.getElementById('create').style.opacity = (1);
  }

}
//checking for incorrect password
function incorectPas(){
  if (document.getElementById('signup_pass').value != "" && document.getElementById('signup_confirm_pass').value != "") 
  {
    alert("Your response is submitted");
  } else {
    alert("Please fill all the fields");
  }
}

//checking if the mail is valid
function valLogMail()
{
  const regex_pattern =      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var login_email = document.getElementById('login_email').value
  if(regex_pattern.test(login_email))
  {
    document.getElementById('incorrect_email_alert').style.color = 'green';
    document.getElementById('incorrect_email_alert').innerHTML =
        '';
    document.getElementById('create').disabled = false;
    document.getElementById('create').style.opacity = (1);
  }
  else {
    document.getElementById('incorrect_email_alert').style.color = 'red';
    document.getElementById('incorrect_email_alert').innerHTML
      = 'Incorrect email';
    document.getElementById('create').disabled = true;
    document.getElementById('create').style.opacity = (0.4);
  } 
  
}

function valSignMail()
{
  var email = document.getElementById("signup_email").value;
  var lblError = document.getElementById("lblError");
  lblError.innerHTML = "";
  var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  if (!expr.test(email)) {
    lblError.innerHTML = "Invalid email address.";
  }
}


function check() {
  var ourName = localStorage.getItem('name')
  var ourPw = localStorage.getItem('pw')

  var userPw = document.getElementById('userPw')
  var userName = document.getElementById('UserName')

  if (userName.value == ourName && userPw.value !== ourPw) {
    alert('You are loged in.')
  } else {
    alert('ERROR!')
  }
}

function DisplayTodos() {
  const todoList = document.querySelector('#todo-list')
  todoList.innerHTML = ''

  todos.forEach((todo) => {
    const todoItem = document.createElement('div')
    todoItem.classList.add('todo-item')

    const label = document.createElement('label')
    const input = document.createElement('input')
    const span = document.createElement('span')
    const content = document.createElement('div')
    const actions = document.createElement('div')
    const edit = document.createElement('button')
    const deleteButton = document.createElement('button')

    input.type = 'checkbox'
    input.checked = todo.done
    span.classList.add('bubble')
    if (todo.category == 'personal') {
      span.classList.add('personal')
    } else {
      span.classList.add('business')
    }
    content.classList.add('todo-content')
    actions.classList.add('actions')
    edit.classList.add('edit')
    deleteButton.classList.add('delete')

    content.innerHTML = `<input type="text" value="${todo.content}" readonly>`
    edit.innerHTML = 'Edit'
    deleteButton.innerHTML = 'Delete'

    label.appendChild(input)
    label.appendChild(span)
    actions.appendChild(edit)
    actions.appendChild(deleteButton)
    todoItem.appendChild(label)
    todoItem.appendChild(content)
    todoItem.appendChild(actions)
    todoList.appendChild(todoItem)

    if (todo.done) {
      todoItem.classList.add('done')
    }

    input.addEventListener('change', (e) => {
      todo.done = e.target.checked
      localStorage.setItem('todos', JSON.stringify(todos))

      if (todo.done) {
        todoItem.classList.add('done')
      } else {
        todoItem.classList.remove('done')
      }
      DisplayTodos()
    })


    edit.addEventListener('click', (e) => {
      const input = content.querySelector('input')
      input.removeAttribute('readonly')
      input.focus()
      input.addEventListener('blur', (e) => {
        input.setAttribute('readonly', true)
        todo.content = e.target.value
        localStorage.setItem('todos', JSON.stringify(todos))
        DisplayTodos()
      })
    })

    deleteButton.addEventListener('click', (e) => {
      todos = todos.filter((t) => t != todo)
      localStorage.setItem('todos', JSON.stringify(todos))
      DisplayTodos()
    })
  })
}
