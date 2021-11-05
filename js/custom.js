//getElementById
var days = document.getElementById("days");
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");


function countdown(){
    
    var currentTime = new Date();
    var vaildTime = new Date("Nov 30 2021 00:00:00");
    var diff = vaildTime-currentTime;

    var s = Math.floor(diff/1000) % 60;
    var m = Math.floor(diff/1000/60) % 60;
    var h = Math.floor(diff/1000/60/60) % 60;
    var d = Math.floor(diff/1000/60/60/24);

    // DOM
    seconds.innerHTML = (s < 10) ? "0" + s : s;
    minutes.innerHTML = (m < 10) ? "0" + m : m;
    hours.innerHTML = (h < 10) ? "0" + h : h;
    days.innerHTML = (d < 10) ? "0" + d : d;
}

// BOM
setInterval(countdown,1000);