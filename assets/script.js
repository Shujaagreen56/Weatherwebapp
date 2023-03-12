const apiKey = "994bd19f027ec06488423a1809ee0cab"; 
const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
const currentWeatherContainer = document.querySelector('#current-weather-container');
const forecastContainer = document.querySelector('#forecast-container');
const searchHistory = document.querySelector('#search-history');

// Get weather data for a city using the OpenWeather API
const getWeatherData = async function(city) {
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + apiKey;
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
};

// Handle form submit event
function handleClick() {
  const city = searchInput.value.trim();
  if (city) {
    getWeatherData(city)
      .then(function(weatherData) {
        return getForecastData(city)
          .then(function(forecastData) {
            renderCurrentWeather(weatherData);
            renderForecast(forecastData);
          });
      });
  }
}

// Add the onclick event to the search button
document.getElementById('searchBtn').onclick = handleClick;

// Get forecast data for a city using the OpenWeather API
const getForecastData = async function(city) {
  const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric&appid=" + apiKey;
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
};

// Render current weather data to the DOM
const renderCurrentWeather = function(data) {
  const date = new Date(data.dt * 1000).toLocaleDateString();
  const iconUrl = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

  currentWeatherContainer.innerHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p>${date}</p>
    <img src="${iconUrl}" alt="${data.weather[0].description}">
    <p>${data.weather[0].description}</p>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind Speed: ${data.wind.speed} m/s</p>
  `;
};

// Render forecast data to the DOM
const renderForecast = function(data) {
  let forecastHtml = '';
  for (let i = 0; i < data.list.length; i += 8) {
    const forecastData = data.list[i];
    const date = new Date(forecastData.dt * 1000).toLocaleDateString();
    const iconUrl = "https://openweathermap.org/img/w/" + forecastData.weather[0].icon + ".png";

    forecastHtml += `
      <div class="forecast-card">
        <h3>${date}</h3>
        <img src="${iconUrl}" alt="${forecastData.weather[0].description}">
        <p>${forecastData.weather[0].description}</p>
        <p>Temperature: ${forecastData.main.temp}°C</p>
        <p>Humidity: ${forecastData.main.humidity}%</p>
        <p>Wind Speed: ${forecastData.wind.speed} m/s</p>
      </div>
    `;
  }
  forecastContainer.innerHTML = forecastHtml;
};

// Render search history to the DOM
const renderSearchHistory = function(history) {
  let historyHtml = '';
  for (let i = 0; i < history.length; i++) {
  historyHtml += '<li>' + history[i] + '</li>';
  }
  const searchHistoryList = document.getElementById('search-history');
  searchHistoryList.innerHTML = historyHtml;
  }


// var apiKey = "";
// var city = ""; 
// // city needs to be the user input 
// var coordinates = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=" + apiKey; 
// console.log(coordinates)
// let city = current.city.list.json.gz; 
// let hiTemp;
// let lowTemp;
// let wind;
// let humidity;


// var xhr = new XMLHttpRequest();
// var url = 'https://api.openweathermap.org/data/2.5/weather?q=<CITY_NAME>&appid=<API_KEY>';
// xhr.open('GET', url);
// xhr.send();

// xhr.onload = function() {
//   if (xhr.status === 200) {
//     var response = JSON.parse(xhr.responseText);
//     console.log(response);
//     // Use the weather data and coordinates to update your website
//     var lat = response.coord.lat;
//     var lon = response.coord.lon;
//     console.log('Latitude: ' + lat + ', Longitude: ' + lon);
//   } else {
//     console.error('Request failed.  Returned status of ' + xhr.status);
//   }
// };



// var searchButton = document.querySelector("#searchButton");
// var searchInput = document.querySelector("#searchInput");

// searchButton.addEventListener("click", function() {
//   var searchTerm = searchInput.value;
//   // Do something with the search term
//   console.log(searchTerm); 
// });

//  // Define the search query, limit, and API key
// const query = city;
// const limit = 1; // Replace with your own API key

// // Build the URL with the query, limit, and API key
// const url = apiUrl.replace("city", query).replace("1", limit).replace("1", apiKey);


// // Fetch the data from the API
// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     // Do something with the data
//     console.log(data);
//   })
//   .catch(error => {
//     // Handle any errors
//     console.error(error);
//   });

//   fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     // Access the first location in the response
//     const location = data[0];

//     // Access the latitude and longitude coordinates of the location
//     const latitude = location.lat;
//     const longitude = location.lon;

//     // Do something with the latitude and longitude
//     console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
//   })
//   .catch(error => {
//     // Handle any errors
//     console.error(error);
//   });

// // Build the URL with the query, limit, and API key

// // Fetch the data from the API
// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     // Do something with the data
//     console.log(data);
//   })
//   .catch(error => {
//     // Handle any errors
//     console.error(error);
//   });

//   fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     // Access the first location in the response
//     const location = data[0];

//     // Access the latitude and longitude coordinates of the location
//     const latitude = location.lat;
//     const longitude = location.lon;

//     // Do something with the latitude and longitude
//     console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
//   })
//   .catch(error => {
//     // Handle any errors
//     console.error(error);
//   });

//   fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     // Access the first location in the response
//     const location = data[0];

//     // Access the latitude and longitude coordinates of the location
//     const latitude = location.lat;
//     const longitude = location.lon;

//     // Do something with the latitude and longitude
//     console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
//   })
//   .catch(error => {
//     // Handle any errors
//     console.error(error);
//   });




// //ajax Ajax, which initially stood for Asynchronous JavaScript And XML, is a programming practice of building complex, dynamic webpages using a technology known as XMLHttpRequest.
// // Ajax allows you to collect data to update parts of the DOM of an 
// // HTML page without the need for a full page refresh. 
// // Ajax also lets you work asynchronously,
// //  meaning your code continues to run while the targeted part of your web page is trying to reload 
// //  (compared to synchronously, which blocks your code from running until that part of your page is done reloading).
 

//   //citySearch(); 

  



// // function search() {
  
// //   ( "click" , button)
// //    value = userinput.("#search-hist").value;
// //   console.log(value);
// // }


// // var city = current.city.list.json.gz; 
// // var hiTemp
// // var lowTemp




// //ajax Ajax, which initially stood for Asynchronous JavaScript And XML, is a programming practice of building complex, dynamic webpages using a technology known as XMLHttpRequest.
// // Ajax allows you to collect data to update parts of the DOM of an 
// // HTML page without the need for a full page refresh. 
// // Ajax also lets you work asynchronously,
// //  meaning your code continues to run while the targeted part of your web page is trying to reload 
// //  (compared to synchronously, which blocks your code from running until that part of your page is done reloading).
 

//   //citySearch(); 

  



// // function search() {
  
// //   ( "click" , button)
// //    value = userinput.("#search-hist").value;
// //   console.log(value);
// // }


// // console.log(queryUrl); 

// //fetch to get the latitude and longitude from the coordinates url. when that fetch returns in the then (activity 3 ) thats when to do another fetch using the queryurl. 
// // inside the second promise thats when youll do your logic. at which point you want to parse et
//  "api.openweathermap.org/data/2.5/forecast?lat=" + {lat} + "&lon=" + {lon} + "&appid=" + apiKey ;

// console.log("hello world");


// function formatDate(dateObject){
// const parts = {
// date: dateObject.getDate(), 
// month: dateObject.getMonth() + 1,
// year: dateObject.getFullYear(), 
// }; 

// return '${parts.date}/${parts.month}/${parts.year}'; }

// const dayJsObject = dayjs(); 
// var currentDate = (dayJsObject.format("M/D/YYYY")); 


// document.getElementById("date").textContent = currentDate
// var currentData = new Date().toLocaleDateString();



// //ajax Ajax, which initially stood for Asynchronous JavaScript And XML, is a programming practice of building complex, dynamic webpages using a technology known as XMLHttpRequest.
// // Ajax allows you to collect data to update parts of the DOM of an 
// // HTML page without the need for a full page refresh. 
// // Ajax also lets you work asynchronously,
// //  meaning your code continues to run while the targeted part of your web page is trying to reload 
// //  (compared to synchronously, which blocks your code from running until that part of your page is done reloading).