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
let totalSeconds = 86395;
//let totalSeconds = 17995;
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

//add 0 if one digit number
function pad(val) {
  let valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}
//refresh to 0 at 60 minutes
function minutesPad(val) {
  let valString = val + "";
  if (val >= 60) {
    return valString - 60 * Math.floor(totalSeconds / 3600);
  } else {
    return valString;
  }
}
//refresh to 0 at 24 hours
function hoursPad(val) {
  let valString = val + "";
  if (val >= 24) {
    return valString - 24;
  } else {
    return valString;
  }
}

//displaying time
function setTime() {
  ++totalSeconds;
  DOMSelectors.minutesLabel.innerHTML = pad(
    minutesPad(parseInt(totalSeconds / 60))
  );
  DOMSelectors.hoursLabel.innerHTML = pad(
    hoursPad(parseInt(totalSeconds / 3600))
  );
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
//updateDaMusic();
//setInterval(updateDaMusic, 1000);

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

async function idk() {
  try {
    let date = new Date();
    let minutes = date.getMinutes();
    await sleep((60 - minutes) * 60000);
    updateDaMusic();
  } catch (error) {
    console.log(error);
  }
}
idk();

export { DOMSelectors, insertDaMusic };
