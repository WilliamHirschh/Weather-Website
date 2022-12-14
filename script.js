let Key = "c9676e6950f05e39b2aae36c413d9dff"
let SearchForm = document.getElementById("Search");
let SearchBar = document.getElementById("SearchBar");
SearchForm.addEventListener("submit", function(event) {
    event.preventDefault()
    console.log(SearchBar.value)
    convertToCords.GetCords(SearchBar.value)
});

var datetime = null,
        date = null;
        
var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do, h:mm:ss a'));
};

$(document).ready(function(){
    datetime = $('.todaysdate')
    update();
    setInterval(update, 1000);
});



var convertToCords = {
    Key: "c9676e6950f05e39b2aae36c413d9dff",
    

    GetCords: function (cityname) {
        fetch(
            "https://api.openweathermap.org/geo/1.0/direct?q=" + cityname + "&limit=1&appid=c9676e6950f05e39b2aae36c413d9dff"
        )
            .then((response) => response.json())
            .then((data) => GetWeather(data[0].lat, data[0].lon));
            
    },
    showresults: function(data){
       
    }
}



var WeatherData = {
    Key: "c9676e6950f05e39b2aae36c413d9dff",

   
  
};
function GetWeather(lat, lon) {
    fetch(
        "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=metric&appid=" + Key
     )
     .then((response) => response.json())
     .then((data) => displayresults(data));
}

function displayresults(data) {
    console.log(data)
        const name = data.city.name;
         const temp = data.list[0].main.temp;
        const wind = data.list[0].wind.speed;
         const humidity = data.list[0].main.humidity;
         console.log(name,temp,wind,humidity)
         document.querySelector(".displayedCity").innerText = "Displaying Weather in " + name;
         document.querySelector(".Tempature").innerText = "Tempature: " + temp + "°C";
         document.querySelector(".Wind").innerText = "wind: " + wind;
         document.querySelector(".Humidity").innerText = "Humidity: " + humidity;

   
         
     };
     
//      function searchresults () {
//         document.querySelector(".SearchBar").value
//      }
// document.querySelector(".SearchBtn").addEventListener("click", function () {
// searchresults();
// })

