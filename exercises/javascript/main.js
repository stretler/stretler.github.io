
let body = document.body;

function turnOnLight() {
  body.classList.toggle("light");
  button.classList.toggle("buttonOn");
  star.classList.toggle("staron");
}

let button = document.querySelector("svg");
button.addEventListener("click", turnOnLight);
star.addEventListener("click", turnOnLight);