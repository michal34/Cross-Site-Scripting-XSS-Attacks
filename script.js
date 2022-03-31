const container = document.getElementById("container");
const url = "https://herokunodeapp12.herokuapp.com/";

async function funcName(url) {
  const response = await fetch(url);
  let data = await response.json();
  console.log(data);
  container.innerHTML = data;
}

funcName(url);
