function displayCurrentTemp(response){

  let temperatureElement =document.querySelector(`#temperature-value`);
  let currentTemperature = Math.round(response.data.temperature.current);
  temperatureElement.innerHTML = `${currentTemperature}`;
}

function changeCity (event){
  event.preventDefault();
  
  let cityInput = document.querySelector(`#search-city`);
  let formInput = document.querySelector(`.current-city`)
  let city = cityInput.value;
  formInput.innerHTML =`${city}`;

  let apiKey = `b94o8b93a9f0455cftd053151d5ee87d`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayCurrentTemp);
 }

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

  let searchForm = document.querySelector(`#search-form`);
  searchForm.addEventListener(`submit`, changeCity);

  let currentDateELement = document.querySelector(`#current-date`);
  let currentDate = new Date();
  currentDateELement.innerHTML = formatDate(currentDate);
