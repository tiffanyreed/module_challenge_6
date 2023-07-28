// API //
var APIKey= '4b88f450c0476eef50eb75590945d97';
var city = document.querySelector('input'); 
var searchBtn = document.querySelector('#searchbtn')
searchBtn.addEventListener('click', getWeather)
function getWeather(){
    var btn=document.createElement('button')
    btn.textContent=city.value
    document.querySelector('.searchbar').appendChild(btn)
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city.value + "&appid=" + APIKey;
console.log(city.value)
fetch(queryURL)
.then(res=>res.json())
.then(data=>{
    console.log(data) 
    document.querySelector('.Tempurature').textContent='Tempurature: ' + data.main.temp
    document.querySelector('.Wind').textContent='Wind: ' + data.wind.speed
    document.querySelector('.Humidity').textContent='Humidity: ' + data.main.humidity

    fetch('http://api.openweathermap.org/data/2.5/forecast?lat='+data.coord.lat+'&lon='+data.coord.lon+'&appid=4b88f450c0476eef50eb75590945d97')
    .then(res=>res.json())
    .then(data=>{
        console.log(data) 
        document.querySelector('.Tempurature1').textContent='Tempurature: ' + data.list[0].main.temp
        document.querySelector('.Wind1').textContent='Wind: ' + data.list[0].wind.speed
        document.querySelector('.Humidity1').textContent='Humidity: ' + data.list[0].main.humidity
    
        document.querySelector('.Tempurature2').textContent='Tempurature: ' + data.list[8].main.temp
        document.querySelector('.Wind2').textContent='Wind: ' + data.list[8].wind.speed
        document.querySelector('.Humidity2').textContent='Humidity: ' + data.list[8].main.humidity

        document.querySelector('.Tempurature3').textContent='Tempurature: ' + data.list[16].main.temp
        document.querySelector('.Wind3').textContent='Wind: ' + data.list[16].wind.speed
        document.querySelector('.Humidity3').textContent='Humidity: ' + data.list[16].main.humidity

        document.querySelector('.Tempurature4').textContent='Tempurature: ' + data.list[24].main.temp
        document.querySelector('.Wind4').textContent='Wind: ' + data.list[24].wind.speed
        document.querySelector('.Humidity4').textContent='Humidity: ' + data.list[24].main.humidity

        document.querySelector('.Tempurature5').textContent='Tempurature: ' + data.list[32].main.temp
        document.querySelector('.Wind5').textContent='Wind: ' + data.list[32].wind.speed
        document.querySelector('.Humidity5').textContent='Humidity: ' + data.list[32].main.humidity
    })
})

}