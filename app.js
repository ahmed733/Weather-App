//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

const weatherApi = {
  key:"f145530bb98cea572b4510a067bb2daf",
  baseUrl:"https://api.openweathermap.org/data/2.5/weather"
}
const searchInputBox = document.getElementById('input-box');
searchInputBox.addEventListener("keypress",(event) => {
  if(event.keyCode == 13){
    console.log(searchInputBox.value);
    getWeatherReport(searchInputBox.value);
    document.querySelector(".weather-body").style.display = "block" ;
  }
});
function getWeatherReport(city) {
fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
.then(weather => {
  return weather.json();
}).then(showWeatherReport);
}
function showWeatherReport(weather){
  console.log(weather);
  
  let city = document.getElementById("city");
  city.innerText =`${weather.name}, ${weather.sys.country}`;
    let temperature = document.getElementById("temp");
    temperature.innerText =`${Math.round(weather.main.temp)}°C`;
    let minMaxTemp = document.getElementById("min-max");
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min) / 
    ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;
    let description = document.getElementById("description");
    description.innerText = `${weather.weather[0].main}`;
    let date = document.getElementById("date");
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);
    
    if(description.textContent == "Clear"){
      document.body.style.backgroundImage =  "url('images/clear.jpg')";
     
      } else if(description.textContent == "Clouds"){
      document.body.style.backgroundImage =  "url('images/cloudy.jpg')";
      
    } else if(description.textContent == "Mist"){
      document.body.style.backgroundImage =  "url('images/mist.jpg')";
      
    } else if(description.textContent == "Haze"){
      document.body.style.backgroundImage =  "url('images/mist.jpg')";
      
    } else if(description.textContent == "Smoke"){
      document.body.style.backgroundImage =  "url('images/mist.jpg')";
      
    } else if(description.textContent == "Rain"){
      document.body.style.backgroundImage =  "url('images/rain.jpg')";
      
    } else if(description.textContent == "Snow"){
      document.body.style.backgroundImage =  "url('images/snow.jpg')";
      
    } else if(description.textContent == "Sunny"){
      document.body.style.backgroundImage =  "url('images/sunny.jpg')";
      
    } else if(description.textContent == "Thunderstorm"){
      document.body.style.backgroundImage =  "url('images/thunderstorm.jpg')";
      
    }
}
function dateManage(dateArgs){
  let days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let months =["January","Febuary","March","April","May","June","July","August","September","October","November","December"];
  let year = dateArgs.getFullYear();
  let month = months[dateArgs.getMonth()];
  let date = dateArgs.getDate();
  let day = days[dateArgs.getDay()];
  
  return `${date} ${month} (${day}), ${year}`;
}