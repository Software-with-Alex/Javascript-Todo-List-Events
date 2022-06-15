const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', handleTodo)

function addTodo (event){
    event.preventDefault();
    console.log('clicked')
    const liDiv = document.createElement('div');
    liDiv.classList.add('li-div');
    const liLi = document.createElement('li');
    liLi.innerText = todoInput.value;
    liLi.classList.add('li-li');

    // const buttonChecked = document.createElement('button');
    // buttonChecked.classList.add('button-checked');
    // buttonChecked.innerHTML =  '<i class="fas fa-check"></i>';

    const buttonTrashed = document.createElement('button');
    buttonTrashed.innerHTML =  '<i class="fas fa-trash"></i>';
    buttonTrashed.classList.add('button-trashed');
    liDiv.appendChild(liLi);
    
    liDiv.appendChild(buttonTrashed);
   todoList.appendChild(liDiv);
   
   todoInput.value = ' ';
   
}
function handleTodo(e){
   
    const targets = e.target;
    
    if(targets.classList[0] === 'button-trashed'){
        const todo = targets.parentElement;
        todo.remove()
       
    }
    
   
}




























// todoButton.addEventListener('click', addTodo);
// todoList.addEventListener('click', deleteCheck);



// function addTodo(event){
//      event.preventDefault();
//      console.log('this was clicked');

//      //create elements 

//         const divTodo = document.createElement('div');
//         divTodo.classList.add('todo-div');

//         const divUlLi = document.createElement('li');
//         divUlLi.classList.add('todo-added-li');
//         divUlLi.innerText = todoInput.value;

//         const liButtonCheck = document.createElement('button');
//         liButtonCheck.classList.add('li-button-check');
//         liButtonCheck.innerHTML = '<i class="fas fa-check"></i>';

//         const liButtonTrash = document.createElement('button');
//         liButtonTrash.classList.add('li-button-trash');
//         liButtonTrash.innerHTML = '<i class="fas fa-trash"></i>';

//         // append them to a node 
//         divTodo.appendChild(divUlLi);
//         divTodo.appendChild(liButtonCheck);
//         divTodo.appendChild(liButtonTrash);
//         todoList.appendChild(divTodo);
//         todoInput.value = '';

//     }

//     function deleteCheck(e){
//         console.log(e.target);
//     }
