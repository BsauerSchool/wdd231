const currentTemp = document.querySelector('#current-temp');
const weathericon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const local = document.querySelector('#location');
const desc = document.querySelector('#description');
const myGraphic = document.querySelector('#graphic');

// Create required variables for the URL
const myKey = "9358342dde8e2a3eed38cdf4be102000";
const myLat = "41.06";
const myLong = "-111.97";

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`


async function apiFetch() {
  try {
    const response = await fetch(weatherUrl);
    if(response.ok) {
        const data = await response.json();
        
        displayResults(data);

    } else {
        throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}


//41.06, -111.97

// function to display data onto web page
function displayResults(data) {
    local.innerHTML = `${data.name}`;
    desc.innerHTML = `${data.weather[0].description}`;
    currentTemp.innerHTML = `${data.main.temp}&degF`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    myGraphic.setAttribute('SRC', iconsrc);
    myGraphic.setAttribute('alt', data.weather[0].description)
}

apiFetch();