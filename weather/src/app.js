
let now = new Date();
let days = ["Sunday"
    , "Monday"
    , "Tuesday",
    "Wednesday",
    "Thrsday",
    "Friday"];
let day = days[now.getDay()];


let hour = now.getHours();
if (hour < 10) {
    hour = `0${hour}`;
}
let min = now.getMinutes();
if (min < 10) {
    min = `0${min}`;
}
let time = `${hour}:${min}`;
let dateTime = document.querySelector("#day-time");
dateTime.innerHTML = `${day} ${time}`;

function showCelsius(event) {
    event.preventDefault();
    let currenttemp = document.querySelector("#temprature");

}

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", showCelsius);

function showFahrenheit(event) {
    event.preventDefault();
    let currentTemp = document.querySelector("#temprature");
    currentTemp.innerHTML = "66";
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", showFahrenheit);


function searchCity(event) {
    event.preventDefault();

}
function searchLocation(event){
 event.preventDefault();
  
  navigator.geolocation.getCurrentPosition(showLocation);
}


function showLocation(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let apikey = "4aea223b9fca34f79c5dd1438c90516e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apikey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}


function showWeather(response) {
  let temp = Math.round(response.data.main.temp);
  let currentTemp = document.querySelector("#temperature");
  currentTemp.innerHTML = temp;
  let humidity = response.data.main.humidity;
  let currentHumidity = document.querySelector("#humidity");
  currentHumidity.innerHTML = humidity;
  let wind = Math.round(response.data.wind.speed);
  let currentWind = document.querySelector("#wind");
  currentWind.innerHTML = wind;
   let city = document.querySelector("#city-input").value;
  let cityOutput = document.querySelector("#city");
  cityOutput.innerHTML = `${city}`;

}

function showCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  let cityOutput = document.querySelector("#city");
  cityOutput.innerHTML = `${city}`;

  let apiKey = "4aea223b9fca34f79c5dd1438c90516e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", showCity);

let button = document.querySelector("#button-location");
button.addEventListener("click", searchLocation);

  