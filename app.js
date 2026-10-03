const APIkey = "4c4b566166ea8f0a538fdfd51a0fabcc";
const APIurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBox = document.querySelector(".search input");
let searchbtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");
async function checkweather(city) {
  const response = await fetch(APIurl + city + `&appid=${APIkey}`);
  var data = await response.json();

  if (response.status === 404) {
    document.querySelector(".error").style.display = "initial";
    document.querySelector(".weather").style.display = "none";
  } else {
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main === "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main === "drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main === "mist") {
      weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main === "clear") {
      weatherIcon.src = "images/clear.png";
    }
    document.querySelector(".weather").style.display = "initial";
  }

  console.log(data);
}
searchbtn.addEventListener("click", () => {
  checkweather(searchBox.value);
});
