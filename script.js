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
            .then((data => {
                console.log(data)
                
            }
            
    },
    showresults: function(data){
       
    }
}
console.log(Lat)







var WeatherData = {
    Key: "c9676e6950f05e39b2aae36c413d9dff",

    GetWeather: function (LatLon) {
        fetch(
            "https://api.openweathermap.org/data/2.5/forecast?lat=" + Lat + "&lon=" + Lon + "&appid=" + this.Key
         )
         .then((response) => response.json())
         .then((data) => console.log(data));
    },
    display: function(data){

    }
};


//"https://api.openweathermap.org/data/2.5/forecast?lat=60.4720&lon=8.4689&appid=c9676e6950f05e39b2aae36c413d9dff"