

let body = document.body;

let button = document.querySelectorAll(".format");

console.log(button)


button.forEach(function(button) {
  button.addEventListener('click', function (event) {
     button.classList.toggle("newcolor");
  });
});

