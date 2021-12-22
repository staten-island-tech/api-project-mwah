import { hours, sleep } from "./hourly";
import { DOMSelectors, insertDaMusic } from "./main";

//change music based on time
async function updateDaMusic() {
  if (DOMSelectors.hoursLabel.innerHTML === "00") {
    insertDaMusic(hours.zero());
    console.log("zero");
  } else if (DOMSelectors.hoursLabel.innerHTML === "01") {
    insertDaMusic(hours.one());
    console.log("one");
  } else if (DOMSelectors.hoursLabel.innerHTML === "02") {
    insertDaMusic(hours.two());
    console.log("two");
  } else if (DOMSelectors.hoursLabel.innerHTML === "03") {
    insertDaMusic(hours.three());
    console.log("three");
  } else if (DOMSelectors.hoursLabel.innerHTML === "04") {
    insertDaMusic(hours.four());
    console.log("four");
  } else if (DOMSelectors.hoursLabel.innerHTML === "05") {
    insertDaMusic(hours.five());
    console.log("five");
  } else if (DOMSelectors.hoursLabel.innerHTML === "06") {
    insertDaMusic(hours.six());
    console.log("six");
  } else if (DOMSelectors.hoursLabel.innerHTML === "07") {
    insertDaMusic(hours.seven());
    console.log("seven");
  } else if (DOMSelectors.hoursLabel.innerHTML === "08") {
    insertDaMusic(hours.eight());
    console.log("eight");
  } else if (DOMSelectors.hoursLabel.innerHTML === "09") {
    insertDaMusic(hours.nine());
    console.log("nine");
  } else if (DOMSelectors.hoursLabel.innerHTML === "10") {
    insertDaMusic(hours.ten());
    console.log("ten");
  } else if (DOMSelectors.hoursLabel.innerHTML === "11") {
    insertDaMusic(hours.eleven());
    console.log("eleven");
  } else if (DOMSelectors.hoursLabel.innerHTML === "12") {
    insertDaMusic(hours.twelve());
    console.log("twelve");
  } else if (DOMSelectors.hoursLabel.innerHTML === "13") {
    insertDaMusic(hours.thirteen());
    console.log("thirteen");
  } else if (DOMSelectors.hoursLabel.innerHTML === "14") {
    insertDaMusic(hours.fourteen());
    console.log("fourteen");
  } else if (DOMSelectors.hoursLabel.innerHTML === "15") {
    insertDaMusic(hours.fifteen());
    console.log("fifteen");
  } else if (DOMSelectors.hoursLabel.innerHTML === "16") {
    insertDaMusic(hours.sixteen());
    console.log("sixteen");
  } else if (DOMSelectors.hoursLabel.innerHTML === "17") {
    insertDaMusic(hours.seventeen());
    console.log("seventeen");
  } else if (DOMSelectors.hoursLabel.innerHTML === "18") {
    insertDaMusic(hours.eighteen());
    console.log("eighteen");
  } else if (DOMSelectors.hoursLabel.innerHTML === "19") {
    insertDaMusic(hours.nineteen());
    console.log("nineteen");
  } else if (DOMSelectors.hoursLabel.innerHTML === "20") {
    insertDaMusic(hours.twenty());
    console.log("twenty");
  } else if (DOMSelectors.hoursLabel.innerHTML === "21") {
    insertDaMusic(hours.twentyone());
    console.log("twentyone");
  } else if (DOMSelectors.hoursLabel.innerHTML === "22") {
    insertDaMusic(hours.twentytwo());
    console.log("twentytwo");
  } else if (DOMSelectors.hoursLabel.innerHTML === "23") {
    insertDaMusic(hours.twentythree());
    console.log("twentythree");
  } else {
    console.log("error");
  }
  let date = new Date();
  let minutes = date.getMinutes();
  console.log(minutes);
  await sleep((60 - minutes) * 60000);

  updateDaMusic();
}

export { updateDaMusic };
