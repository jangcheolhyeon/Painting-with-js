const MyAPI_KEY = "3c7da600d7a5c83f64f26c58d63b1c3e";

function getWheater(lati, longi){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${MyAPI_KEY}&units=metric`
    ).then(function(response){
        console.log(response, response.json());
    });

}

function saveLS(coordsObj){
    localStorage.setItem("Coords", JSON.stringify(coordsObj));
}

function errorCoords(){
    console.log("Fail");
}

function successCoords(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let coordsObj = {
        latitude,
        longitude
    }
    saveLS(coordsObj);
    getWheater(latitude, longitude);
}
function makeCoords(){
    navigator.geolocation.getCurrentPosition(successCoords, errorCoords);
}

function checkCoords(){
    let COORDS = localStorage.getItem("Coords");
    if(COORDS === null){ //없을때
        makeCoords();
    }
    else{  //있을때
        let parseLocation = JSON.parse(COORDS);
        getWheater(parseLocation.latitude, parseLocation.longitude);
    }
}

function init(){
    checkCoords();
}

init();