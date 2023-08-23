let input = document.getElementById("input");
let city = document.getElementById("city");
let humidity = document.getElementById("humidity");
let tempreature = document.getElementById("tempreature");
let condition = document.getElementById("condition");
let pressure = document.getElementById("pressure");
let weather = document.getElementById("weather")
let weatherIcon = document.getElementById("weatherIcon");
let facebookIcon = document.getElementById("facebook-icon");
let twitterIcon = document.getElementById("twitter-icon");
let instagramIcon = document.getElementById("instagram-icon");


async function fetchhweatherData() {
  event.preventDefault();
  let apikey = "bbb4069ff7a5498a16a35d2dd1a74ca9";
  let location = input.value;

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${apikey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Error fetching weather data");
  }
}





function displayweatherForecast(weatherdata) {
  tempreature.textContent = `Temp-${weatherdata.main.temp}°c`;
  city.textContent = `${input.value}`
  humidity.textContent = `humidity-${weatherdata.main.humidity}%`
  weatherIcon.src = `http://openweathermap.org/img/wn/${weatherdata.weather[0].icon}.png`;
  condition.textContent = `condition-${weatherdata.weather[0].main}`;
  pressure.textContent = `w-speed-${weatherdata.main.pressure}-hpa`


 
  

}

function searchweather() {
  fetchhweatherData()
    .then((data) => displayweatherForecast(data))
    .catch((error) => console.log("Error:", error));
}





function redirectToFacebook() {
  let facebookLink = document.createElement("a");

  facebookLink.href = "https://www.facebook.com/profile.php?id=100081341208797";

  facebookLink.target = "_blank";

  facebookLink.innerHTML =
    '<i  class="bi bi-facebook" style="color: blue"></i>';

  facebookIcon.parentNode.replaceChild(facebookLink, facebookIcon);

  window.location.href =
    "https://www.facebook.com/profile.php?id=100081341208797";
}

function Twitter() {
  let twitterLink = document.createElement("a");

  twitterLink.href =
    "https://twitter.com/centsplendor3?t=UWqbHihMR0bHyiX80xNkDg&s=09";

  twitterLink.target = "_blank";

  twitterLink.innerHTML = '<i class="bi bi-twitter" style="color: blue"></i>';

  twitterIcon.parentNode.replaceChild(twitterLink, twitterIcon);

  window.location.href =
    "https://twitter.com/centsplendor3?t=UWqbHihMR0bHyiX80xNkDg&s=09";
}

function Instagram() {
  let instagramLink = document.createElement("a");
  instagramLink.href =
    "https://instagram.com/splendor_chris3?igshid=NTc4MTIwNjQ2YQ==";

  instagramLink.target = "_blank";

  instagramLink.innerHTML =
    '<i class="bi bi-instagram" style="color: purple"></i>';

  instagramIcon.parentNode.replaceChild(instagramLink, instagramIcon);

  window.location.href =
    "https://instagram.com/splendor_chris3?igshid=NTc4MTIwNjQ2YQ==";
}

