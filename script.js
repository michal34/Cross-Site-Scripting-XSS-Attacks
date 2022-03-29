const container = document.getElementById("container");
const url = "https://dog.ceo/api/breeds/image/random";

async function funcName(url) {
  const response = await fetch(url);
  var data = await response.json();
  console.log(data.message);
  container.innerHTML = `<img src="${data.message}">`;
}

funcName(url);
