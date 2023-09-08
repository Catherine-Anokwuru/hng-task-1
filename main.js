const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const day = document.querySelector(".day");
const time = document.querySelector(".time");
const item = document.querySelectorAll(".countdown h4");


// Weekday
let date = new Date();
const weekday = weekdays[date.getDay()];
day.innerHTML = `The current day of the week is <strong>${weekday}<strong>`;

function showTime(){
    var now = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    if(h == 0){
        h = 12;
    }

    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.querySelector(".time").innerText = time;
    document.querySelector(".time").textContent = time;

    setTimeout(showTime, 1000);

}

showTime();