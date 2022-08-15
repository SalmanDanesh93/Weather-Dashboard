// 'use strict' so only variables that are declared are recognized
"use strict";

$(document).ready(function () {

  // Sets variable to pull the current date
  let NowMoment = moment().format("l");
  
  // Creates the var for the moment function to pull the forecast
  let day1 = moment().add(1, "days").format("l");
  let day2 = moment().add(2, "days").format("l");
  let day3 = moment().add(3, "days").format("l");
  let day4 = moment().add(4, "days").format("l");
  let day5 = moment().add(5, "days").format("l");

 // Set the Global variables
  let city;
  let cities;
 // Function to load most recently searched city from local storage
  function loadMostRecent() {
    let lastSearch = localStorage.getItem("mostRecent");
    if (lastSearch) {
      city = lastSearch;
      search();
    } else {
      city = "Los Angeles";
      search();
    }
  }

  loadMostRecent()

// Function to load recently searched cities from local storage
  function loadRecentCities() {
    let recentCities = JSON.parse(localStorage.getItem("cities"));

    if (recentCities) {
      cities = recentCities;
    } else {
      cities = [];
    }
  }

  loadRecentCities()

  // Sets event handler for search button
  $("#submit").on("click", (e) => {
    e.preventDefault();
    getCity();
    search();
    $("#city-input").val("");
    listCities();
  });

  // Function to save searches to local storage
  function saveToLocalStorage() {
    localStorage.setItem("mostRecent", city);
    cities.push(city);
    localStorage.setItem("cities", JSON.stringify(cities));
  }

  // Function to retrieve user inputted city name
  function getCity() {
    city = $("#city-input").val();
    if (city && cities.includes(city) === false) {
      saveToLocalStorage();
      return city;
    } else if (!city) {
      alert("Please enter a valid city");
    }
  }


  // Creates function to search the API for the city user enters
  function search() {
    
    // Links to Open Weather API
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=3dc8dbbe53b9eb362d94e64ec760f801";
    let coords = [];

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      
      // Sets variables and calls Open Weather API to access weather data to be displayed
      coords.push(response.coord.lat);
      coords.push(response.coord.lon);
      let cityName = response.name;
      let cityCond = response.weather[0].description.toUpperCase();
      let cityTemp = response.main.temp;
      let cityHum = response.main.humidity;
      let cityWind = response.wind.speed;
      let icon = response.weather[0].icon;
      $("#icon").html(
        `<img src="http://openweathermap.org/img/wn/${icon}@2x.png">`
      );
      $("#city-name").html(cityName + " " + "(" + NowMoment + ")");
      $("#city-cond").text("Current Conditions: " + cityCond);
      $("#temp").text("Current Temp (F): " + cityTemp.toFixed(1));
      $("#wind-speed").text("Wind Speed: " + cityWind + "mph");
      $("#humidity").text("Humidity: " + cityHum + "%");
      $("#date1").text(day1);
      $("#date2").text(day2);
      $("#date3").text(day3);
      $("#date4").text(day4);
      $("#date5").text(day5);

      getUV(response.coord.lat, response.coord.lon);

      // Setting function incase failure to link to API / Location
    }).fail(function (){
      alert("Could not get data")
    });

    //Function to get 5-day forecast and UV index and place them on page
    function getUV(lat, lon) {
     
      $.ajax({
        url: "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly" + "&units=imperial&appid=3dc8dbbe53b9eb362d94e64ec760f801",
        method: "GET",
      }).then(function (response) {

        //code to determine UV index severity
        let uvIndex = response.current.uvi;
        $("#uv-index").text("UV Index:" + " " + uvIndex);
        if (uvIndex >= 8) {
          $("#uv-index").css("color", "red");
        } else if (uvIndex > 4 && uvIndex < 8) {
          $("#uv-index").css("color", "yellow");
        } else {
          $("#uv-index").css("color", "green");
        }

        // Setting variable for forecast temp 
        let day1temp = response.daily[1].temp.max;
        let day2temp = response.daily[2].temp.max;
        let day3temp = response.daily[3].temp.max;
        let day4temp = response.daily[4].temp.max;
        let day5temp = response.daily[5].temp.max;
        // Setting variable for forecast humidity 
        let day1hum = response.daily[1].humidity;
        let day2hum = response.daily[2].humidity;
        let day3hum = response.daily[3].humidity;
        let day4hum = response.daily[4].humidity;
        let day5hum = response.daily[5].humidity;
        // Setting variable for forecast weather icon 
        let icon1 = response.daily[1].weather[0].icon;
        let icon2 = response.daily[2].weather[0].icon;
        let icon3 = response.daily[3].weather[0].icon;
        let icon4 = response.daily[4].weather[0].icon;
        let icon5 = response.daily[5].weather[0].icon;
        
        // Setting variable for forecast city wind_speed;
        let day1wind = response.daily[1].wind_speed;
        let day2wind = response.daily[2].wind_speed;
        let day3wind = response.daily[3].wind_speed;
        let day4wind = response.daily[4].wind_speed;
        let day5wind = response.daily[5].wind_speed;

        // Creates call to place items in forecast tiles for day 1-5
        $("#temp1").text("Temp:" + " " + day1temp.toFixed(1) + " F°");
        $("#temp2").text("Temp:" + " " + day2temp.toFixed(1) + " F°");
        $("#temp3").text("Temp:" + " " + day3temp.toFixed(1) + " F°");
        $("#temp4").text("Temp:" + " " + day4temp.toFixed(1) + " F°");
        $("#temp5").text("Temp:" + " " + day5temp.toFixed(1) + " F°");

        $("#hum1").text("Humidity:" + " " + day1hum + "%");
        $("#hum2").text("Humidity:" + " " + day2hum + "%");
        $("#hum3").text("Humidity:" + " " + day3hum + "%");
        $("#hum4").text("Humidity:" + " " + day4hum + "%");
        $("#hum5").text("Humidity:" + " " + day5hum + "%");

        $("#wind1").text("Wind Speed: " + day1wind + " mph");
        $("#wind2").text("Wind Speed: " + day2wind + " mph");
        $("#wind3").text("Wind Speed: " + day3wind + " mph");
        $("#wind4").text("Wind Speed: " + day4wind + " mph");
        $("#wind5").text("Wind Speed: " + day5wind + " mph");

        // Sets icon for forecast days 1-5
        $("#icon1").html(
          `<img src="http://openweathermap.org/img/wn/${icon1}@2x.png">`
        );
        $("#icon2").html(
          `<img src="http://openweathermap.org/img/wn/${icon2}@2x.png">`
        );
        $("#icon3").html(
          `<img src="http://openweathermap.org/img/wn/${icon3}@2x.png">`
        );
        $("#icon4").html(
          `<img src="http://openweathermap.org/img/wn/${icon4}@2x.png">`
        );
        $("#icon5").html(
          `<img src="http://openweathermap.org/img/wn/${icon5}@2x.png">`
        );
      });
    }
  }
// Function to display recently searched cities
  function listCities() {
    $("#cityList").text("");
    cities.forEach((city) => {
      $("#cityList").prepend("<tr><td>" + city + "</td></tr>");
    });
  }

  listCities();
// Event handler for recently searched cities to add to table
  $(document).on("click", "td", (e) => {
    e.preventDefault();
    let listedCity = $(e.target).text();
    city = listedCity;
    search();
  });
// Event handler for clear button to remove searched cities
  $("#clr-btn").click(() => {
    localStorage.removeItem("cities");
    loadRecentCities();
    listCities();
  });
});
