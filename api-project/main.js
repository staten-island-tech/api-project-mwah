import "./style.css";

const URL = "https://bestbuyapis.github.io/api-documentation/#overview";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
getData(URL);
