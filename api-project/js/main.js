import "../styles/style.css";

const villagers = "http://acnhapi.com/v1/villagers/";
const songs = "http://acnhapi.com/v1/songs/";
const bgm = "http://acnhapi.com/v1/backgroundmusic/";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getData(villagers);
getData(songs);
getData(bgm);

var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var hoursLabel = document.getElementById("hours");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
  hoursLabel.innerHTML = pad(parseInt(totalSeconds / 3600));
}
setTime();
function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

function zero(min, max) {
  min = Math.ceil(1);
  max = Math.floor(3);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function one(min, max) {
  min = Math.ceil(4);
  max = Math.floor(6);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function two(min, max) {
  min = Math.ceil(7);
  max = Math.floor(9);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function three(min, max) {
  min = Math.ceil(10);
  max = Math.floor(12);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function four(min, max) {
  min = Math.ceil(13);
  max = Math.floor(15);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function five(min, max) {
  min = Math.ceil(16);
  max = Math.floor(18);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function six(min, max) {
  min = Math.ceil(19);
  max = Math.floor(21);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function seven(min, max) {
  min = Math.ceil(22);
  max = Math.floor(24);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function eight(min, max) {
  min = Math.ceil(25);
  max = Math.floor(27);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function nine(min, max) {
  min = Math.ceil(28);
  max = Math.floor(30);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function ten(min, max) {
  min = Math.ceil(31);
  max = Math.floor(33);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function eleven(min, max) {
  min = Math.ceil(34);
  max = Math.floor(36);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function twelve(min, max) {
  min = Math.ceil(37);
  max = Math.floor(39);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function thirteen(min, max) {
  min = Math.ceil(40);
  max = Math.floor(42);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function updateDaMusic(hour) {
  document.body.insertAdjacentHTML(
    "afterbegin",
    `<audio
  controls autoplay loop
  src="https://acnhapi.com/v1/hourly/${hour}">
      Your browser does not support the
      <code>audio</code> element.
</audio>`
  );
}
updateDaMusic(zero());
