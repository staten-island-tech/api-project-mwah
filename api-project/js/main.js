import "../styles/style.css";
import { updateDaMusic } from "./update";

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

let minutesLabel = document.getElementById("minutes");
let secondsLabel = document.getElementById("seconds");
let hoursLabel = document.getElementById("hours");
let totalSeconds = 3590;
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

function insertDaMusic(hour) {
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

updateDaMusic();

export { hoursLabel, insertDaMusic };
