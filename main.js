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

//Time
function currentTime() {
  let date = new Date();
  let h = date.getUTCHours();
  let m = date.getUTCMinutes();
  let s = date.getUTCSeconds();
  let ms = date.getUTCMilliseconds();
  let timePeriod = "AM";

  if (h === 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
    timePeriod = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  ms = ms < 100 ? "0" + ms : ms;
  ms = ms < 10 ? "00" + ms : ms;

  let time = h + ":" + m + ":" + s + ':' + ms + " " + timePeriod;

  document.querySelector(".time").innerText = time;
  let t = setTimeout(function () {
    currentTime();
  }, 10);
}

currentTime();