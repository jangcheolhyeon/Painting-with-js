const clockContainer = document.querySelector(".clock_js");
const showClock = clockContainer.querySelector("h1");

function getTime(){
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    showClock.innerHTML = `${hours < 10 ? `0${hours}` : `${hours}`}:${minutes < 10 ? `0${minutes}` : `${minutes}`}:${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}
init();

init();