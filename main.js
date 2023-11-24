



const key = "333181b2a5540eb7ebe3efc2fc6b5e75"
const urlApi= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".img-icon-weather")


async function checkWeather(city){
    const response = await fetch(urlApi + city + `&appid=${key}`);

    var data = await response.json();
     console.log(data);

    if(response.status == 404){
         document.querySelector(".error").style.display = " block";
         document.querySelector(".weather").style.display = "none";
    }else if(response.status == 400){
        document.querySelector(".empty").style.display = " block";
         document.querySelector(".weather").style.display = "none";
    }else{
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°";
        document.querySelector(".hum").innerHTML = data.main.humidity + "%";
        document.querySelector(".real").innerHTML = Math.round(data.main.feels_like) + "°";
        document.querySelector(".wind-speed").innerHTML = data.wind.speed + "km/h";
        document.querySelector(".press").innerHTML = data.main.pressure;
        document.querySelector(".info").innerHTML = data.weather[0].description;


         if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "./images/clouds.png";
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "./images/rain.png";
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "./images/clear.png";
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "./images/drizzle.png";
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "./images/mist.png";
        }else if(data.weather[0] == "Snow"){
            weatherIcon.src = "./images/snow.png";
        }
          document.querySelector(".weather").style.display = "block";
          document.querySelector(".error").style.display = "none";
            document.querySelector(".empty").style.display = "none";
         document.querySelector(".weather").style.display = "block";
         
    }

}


searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
    
    })

checkWeather();