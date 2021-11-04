
// let buttons = document.querySelectorAll(".format a");


// console.log(buttons)

  let buttons = document.querySelectorAll(".format a");
  let container = document.querySelector(".newbg");

buttons.forEach(function(button) {
  button.addEventListener('click', function (event) {
    // Remove existing newcolor class from each button
    buttons.forEach(function(thisButton) {
      thisButton.classList.remove("newcolor");
    });
    // Add newcolor class to this particular button, which was just clicked
    button.classList.toggle("newcolor");
  });
});