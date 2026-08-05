const answerButtons = document.querySelectorAll(".answer-btn");
const feedback = document.querySelector("#feedback");

const correctAnswer = "A labelled box that stores a value";

answerButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (button.textContent === correctAnswer) {
      feedback.textContent = "Correct!";
    } else {
      feedback.textContent = "Try again!";
    }
  });
});
