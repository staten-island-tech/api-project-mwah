import "../styles/style.css";
import { updateDaMusic } from "./update";

//variables
const bgm = "https://acnhapi.com/v1/backgroundmusic/";
const DOMSelectors = {
  displayDiv: document.getElementById("display-div"),
  timeDiv: document.getElementById("time-div"),
  form: document.getElementById("time-form"),
  input: document.getElementById("time-form-input"),
  purple: document.getElementById("purple"),
  blue: document.getElementById("blue"),
  change: document.getElementById("change"),
  formDiv: document.getElementById("form-div"),
};
let arr = {};
let stopTime = false;
window.time = {
  hour: "",
  minute: "",
  second: "",
};

//grab and console log api data
async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    arr = Object.keys(data).map((key) => data[key]);
    console.log(arr);
    return arr;
  } catch (error) {
    console.log(error);
  }
}
getData(bgm);

//when submit form - check valid format, set window time, set variable to false to update time, run check time, remove form
DOMSelectors.form.addEventListener("submit", (e) => {
  e.preventDefault();
  let re = /^(\d{1,2}):(\d{2})?$/;

  if (DOMSelectors.input.value != "" && !DOMSelectors.input.value.match(re)) {
    console.log("invalid input");
    alert("Invalid time format. Please use hh:mm");
    DOMSelectors.input.value = "";
  } else if (DOMSelectors.input.value.match(re)) {
    let regs = DOMSelectors.input.value.match(re);
    let newHour = regs[1];
    let newMinute = regs[2];

    console.log(`pretty valid input: ${DOMSelectors.input.value}`);

    window.time = {
      hour: parseInt(newHour),
      minute: parseInt(newMinute),
      second: 0,
    };
    console.log(window.time);

    stopTime = false;
    updateDisplay();
    checkTime();

    DOMSelectors.formDiv.innerHTML = "";
  }
});

//button: stop time running and insert form
DOMSelectors.change.addEventListener("click", function (e) {
  DOMSelectors.formDiv.innerHTML = `<form id="time-form">
  <label for="time-form-input" id="time-form-label">Set Time</label>
  <input type="text" name="time-input" id="time-form-input">
</form>
<p id="info">Please use 24-hour hh:mm time format! Thank you :)</p>`;

  DOMSelectors.form.addEventListener("submit", (e) => {
    e.preventDefault();
    let re = /^(\d{1,2}):(\d{2})?$/;

    if (DOMSelectors.input.value != "" && !DOMSelectors.input.value.match(re)) {
      console.log("invalid input");
      alert("Invalid time format. Please use hh:mm");
      DOMSelectors.input.value = "";
    } else if (DOMSelectors.input.value.match(re)) {
      let regs = DOMSelectors.input.value.match(re);
      let newHour = regs[1];
      let newMinute = regs[2];

      console.log(`pretty valid input: ${DOMSelectors.input.value}`);

      window.time = {
        hour: parseInt(newHour),
        minute: parseInt(newMinute),
        second: 0,
      };
      console.log(window.time);

      stopTime = false;
      updateDisplay();
      checkTime();

      DOMSelectors.formDiv.innerHTML = "";
    }
  });

  stopTime = true;
  return stopTime;
});

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
  console.log("hey");
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

  const labels = {
    minutesLabel: document.getElementById("minutes"),
    secondsLabel: document.getElementById("seconds"),
    hoursLabel: document.getElementById("hours"),
  };

  labels.secondsLabel.innerHTML = pad(window.time.second);
  labels.minutesLabel.innerHTML = pad(minutesPad(window.time.minute));
  labels.hoursLabel.innerHTML = pad(hoursPad(window.time.hour));
}

//pls loop and kill
function updateDisplay() {
  if (stopTime === false) {
    DOMSelectors.timeDiv.innerHTML =
      '<span class="time-labels" id="hours"></span>:<span class="time-labels" id="minutes"></span>:<span class="time-labels" id="seconds"></span>';
    displayTime();
  } else {
    return;
  }
  setTimeout(updateDisplay, 1000);
}

//insert music display HTML
function insertDaMusic(hour) {
  const currentFile = arr.filter((song) => song.id === hour);
  if (DOMSelectors.displayDiv.innerHTML == "") {
    DOMSelectors.displayDiv.insertAdjacentHTML(
      "afterbegin",
      `<div id = "display-img-text">
      <div id="display-img">
        <div id = "display-img-container">
        </div>
      <div id="display-text">
        <div id="display-text-container">
          <p id="text-main">Now playing: </p> 
          <p id="text-sub">${currentFile[0]["file-name"]}</p>
        </div>
      </div>
    </div>
      <div id="display-bgm"> <audio
        controls autoplay loop
        src="https://acnhapi.com/v1/hourly/${hour}" alt="Background Music Audio File">
        </audio></div>
     `
    );
  } else {
    console.log("Changed to: " + hour);
    DOMSelectors.displayDiv.innerHTML = "";
    DOMSelectors.displayDiv.insertAdjacentHTML(
      "afterbegin",
      `<div id = "display-img-text">
      <div id="display-img">
        <div id = "display-img-container"></div>
      </div>
      <div id="display-text">
        <div id="display-text-container">
          <p id="text-main">Now playing: </p> 
          <p id="text-sub">${currentFile[0]["file-name"]}</p>
        </div>
      </div>
    </div>
      <div id="display-bgm"> <audio
        controls autoplay loop
        src="https://acnhapi.com/v1/hourly/${hour}" alt="Background Music Audio File">
        </audio></div>
     `
    );
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

//button themes
DOMSelectors.purple.addEventListener("click", function () {
  document.body.style["background-image"] = "";
  document.body.style["background-image"] = 'url("/pattern2.png")';
});

DOMSelectors.blue.addEventListener("click", function () {
  document.body.style["background-image"] = "";
  document.body.style["background-image"] = 'url("/pattern.jpg")';
});

export { insertDaMusic };
