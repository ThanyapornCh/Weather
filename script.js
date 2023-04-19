const wrapper = document.querySelector('.wrapper'),
  inputPart = wrapper.querySelector('.input-part'),
  infoTxt = inputPart.querySelector('.info-txt'),
  inputField = inputPart.querySelector('input');
locationBtn = inputPart.querySelector('button');
WeatherPart = wrapper.querySelector('.weather-part');
(wIcon = weatherPart.querySelector('img')),
  (arrowBack = wrapper.querySelector('header i'));

let api;

inputField.addEventListener('keyup', e => {
  if (e.key == 'Enter' && inputField.value != '') {
    requestApi(inputField.value);
  }
});
locationBtn.addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  } else {
    alert('Your browser not support geolocation api');
  }
});
function requestApi(city) {}
function onSuccess(position) {
  console.log(position);
}
function onError(error) {
  console.log(error);
}

function requestApi(city) {
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  infoTxt.innerText = 'Getting weather details...';
  infoTxt.classList.add('pending');
  fetch(api)
    .then(response => response.json())
    .then(result => weatherDetails(result));
}
function weatherDetails(info) {
  console.log(info);
}
