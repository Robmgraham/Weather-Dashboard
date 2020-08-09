(function () {
    var location = document.getElementsByClassName("cityEntry").val;
    var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=3ae82f9a8459dc078c90588dfa2e5441";
    
    
    $.ajax({
        url:queryURL,
        method:"GET"
    }).then (function(response) {
         append(".cityDetails");
        console.log(response);
    
    });
});
