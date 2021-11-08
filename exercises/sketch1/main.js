let bg = document.querySelector("body");
let text = document.getElementById('generate') 


function background () {
  let newcolor = Math.floor(Math.random()*16777215).toString(16);
  
  bg.style.backgroundColor = "#" + newcolor;
  color.innerHTML = "#" + newcolor;

}


function colortext() {
  let textcolor = Math.floor(Math.random() * 16777215).toString(16);
    text.style.color = "#" + textcolor;
text.style.fontSize = 200 * (Math.random())+"px";
}




generate.addEventListener("click", background);
background();

generate.addEventListener("click", colortext);
colortext();

generate.addEventListener("click", textsize);
textsize();
