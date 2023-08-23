const apiKey = "bbb4069ff7a5498a16a35d2dd1a74ca9";
const city = "NEW_YORK";

const weatherInfo = document.getElementById("weatherInfo");
const weatherIcon = document.getElementById("weatherIcon");
const temperature = document.getElementById("temperature");
const cityElement = document.getElementById("city");
const humidity = document.getElementById("humidity");
const condition = document.getElementById("condition");
const windSpeed = document.getElementById("windSpeed");
const pressure = document.getElementById("pressure");

// Fetch weather data
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
)
  .then((response) => response.json())
  .then((data) => {
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    temperature.textContent = `Temperature: ${data.main.temp}°C`;
    cityElement.textContent = `City: ${data.name}`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    condition.textContent = `Condition: ${data.weather[0].description}`;
    windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
    pressure.textContent = `Pressure: ${data.main.pressure} hPa`;

    weatherInfo.style.display = "block"; // Show weather information
  })
  .catch((error) => {
    console.error("Error fetching weather data:", error);
  });
