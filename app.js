const button = document.getElementById("button");

button.onclick = () => {
  location.href = "./game.html";
};
let value = localStorage.getItem("score")
let scoreBox = document.querySelector("#value")
scoreBox.textContent = value