import "../styles/style.css";
import { updateDaMusic } from "./update";

//variables
const villagers = "http://acnhapi.com/v1/villagers/";
const bgm = "http://acnhapi.com/v1/backgroundmusic/";
const DOMSelectors = {
  minutesLabel: document.getElementById("minutes"),
  secondsLabel: document.getElementById("seconds"),
  hoursLabel: document.getElementById("hours"),
  bgmDiv: document.getElementById("bgm-div"),
};
let totalSeconds = 3590;
setInterval(setTime, 1000);

//grab and console log api data
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
getData(bgm);

//displaying time
function pad(val) {
  let valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}
function minutesPad(val) {
  let valString = val + "";
  if (val >= 60) {
    return valString - 60;
  } else {
    return valString;
  }
}
function minutesPadMore(val) {
  minutesPad(val);
  pad(val);
}
function setTime() {
  ++totalSeconds;
  DOMSelectors.secondsLabel.innerHTML = pad(totalSeconds % 60);
  DOMSelectors.minutesLabel.innerHTML = minutesPad(parseInt(totalSeconds / 60));
  DOMSelectors.hoursLabel.innerHTML = pad(parseInt(totalSeconds / 3600));
}
setTime();

//insert music display
function insertDaMusic(hour) {
  DOMSelectors.bgmDiv.innerHTML = "";
  DOMSelectors.bgmDiv.insertAdjacentHTML(
    "afterbegin",
    `<audio
  controls autoplay loop
  src="https://acnhapi.com/v1/hourly/${hour}">
      Your browser does not support the
      <code>audio</code> element.
</audio>`
  );
}

//randomize music according to set time
updateDaMusic();

export { DOMSelectors, insertDaMusic };
