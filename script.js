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
            .then((data) => WeatherData.GetWeather(data[0].lat, data[0].lon));
            
    },
    showresults: function(data){
       
    }
}








var WeatherData = {
    Key: "c9676e6950f05e39b2aae36c413d9dff",

    GetWeather: function (Lat, Lon) {
        fetch(
            "https://api.openweathermap.org/data/2.5/forecast?lat=" + Lat + "&lon=" + Lon + "&appid=" + this.Key
         )
         .then((response) => response.json())
         .then((data) => this.displayresults(data));
    },
    displayresults: function(data) {
       const { name } = data.city.name;
        const { temp } = data.list[0].main.temp;
       const { wind } = data.list[0].wind.speed;
        const { humidity } = data.list[0].main.humidity;
        console.log(name)
    }
};


//"https://api.openweathermap.org/data/2.5/forecast?lat=60.4720&lon=8.4689&appid=c9676e6950f05e39b2aae36c413d9dff"