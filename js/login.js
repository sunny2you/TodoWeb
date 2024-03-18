const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");
const greeting=document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    const username=loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreeting(username);
}
function paintGreeting(savedUsername){
    greeting.innerText=`Hello ${savedUsername}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit",onLoginSubmit);
const savedUsername=localStorage.getItem(USERNAME_KEY);

if(savedUsername===null){
    greeting.classList.add("hidden");
}else{
    loginForm.classList.add("hidden");
    paintGreeting(savedUsername);
}



