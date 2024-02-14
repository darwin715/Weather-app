const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const Wind_speed = document.getElementById('Wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.Weather-body');


async function checkWeather(city){
    const api_key ="b42155ab9903f4b9a17541b8d8d21e33";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response => response.json());

    if(weather_data.cod === `404`)
    {
        //console.log(weather_data.cod);
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
    }
    else{
        location_not_found.style.display = "none";
        weather_body.style.display = "flex";
    }

    temperature.innerHTML =`${Math.round(weather_data.main.temp-273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    Wind_speed.innerHTML = `${weather_data.wind.speed}km/H`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src ="/asserts/cloud.png";
            break;
            case 'Clear':
            weather_img.src ="/asserts/clear.png";
            break;
            case 'Mist':
            weather_img.src ="/asserts/mist.png";
            break;
            case 'Snow':
            weather_img.src ="/asserts/snow.png";
            break;
            case 'Rain':
            weather_img.src ="/asserts/rain.png";
            break;
        }
    
}
function search(){
    checkWeather(inputBox.value);
}
