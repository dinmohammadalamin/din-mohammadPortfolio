const apiKey = "0932a7a3c0b2453fbb4134818242310"; // Replace with your WeatherAPI key
const city = "Rajshahi";
const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5&aqi=no&alerts=no`;

async function getWeather() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayWeather(data);
    displayForecast(data.forecast.forecastday); // Load forecast data but keep it hidden initially
  } catch (error) {
    document.getElementById("weather").innerText =
      "Error fetching weather data";
  }
}

function displayWeather(data) {
  const weatherDiv = document.getElementById("weather");
  const temp = data.current.temp_c;
  const description = data.current.condition.text;
  const iconUrl = "https:" + data.current.condition.icon;
  const cityName = data.location.name;

  weatherDiv.innerHTML = `
        <h2>Weather in ${cityName}</h2>
        <div class="weather-info">
            <img src="${iconUrl}" alt="Weather Icon">
            <p>${temp} °C</p>
        </div>
        <p style="font-size: 32px;">${description}</p>
    `;
}

function displayForecast(forecastDays) {
  const forecastDiv = document.getElementById("forecast");
  forecastDiv.innerHTML = "<h3>5-Day Forecast</h3>";
  forecastDays.forEach((day) => {
    const dayOfWeek = getDayOfWeek(day.date);
    const temp = day.day.avgtemp_c;
    const description = day.day.condition.text;
    const iconUrl = "https:" + day.day.condition.icon;

    forecastDiv.innerHTML += `
            <div class="forecast-day">
                <strong>${dayOfWeek}</strong>
                <img src="${iconUrl}" alt="Weather Icon">
                <span>${temp} °C, ${description}</span>
            </div>
        `;
  });
}

// Function to get the day of the week from a date string
function getDayOfWeek(dateString) {
  const date = new Date(dateString);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return daysOfWeek[date.getDay()];
}

// Function to toggle the forecast visibility
function toggleForecast() {
  const forecastDiv = document.getElementById("forecast");
  const button = document.querySelector(".toggle-forecast-btn");
  if (
    forecastDiv.style.display === "none" ||
    forecastDiv.style.display === ""
  ) {
    forecastDiv.style.display = "block";
    button.innerText = "Hide 5-Day Forecast";
  } else {
    forecastDiv.style.display = "none";
    button.innerText = "Show 5-Day Forecast";
  }
}

// Fetch weather data when the page loads
window.onload = getWeather;
