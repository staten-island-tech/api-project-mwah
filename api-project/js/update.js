import { hours } from "./hourly";
import { insertDaMusic } from "./main";

//change music based on time
async function updateDaMusic() {
  if (window.time.hour === 0 || window.time.hour === 24) {
    insertDaMusic(hours.zero());
    document.getElementById("display-img-container").style["background-image"] =
      'url("/night-time.jpg")';
    console.log("zero");
  } else if (window.time.hour === 1) {
    insertDaMusic(hours.one());
    document.getElementById("display-img-container").style["background-image"] =
      'url("/night-time.jpg")';
    console.log("one");
  } else if (window.time.hour === 2) {
    insertDaMusic(hours.two());
    document.getElementById("display-img-container").style["background-image"] =
      'url("/night-time.jpg")';
    console.log("two");
  } else if (window.time.hour === 3) {
    insertDaMusic(hours.three());
    document.getElementById("display-img-container").style["background-image"] =
      'url("/night-time.jpg")';
    console.log("three");
  } else if (window.time.hour === 4) {
    insertDaMusic(hours.four());
    document.getElementById("display-img-container").style["background-image"] =
      'url("/night-time.jpg")';
    console.log("four");
  } else if (window.time.hour === 5) {
    insertDaMusic(hours.five());
    document.getElementById("display-img-container").style["background-image"] =
      'url("/night-time.jpg")';
    console.log("five");
  } else if (window.time.hour === 6) {
    insertDaMusic(hours.six());
    document.getElementById("display-img-container").style["background-image"] =
      'url("/sunrise-time.jpg")';
    console.log("six");
  } else if (window.time.hour === 7) {
    insertDaMusic(hours.seven());
    document.getElementById("display-img-container").style["background-image"] =
      'url("/sunrise-time.jpg")';
    console.log("seven");
  } else if (window.time.hour === 8) {
    insertDaMusic(hours.eight());
    document.getElementById("display-img-container").style["background-image"] =
      'url("/morning-time.jpg")';
    console.log("eight");
  } else if (window.time.hour === 9) {
    insertDaMusic(hours.nine());
    document.getElementById("display-img-container").style["background-image"] =
      'url("/morning-time.jpg")';
    console.log("nine");
  } else if (window.time.hour === 10) {
    insertDaMusic(hours.ten());
    document.getElementById("display-img-container").style["background-image"] =
      'url("/morning-time.jpg")';
    console.log("ten");
  } else if (window.time.hour === 11) {
    insertDaMusic(hours.eleven());
    document.getElementById("display-img-container").style["background-image"] =
      'url("/afternoon-time.jpg")';
    console.log("eleven");
  } else if (window.time.hour === 12) {
    insertDaMusic(hours.twelve());
    document.getElementById("display-img-container").style["background-image"] =
      'url("/afternoon-time.jpg")';
    console.log("twelve");
  } else if (window.time.hour === 13) {
    insertDaMusic(hours.thirteen());
    document.getElementById("display-img-container").style["background-image"] =
      'url("/afternoon-time.jpg")';
    console.log("thirteen");
  } else if (window.time.hour === 14) {
    insertDaMusic(hours.fourteen());
    document.getElementById("display-img-container").style["background-image"] =
      'url("/late-noon-time.png")';
    console.log("fourteen");
  } else if (window.time.hour === 15) {
    insertDaMusic(hours.fifteen());
    document.getElementById("display-img-container").style["background-image"] =
      'url("/late-noon-time.png")';
    console.log("fifteen");
  } else if (window.time.hour === 16) {
    insertDaMusic(hours.sixteen());
    document.getElementById("display-img-container").style["background-image"] =
      'url("/early-evening-time.jpg")';
    console.log("sixteen");
  } else if (window.time.hour === 17) {
    insertDaMusic(hours.seventeen());
    document.getElementById("display-img-container").style["background-image"] =
      'url("/early-evening-time.jpg")';
    console.log("seventeen");
  } else if (window.time.hour === 18) {
    insertDaMusic(hours.eighteen());
    document.getElementById("display-img-container").style["background-image"] =
      'url("/sunset-time.jpg")';
    console.log("eighteen");
  } else if (window.time.hour === 19) {
    insertDaMusic(hours.nineteen());
    document.getElementById("display-img-container").style["background-image"] =
      'url("/sunset-time.jpg")';
    console.log("nineteen");
  } else if (window.time.hour === 20) {
    insertDaMusic(hours.twenty());
    document.getElementById("display-img-container").style["background-image"] =
      'url("/evening-time.jpg")';
    console.log("twenty");
  } else if (window.time.hour === 21) {
    insertDaMusic(hours.twentyone());
    document.getElementById("display-img-container").style["background-image"] =
      'url("/evening-time.jpg")';
    console.log("twentyone");
  } else if (window.time.hour === 22) {
    insertDaMusic(hours.twentytwo());
    document.getElementById("display-img-container").style["background-image"] =
      'url("/evening-time.jpg")';
    console.log("twentytwo");
    document.getElementById("display-img-container").style["background-image"] =
      'url("/night-time.jpg")';
  } else if (window.time.hour === 23) {
    insertDaMusic(hours.twentythree());
    console.log("twentythree");
    document.getElementById("display-img-container").style["background-image"] =
      'url("/night-time.jpg")';
  } else {
    console.log("error");
  }
}

export { updateDaMusic };
