var time = document.getElementById('time');
var greeting = document.getElementById('greeting')
var bgimg = document.getElementById('bgimg')

var h;
var m;
var s;
var d;
// var test = 1;
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
dt = new Date(); //Wed Mar 23 2022 20:28:02 GMT+0530 (India Standard Time) "2022-03-23
var wday = weekday[dt.getDay()];
// console.log(day)
if(dt.getHours() >= 5 && dt.getHours() < 12){
    document.getElementById('greeting').innerHTML = 'Good Morning!';
    document.body.style.backgroundImage = "url('https://images.squarespace-cdn.com/content/v1/558a5523e4b04871ce5d2e4d/1549501945876-90AFT30N45RPUS7B0HGB/shutterstock_518591641.jpg?format=2500w')";
}
if(dt.getHours() >= 12 && dt.getHours() < 17){
    document.getElementById('greeting').innerHTML = 'Good Afternoon!';
    document.body.style.backgroundImage = "url('https://in-cyprus.philenews.com/wp-content/uploads/2020/03/weather-70.jpg')";
}
if(dt.getHours() >= 17 && dt.getHours() < 21){
    document.getElementById('greeting').innerHTML = 'Good Evening!';
    document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2015/11/16/21/46/grasses-1046475__340.jpg')";
}
if(dt.getHours() >= 21 && dt.getHours() < 24){
    document.getElementById('greeting').innerHTML = 'Good Night!';
    document.body.style.backgroundImage = "url('https://mymodernmet.com/wp/wp-content/uploads/2020/03/nori-yuasa-nighttime-photography-13.jpg')";
}
if(dt.getHours() >= 00 && dt.getHours() < 5){
    document.getElementById('greeting').innerHTML = 'Good Night!';
    document.body.style.backgroundImage = "url('https://mymodernmet.com/wp/wp-content/uploads/2020/03/nori-yuasa-nighttime-photography-13.jpg')";
}
var dt = JSON.stringify(dt)
var day = dt.slice(9,11);
var mon = dt.slice(6,8)
var year = dt.slice(1,5) 
var date = wday + ", " + day +"-" + mon +"-" + year;
document.getElementById('date').innerHTML = date;

function timer(){
setInterval(function(){

        function addZero(i) {
            if (i < 10) {
              i = "0" + i;
            }
            return i;
        }
    
        d = new Date();
        // console.log(d)
        // var x = document.getElementById("demo");
        h = addZero(d.getHours());
        m = addZero(d.getMinutes());
        s = addZero(d.getSeconds());
        document.getElementById('time').innerHTML = h + " : " + m + " : " + s;
    },0);
}

var searchbox = document.getElementById('ip')
var temp = document.getElementById('temp')
var weather_el = document.getElementById('weather')
// var location = document.getElementById('location');
console.log(searchbox.value)

var api ={
    key : "f2499ac067d1494e095541b52581c2d7",
    base: "https://api.openweathermap.org/data/2.5/"
}

// console.log(searchbox.value)
searchbox.addEventListener('keypress', setQuery);
getResult(searchbox.value)

function setQuery(e){
    if(e.keyCode == 13 || searchbox.value != null){
        getResult(searchbox.value)
    }
}

function getResult(query){
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults(weather){
   temp.innerHTML = `${Math.round(weather.main.temp)}<span> °C</span>`
//    searchbox.innerText = `${weather.name}, ${weather.sys.country}`
    weather_el.innerHTML = weather.weather[0].main;
}