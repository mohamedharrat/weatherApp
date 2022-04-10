
let searchValue = document.querySelector('#searchBox');
searchValue.addEventListener('keypress', setFunc);
let iconUrl = "http://openweathermap.org/img/wn/";
let iconFormat = ".png";

function setFunc(e) {
    if (e.keyCode == 13) {
        getData(searchValue.value);
        searchValue.value = "";
    }
}


function getData(value) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+value+'&appid=c7d0116d59f52703a9b4afabfa3d4258')
        .then(function (reponse) {
            
            return  reponse.json();
        })
        .then(function (weather) {
            document.querySelector("#ville").innerHTML = weather.name;
            document.querySelector("#icon").src = iconUrl + weather.weather[0].icon + iconFormat ;
            document.querySelector("#temp").innerHTML = Math.floor(weather.main.temp - 273.15) + " °C";
            document.querySelector("#min_max_temp").innerHTML = "Min. " + Math.floor(weather.main.temp_min - 273.15) +  "°C" + " / Max. " + Math.floor(weather.main.temp_max - 273.15) + "°C";
            document.querySelector("#weather").innerHTML = weather.weather[0].main;
            document.querySelector("#weather_desc").innerHTML = weather.weather[0].description;
            document.querySelector("#wind_dir_speed").innerHTML = "Direction de l'air: "+weather.wind.deg+" / Wind speed: "+weather.wind.speed;
            
        let weatherType = weather.weather[0].main;
        
        switch (weatherType) {
            case "Clouds":
                document.body.style.backgroundImage = 'url(/photo/clouds.gif)';
                break;
            case "Rain":
                document.body.style.backgroundImage = 'url(/photo/rain.gif)';
                break;
            case "Clear":
                document.body.style.backgroundImage = 'url(/photo/clear.gif)';
                break;
            case "Snow":
                document.body.style.backgroundImage = 'url(/photo/snow.gif)';
                break;
            case "Mist":
                document.body.style.backgroundImage = 'url(/photo/fog.gif)';
                break;
        
            default:
                break;

                
        }
        })
        
        
    .catch(function (err) {
        console.log(err);
    })
}

