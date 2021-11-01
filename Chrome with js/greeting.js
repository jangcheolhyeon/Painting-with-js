const greetingform = document.querySelector(".form_js");
const greetinginput = greetingform.querySelector("input");
const greetingtext = document.querySelector(".greeting");

const LSName = "CurrentUser";

function LoadName(){
    let currentUser = localStorage.getItem(LSName);
    if(currentUser === null){ // CurrentUser.value의 값이 없을때
        askName();
    }

    else{ //CurrentUser.value값이 있을때
        paintingName(currentUser);
    }
}


function paintingName(text){
    greetinginput.classList.add("hiding");
    greetingtext.classList.remove("greeting");
    greetingtext.innerHTML = `Hello~ ${text}`;
}

function askName(){
    greetingform.addEventListener("submit", submithandler);

}

function submithandler(e){
    e.preventDefault();
    let inputvalue = greetinginput.value;
    saveName(inputvalue);
}

function saveName(text){
    localStorage.setItem(LSName, text);
    location.reload();  
}

function init(){
    LoadName();
}

init();