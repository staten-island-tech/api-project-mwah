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
  form: document.getElementById("time-form"),
  newHour: document.getElementById("hours-input"),
  newMinute: document.getElementById("minutes-input"),
  button: document.getElementById("form-btn"),
};

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

DOMSelectors.button.addEventListener("click", function (e) {
  e.preventDefault();
});
window.time = {
  hour: DOMSelectors.newHour.value,
  minute: DOMSelectors.newMinute.value,
  second: 0,
};
/* DOMSelectors.form.addEventListener("submit", function (e) {
  e.preventDefault();
  let re = /^\d{1,2}:\d{2}([ap]m)?$/;

  if (DOMSelectors.input.value != "" && !DOMSelectors.input.value.match(re)) {
    console.log("invalid input");
    DOMSelectors.input.focus();
    return false;
  } else if (DOMSelectors.input.value.match(re)) {
    console.log("pretty valid input");
    console.log(DOMSelectors.input.value);
    newTime = DOMSelectors.input.value;
    console.log(hour);
    DOMSelectors.input.focus();
    return true;
  }
}); */

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

//check for changes in hour and change music accordingly
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
