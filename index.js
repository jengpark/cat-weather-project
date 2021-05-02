//week 4 feature #1
let now = new Date();

let days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];
let day = days[now.getDay()];

let hours = now.getHours();
let minutes = now.getMinutes();

let dayTime = document.querySelector(".dayTime");
dayTime.innerHTML = `${day} ${hours}:${minutes}`;



//week 4 feature #2
function searchButton(event){
  event.preventDefault();
  let cityInput = document.querySelector("#city-search");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${cityInput.value}`;
}

let form = document.querySelector("form");
form.addEventListener("submit", searchButton);



//week 4 bonus feature
function celsiusConversion(event){
  event.preventDefault();
  let currentTemp = document.querySelector("#current-temp");
  currentTemp.innerHTML = `15°C`;
}

function fahrenheitConversion(event){
  event.preventDefault();
  let currentTemp = document.querySelector("#current-temp");
  currentTemp.innerHTML = `59°F`;
}

let celsiusButton = document.querySelector("#celsius-conversion");
celsiusButton.addEventListener("click", celsiusConversion);

let fahrenheitButton = document.querySelector("#fahrenheit-conversion");
fahrenheitButton.addEventListener("click", fahrenheitConversion);

