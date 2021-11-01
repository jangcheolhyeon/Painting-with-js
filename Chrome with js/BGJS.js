let body = document.querySelector("body");


function bgadopt(number){
    let image = new Image();
    image.src = `./images/${number}.jpg`;
    body.appendChild(image);
    image.classList.add("bgClass");
}

function makeRandom(){
    let number = Math.random() * 3;
    return Math.ceil(number);
}

function init(){
    let num = makeRandom();
    bgadopt(num);
}

init();