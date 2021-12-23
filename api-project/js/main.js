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
  timeForm: document.getElementById("time-form"),
};
window.time = {
  hour: 1,
  minute: 59,
  second: 45,
};

//setting time
function setTime() {
  re = /^\d{1,2}:\d{2}([ap]m)?$/;

  if (form.starttime.value != "" && !form.starttime.value.match(re)) {
    alert("Invalid time format: " + form.starttime.value);
    form.starttime.focus();
    return false;
  } else {
    alert("All input fields have been validated!");
    return true;
    window.time.hour;
  }
}

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
const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

//displaying live-updated time
async function displayTime() {
  window.time.second++;

  console.log(window.time);

  if (window.time.second >= 60) {
    window.time.minute++;
    window.time.second = 0;
  }
  if (window.time.minute >= 60) {
    window.time.hour++;
    window.time.minute = 0;
    updateDaMusic();
    console.log("Updated music");
  }
  if (window.time.hour >= 24) {
    window.time.hour = 0;
    window.time.minute = 0;
    window.time.second = 0;
  }

  DOMSelectors.secondsLabel.innerHTML = pad(window.time.second);
  DOMSelectors.minutesLabel.innerHTML = pad(minutesPad(window.time.minute));
  DOMSelectors.hoursLabel.innerHTML = pad(hoursPad(window.time.hour));
  await sleep(1000);
  displayTime();
}
displayTime();

//insert music display
function insertDaMusic(hour) {
  if (DOMSelectors.bgmDiv.innerHTML == "") {
    DOMSelectors.bgmDiv.insertAdjacentHTML(
      "afterbegin",
      `<audio
      controls autoplay loop
      src="https://acnhapi.com/v1/hourly/${hour}">
          Your browser does not support the
          <code>audio</code> element.
    </audio>`
    );
  } else {
    console.log(DOMSelectors.bgmDiv.children[0].src);
    console.log("Changed to: " + hour);
    DOMSelectors.bgmDiv.children[0].src = `https://acnhapi.com/v1/hourly/${hour}`;
  }
}

//randomize music according to set time
//updateDaMusic();
//setInterval(updateDaMusic, 1000);
async function checkTime() {
  updateDaMusic();
  try {
    let date = new Date();
    let minutes = date.getMinutes();
    await sleep((60 - minutes) * 60000);
    updateDaMusic();
  } catch (error) {
    console.log(error);
  }
}
checkTime();

export { DOMSelectors, insertDaMusic };
