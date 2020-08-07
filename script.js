document.ready(function () {
    var location = document.getElementsByClassName("cityEntry");
    var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=3ae82f9a8459dc078c90588dfa2e5441";
    
    
    $.ajax({
        url:queryURL,
        method:"GET"
    }).then (function(response) {
        var liRow = $("<ul>").text;
    
        var city = $("<li>").text(response);
        
        liRow.append(city);
        console.log("location");
    
    })});