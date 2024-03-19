const toDoForm=document.getElementById("todo-form");
const toDoInput=toDoForm.querySelector("#todo-form input");
const toDoList=document.getElementById("todo-list");

const TODO_KEYS="toDos";
let toDos=[];

function saveToDo(){
    localStorage.setItem(TODO_KEYS,JSON.stringify(toDos));
}

function deleteToDo(event){
    const li=event.target.parentElement;
    toDos=toDos.filter(toDo=> toDo.id !== parseInt(li.id));
    console.log(toDos);
    saveToDo();
    li.remove();

}

function paintToDo(newToDoObj){
    const li=document.createElement("li");
    li.id=newToDoObj.id;
    const span=document.createElement("span");
    span.innerText=newToDoObj.text;
    li.appendChild(span);

    const button=document.createElement("button");
    button.innerText="❌";
    button.addEventListener("click",deleteToDo);
    li.appendChild(button);
    
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){  
    event.preventDefault();
    const newToDo=toDoInput.value;
    toDoInput.value="";
    const newToDoObj={
        text:newToDo,
        id:Date.now(),
    };
    console.log(newToDoObj);
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDo();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos=localStorage.getItem(TODO_KEYS);

if(savedToDos !== null){
    const parsedToDos=JSON.parse(savedToDos);
    toDos=parsedToDos;
    parsedToDos.forEach(paintToDo);

}

