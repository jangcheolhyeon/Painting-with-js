const Todoform = document.querySelector(".Todoform_js");
const TodoText = Todoform.querySelector("input");
const TodoList = document.querySelector(".TodoList_js");

let TodoArray = [];

function deleteBtn(event){
    let delbtn = event.target.parentNode;
    TodoList.removeChild(delbtn);
    console.log(1 === Number(delbtn.id));
    TodoArray.forEach(function(element){
        if(element.id === Number(delbtn.id)){
            console.log(element.id, delbtn.id);
            TodoArray.splice(element.id, 1);
        }
    });
    saveTodo();
}

function loadTodoList(){
    let Todos = localStorage.getItem("Todos");
    if(Todos !== null){
        let TodosObj = JSON.parse(Todos);
        
        TodosObj.forEach(function(element){
            paintList(element.text);
        });
    }
}

function saveTodo(){
    localStorage.setItem("Todos", JSON.stringify(TodoArray));
}

function paintList(text){
    let li = document.createElement("li");
    let delbtn = document.createElement("button");
    let span = document.createElement("span");

    delbtn.innerText = "❌";
    delbtn.addEventListener("click", deleteBtn);
    span.innerText = text + " ";
    li.id = TodoArray.length;
    li.appendChild(span);
    li.appendChild(delbtn);
    TodoList.appendChild(li);
    let TodoObj = {
        id:TodoArray.length,
        text:text
    };
    console.log(TodoObj);
    TodoArray.push(TodoObj);
    console.log(TodoArray);
    saveTodo();
}

function handleSubmit(e){
    e.preventDefault();
    let inputValue = TodoText.value;
    if(inputValue === ""){
        alert("Typing To Do Text");
    }
    else{
        paintList(inputValue);
        TodoText.value = "";
    }
}

function typingTodo(){
    Todoform.addEventListener("submit", handleSubmit);
}


function init(){
    loadTodoList();
    typingTodo();
}

init();