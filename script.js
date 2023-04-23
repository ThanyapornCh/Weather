const wrapper = document.querySelector('.wrapper'),
  inputPart = document.querySelector('.input-part'),
  infoTxt = inputPart.querySelector('.info-txt'),
  inputField = inputPart.querySelector('input');
locationBtn = inputPart.querySelector('button');
weatherPart = wrapper.querySelector('.weather-part');
(wIcon = weatherPart.querySelector('img')),
  (arrowBack = wrapper.querySelector('header i'));

let api = '1b58a2ecd1e07e730b81cf256a5a9c47';

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

function onSuccess(position) {
  console.log(position);
  const { latitude, longitude } = position.coords;
  api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  fetchData();
}
function onError(error) {
  infoTxt.innerText = error.message;
  infoTxt.classList.add('error');
}

function requestApi(city) {
  api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  fetchData();
}

function fetchData() {
  infoTxt.innerText = 'Getting weather details...';
  infoTxt.classList.add('pending');
  fetch(api)
    .then(response => response.json())
    .then(result => weatherDetails(result));
}
function weatherDetails(info) {
  // infoTxt.classList.replace('pending', 'error');
  // if (info.cod == '404') {
  //   infoTxt.innerText = `${inputField.value} isn't a valid city name`;
  // } else {
  //   const city = info.name;
  //   const country = info.sys.country;
  //   const { description, id } = info.weather[0];
  //   const { feels_like, humidity, temp } = info.main;

  //   if (id == 800) {
  //     wIcon.src = 'Weather-Icons/clear.svg';
  //   } else if (id >= 200 && id <= 232) {
  //     wIcon.src = 'Weather-Icons/storm.svg';
  //   } else if (id >= 600 && id <= 622) {
  //     wIcon.src = 'Weather-Icons/snow.svg';
  //   } else if (id >= 701 && id <= 781) {
  //     wIcon.src = 'Weather-Icons/haze.svg';
  //   } else if (id >= 801 && id <= 804) {
  //     wIcon.src = 'Weather-Icons/cloud.svg';
  //   } else if ((id >= 300 && id <= 321) || (id >= 500 && id <= 521)) {
  //     wIcon.src = 'Weather-Icons/rain.svg';
  //   }

  //   weatherPart.querySelector('.temp .numb').innerText = Math.floor(temp);
  //   weatherPart.querySelector('.weather').innerText = description;
  //   weatherPart.querySelector('.lcation span').innerText = `${city},${country}`;
  //   weatherPart.querySelector('.temp .numb-2').innerText =
  //     Math.floor(feels_like);
  //   weatherPart.querySelector('.humidity span').innerText = `${humidity}%`;

  //   infoTxt.classList.remove('pending', 'error');
  //   infoTxt.innerText = '';
  //   infoTxtField.value = '';
  //   wrapper.classList.add('active');
  console.log(info);
  // }
}

// arrowBack.addEventListener('click', () => {
//   wrapper.classList.remove('active');
// });
