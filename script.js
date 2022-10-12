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

var WeatherApiKey = 'c9676e6950f05e39b2aae36c413d9dff'