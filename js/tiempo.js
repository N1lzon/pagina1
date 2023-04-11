function check(){ 
    let url = "https://api.openweathermap.org/data/2.5/weather?lat=-27.2961258&lon=-55.8972359&units=metric&appid=cd27065178e75a759a20202fb2deebda&lang=es"
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            document.getElementById("w-temp").innerHTML=data.main.temp + "°C";
            document.getElementById("w-icon").src="https://openweathermap.org/img/wn/"+data.weather[0].icon+".png";
            document.getElementById("w-desc").innerHTML=data.weather[0].description;
        })
}

function clock(){
    var time = 1000;
    let url = "http://worldtimeapi.org/api/timezone/America/Asuncion"
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            var hora1 = JSON.stringify(data.datetime);
            var hora2 = hora1.substring(12,20);
            document.getElementById("w-clock").innerHTML="Hora: "+hora2;
        })
    
        setTimeout("clock()",time);

}