import { hoursLabel } from "./main";

function updateDaMusic() {
  if (hoursLabel.innerHTML === "00") {
    insertDaMusic(hours.zero());
    console.log("zero");
  } else if (hoursLabel.innerHTML === "01") {
    insertDaMusic(hours.one());
    console.log("one");
  } else if (hoursLabel.innerHTML === "02") {
    insertDaMusic(hours.two());
    console.log("two");
  } else if (hoursLabel.innerHTML === "03") {
    insertDaMusic(hours.three());
    console.log("three");
  } else if (hoursLabel.innerHTML === "04") {
    insertDaMusic(hours.four());
    console.log("four");
  } else if (hoursLabel.innerHTML === "05") {
    insertDaMusic(hours.five());
    console.log("five");
  } else if (hoursLabel.innerHTML === "06") {
    insertDaMusic(hours.six());
    console.log("six");
  } else if (hoursLabel.innerHTML === "07") {
    insertDaMusic(hours.seven());
    console.log("seven");
  } else if (hoursLabel.innerHTML === "08") {
    insertDaMusic(hours.eight());
    console.log("eight");
  } else if (hoursLabel.innerHTML === "09") {
    insertDaMusic(hours.nine());
    console.log("nine");
  } else if (hoursLabel.innerHTML === "10") {
    insertDaMusic(hours.ten());
    console.log("ten");
  } else if (hoursLabel.innerHTML === "11") {
    insertDaMusic(hours.eleven());
    console.log("eleven");
  } else if (hoursLabel.innerHTML === "12") {
    insertDaMusic(hours.twelve());
    console.log("twelve");
  } else if (hoursLabel.innerHTML === "13") {
    insertDaMusic(hours.thirteen());
    console.log("thirteen");
  } else if (hoursLabel.innerHTML === "14") {
    insertDaMusic(hours.fourteen());
    console.log("fourteen");
  } else if (hoursLabel.innerHTML === "15") {
    insertDaMusic(hours.fifteen());
    console.log("fifteen");
  } else if (hoursLabel.innerHTML === "16") {
    insertDaMusic(hours.sixteen());
    console.log("sixteen");
  } else if (hoursLabel.innerHTML === "17") {
    insertDaMusic(hours.seventeen());
    console.log("seventeen");
  } else if (hoursLabel.innerHTML === "18") {
    insertDaMusic(hours.eighteen());
    console.log("eighteen");
  } else if (hoursLabel.innerHTML === "19") {
    insertDaMusic(hours.nineteen());
    console.log("nineteen");
  } else if (hoursLabel.innerHTML === "20") {
    insertDaMusic(hours.twenty());
    console.log("twenty");
  } else if (hoursLabel.innerHTML === "21") {
    insertDaMusic(hours.twentyone());
    console.log("twentyone");
  } else if (hoursLabel.innerHTML === "22") {
    insertDaMusic(hours.twentytwo());
    console.log("twentytwo");
  } else if (hoursLabel.innerHTML === "23") {
    insertDaMusic(hours.twentythree());
    console.log("twentythree");
  } else {
    console.log("error");
  }
}