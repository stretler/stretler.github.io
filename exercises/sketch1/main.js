let bg = document.querySelector("body");

function background () {
  let newcolor = Math.floor(Math.random()*16777215).toString(16);
  
  bg.style.backgroundColor = "#" + newcolor;
  color.innerHTML = "#" + newcolor;
}

generate.addEventListener("click", background);
background();



