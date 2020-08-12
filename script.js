function searchWeather() {
    var location = document.getElementById("cityEntry").value;
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=imperial" + "&appid=3ae82f9a8459dc078c90588dfa2e5441";
    
    
    
    $.ajax({
        url:queryURL,
        method:"GET"
    }).then (function(response) {
        
        document.getElementById("temperature").innerText= "Current Temperature is  " + response.main.temp + "humidity is  " + response.main.humidity + "Wind speed is  " + response.wind.speed;
        // document.getElementById("humidity").innerText= response.main.humidity;
        // document.getElementById("windSpeed").innerText= response.wind.speed
        // document.getElementById("UV").innerHTML= response.main.temp
        
        forecast();
    });

    

};

function forecast() {
    var location = document.getElementById("cityEntry").value;
    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + location + "&appid=3ae82f9a8459dc078c90588dfa2e5441"
    console.log(forecastURL)
   
    $.ajax({
        url:forecastURL,
        method:"GET"
    }).then (function(response) {
        console.log(response)
        
        document.getElementById("day1").innerText=  "MAX:  " + response.list[0].main.temp_max +
         "MIN:  " + response.list[0].main.temp_min;
        
         document.getElementById("day2").innerText=  "MAX:  " + response.list[0].main.temp_max +
         "MIN:  " + response.list[0].main.temp_min;

         document.getElementById("day3").innerText=  "MAX:  " + response.list[0].main.temp_max +
         "MIN:  " + response.list[0].main.temp_min;
         
         document.getElementById("day4").innerText=  "MAX:  " + response.list[0].main.temp_max +
         "MIN:  " + response.list[0].main.temp_min;

         document.getElementById("day5").innerText=  "MAX:  " + response.list[0].main.temp_max +
         "MIN:  " + response.list[0].main.temp_min;
    });
}

document.querySelector(".cityForm").addEventListener("submit", function(event) {
    event.preventDefault();
    searchWeather();
    
    
}, false);

// save the entry to local storage and place it in ul below
var enteredCity = localStorage.getItem("storeEntry")

$(".cityForm").on(".submit", function (recentSearch) {
    recentSearch.preventDefault();
    localStorage.setItem("storeEntry", $(".cityEntry").val());
  });
  $("#myList").val(enteredCity)