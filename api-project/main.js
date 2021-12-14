import "./style.css";

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
