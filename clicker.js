let button = document.querySelector("#counter-button");
let countDisplay = document.querySelector("#count");
let count = 0;

button.addEventListener("click", function() {
  count++;
  countDisplay.textContent = count;
});
