const questionEl = document.querySelector("#question");
const answerButtons = document.querySelectorAll(".answer-btn");
const feedback = document.querySelector("#feedback");
const nextBtn = document.querySelector("#next-btn");
const playAgainBtn = document.querySelector("#play-again-btn");
const gameScreen = document.querySelector("#game-screen");
const quizScreen = document.querySelector("#quiz-screen");
const scoreboard = document.querySelector("#scoreboard");
const shopBtn = document.querySelector("#shop-btn");
const shopScreen = document.querySelector("#shop-screen");
const closeShopBtn = document.querySelector("#close-shop-btn");
const buyButtons = document.querySelectorAll(".buy-btn");
const shopMessage = document.querySelector("#shop-message");

shopBtn.addEventListener("click", function () {
  shopScreen.hidden = false;
});

closeShopBtn.addEventListener("click", function () {
  shopScreen.hidden = true;
});

let currentIndex = 0;
let score = 0;
let correctCount = 0;
let lastShotAt = 0;
let ownedEffects = [];
let equippedEffect = "classic";

function launchConfetti() {
  const colors = ["#d4af37", "#ff5e5e", "#5ecbff", "#7cff5e", "#ffffff"];
  for (let i = 0; i < 30; i++) {
    const piece = document.createElement("div");
    piece.classList.add("confetti-piece");
    piece.style.left = Math.random() * 100 + "%";
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = Math.random() * 0.3 + "s";
    document.body.appendChild(piece);
    setTimeout(function () {
      piece.remove();
    }, 1500);
  }
}

const hackerOverlay = document.querySelector("#hacker-overlay");

function triggerHackerMode() {
  hackerOverlay.classList.remove("active");
  void hackerOverlay.offsetWidth;
  hackerOverlay.classList.add("active");
  setTimeout(function () {
    hackerOverlay.classList.remove("active");
  }, 900);
}

buyButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const effect = button.dataset.effect;
    const cost = Number(button.dataset.cost);

    if (ownedEffects.includes(effect)) {
      equippedEffect = effect;
      shopMessage.textContent = "Equipped " + effect + "!";
      return;
    }

    if (score < cost) {
      shopMessage.textContent = "Not enough points yet!";
      return;
    }

    score -= cost;
    updateScoreboard();
    ownedEffects.push(effect);
    equippedEffect = effect;
    button.textContent = "Equipped";
    shopMessage.textContent = "Bought and equipped " + effect + "!";
  });
});

function updateScoreboard() {
  scoreboard.textContent = "Score: " + score;
}

function playTone(frequency, duration) {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();
  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  oscillator.type = "sine";
  oscillator.frequency.value = frequency;

  const now = audioCtx.currentTime;
  gainNode.gain.setValueAtTime(0, now);
  gainNode.gain.linearRampToValueAtTime(0.15, now + 0.02);
  gainNode.gain.linearRampToValueAtTime(0, now + duration);

  oscillator.start(now);
  oscillator.stop(now + duration);
}

const questionBank = [
  {
    question: "What is a variable?",
    answers: [
      "A labelled box that stores a value",
      "A repeating block that runs the same code many times",
      "A property used to set an element's color in CSS",
    ],
    correct: "A labelled box that stores a value",
  },
  {
    question: "What symbol do you use to grab an element by its id?",
    answers: ["#", ".", "*"],
    correct: "#",
  },
  {
    question: "What is a function?",
    answers: [
      "A reusable block of code",
      "A container that holds a single value",
      "A style rule that changes how something looks",
    ],
    correct: "A reusable block of code",
  },
  {
    question: "What does a loop do?",
    answers: ["Repeats something multiple times", "Stores a single value", "Changes the page color"],
    correct: "Repeats something multiple times",
  },
  {
    question: "What is an array?",
    answers: ["A list of values", "A single number", "A type of button"],
    correct: "A list of values",
  },
  {
    question: "What is an object in JavaScript?",
    answers: [
      "A bundle of related info stored as key-value pairs",
      "A single whole number with no extra structure",
      "A pattern used in CSS to target one element",
    ],
    correct: "A bundle of related info stored as key-value pairs",
  },
  {
    question: "What does DOM stand for?",
    answers: ["Document Object Model", "Data Object Method", "Display Output Module"],
    correct: "Document Object Model",
  },
  {
    question: "What does document.querySelector do?",
    answers: [
      "Finds one matching element on the page",
      "Removes one specific element from the page",
      "Loads an additional CSS file into the page",
    ],
    correct: "Finds one matching element on the page",
  },
  {
    question: "What is an event listener?",
    answers: [
      "Code that runs when something happens, like a click",
      "A repeating loop that runs the same code over and over",
      "A CSS effect that gradually changes an element's style",
    ],
    correct: "Code that runs when something happens, like a click",
  },
  {
    question: "What data type is true or false?",
    answers: ["Boolean", "String", "Number"],
    correct: "Boolean",
  },
  {
    question: "What symbol is used for a class selector in CSS?",
    answers: [".", "#", "&"],
    correct: ".",
  },
  {
    question: "What does === check for in JavaScript?",
    answers: ["If two values are exactly equal", "If a variable exists", "If a loop should stop"],
    correct: "If two values are exactly equal",
  },
  {
    question: "What is a string?",
    answers: ["Text data, like \"hello\"", "A whole number", "A true/false value"],
    correct: "Text data, like \"hello\"",
  },
  {
    question: "What does an if statement do?",
    answers: [
      "Runs code only if a condition is true",
      "Repeats the same code over and over forever",
      "Permanently removes an element from the page",
    ],
    correct: "Runs code only if a condition is true",
  },
  {
    question: "What is CSS used for?",
    answers: ["Styling how a page looks", "Making a page interactive", "Structuring page content"],
    correct: "Styling how a page looks",
  },
  {
    question: "What is HTML used for?",
    answers: [
      "Structuring the content of a page",
      "Changing the colors and layout of a page",
      "Adding clickable, interactive behavior to a page",
    ],
    correct: "Structuring the content of a page",
  },
  {
    question: "What does setInterval do?",
    answers: [
      "Repeats a function on a timer",
      "Runs a function a single time only",
      "Immediately stops every script on the page",
    ],
    correct: "Repeats a function on a timer",
  },
  {
    question: "What does \"let\" do in JavaScript?",
    answers: [
      "Creates a variable that can change",
      "Defines a new style rule for an element",
      "Permanently deletes a variable from memory",
    ],
    correct: "Creates a variable that can change",
  },
  {
    question: "What is debugging?",
    answers: [
      "Finding and fixing errors in code",
      "Writing brand new features from scratch",
      "Planning out how a page should look",
    ],
    correct: "Finding and fixing errors in code",
  },
  {
    question: "What does .textContent do?",
    answers: [
      "Gets or sets the text inside an element",
      "Changes the background or text color of an element",
      "Permanently removes an element from the page",
    ],
    correct: "Gets or sets the text inside an element",
  },
  {
    question: "What does \"const\" do in JavaScript?",
    answers: [
      "Creates a variable that cannot be reassigned",
      "Creates a variable that resets every second",
      "Creates a new rule inside a CSS file",
    ],
    correct: "Creates a variable that cannot be reassigned",
  },
  {
    question: "What is an operator, like + or >?",
    answers: [
      "A symbol used to compare or combine values",
      "A tag used to structure a page",
      "A file used to store images",
    ],
    correct: "A symbol used to compare or combine values",
  },
  {
    question: "What does .push() do to an array?",
    answers: [
      "Adds a new item onto the end",
      "Removes the first item from the front",
      "Rearranges every item into alphabetical order",
    ],
    correct: "Adds a new item onto the end",
  },
  {
    question: "What is \"NaN\" short for?",
    answers: ["Not a Number", "New and Now", "No Actual Node"],
    correct: "Not a Number",
  },
  {
    question: "What does addEventListener do?",
    answers: [
      "Tells an element to watch for a specific event",
      "Permanently removes a specific event from the page",
      "Instantly changes an element's font size and color",
    ],
    correct: "Tells an element to watch for a specific event",
  },
  {
    question: "What is a class used for in CSS?",
    answers: [
      "A reusable label you can apply to many elements",
      "A single unique identifier for one element",
      "A way to link an external script file",
    ],
    correct: "A reusable label you can apply to many elements",
  },
  {
    question: "What does \"git commit\" do?",
    answers: [
      "Saves a labeled snapshot of your changes",
      "Uploads your code straight to the internet",
      "Permanently deletes your previous changes",
    ],
    correct: "Saves a labeled snapshot of your changes",
  },
  {
    question: "What does \"git push\" do?",
    answers: [
      "Sends your saved commits up to a remote repository",
      "Downloads someone else's code onto your computer",
      "Permanently deletes an entire remote branch",
    ],
    correct: "Sends your saved commits up to a remote repository",
  },
  {
    question: "What is a callback function?",
    answers: [
      "A function passed into another function to run later",
      "A function that only ever runs a single time",
      "A function that exists only inside the browser",
    ],
    correct: "A function passed into another function to run later",
  },
  {
    question: "What does Math.random() return?",
    answers: [
      "A random decimal number between 0 and 1",
      "A random whole number between 1 and 100",
      "The largest number JavaScript is able to store",
    ],
    correct: "A random decimal number between 0 and 1",
  },
  {
    question: "What does clearInterval do?",
    answers: [
      "Stops a repeating timer started by setInterval",
      "Deletes every variable currently on the page",
      "Pauses every animation running on the page",
    ],
    correct: "Stops a repeating timer started by setInterval",
  },
  {
    question: "What is localStorage used for?",
    answers: [
      "Saving small bits of data in the browser",
      "Immediately sending data off to a remote server",
      "Applying custom colors and styles to elements",
    ],
    correct: "Saving small bits of data in the browser",
  },
  {
    question: "What is a bug in programming?",
    answers: [
      "An unexpected error or flaw in the code",
      "A helpful shortcut built into the code",
      "A special type of loop that never ends",
    ],
    correct: "An unexpected error or flaw in the code",
  },
  {
    question: "What does an array's .length tell you?",
    answers: [
      "How many items are currently in the array",
      "The very first item stored in the array",
      "Whether the array is empty or not",
    ],
    correct: "How many items are currently in the array",
  },
  {
    question: "What is padding in CSS?",
    answers: [
      "Space inside an element, around its content",
      "Space outside an element, around its border",
      "The color shown behind an element's text",
    ],
    correct: "Space inside an element, around its content",
  },
  {
    question: "What does margin do in CSS?",
    answers: [
      "Adds space outside an element, around its border",
      "Adds space inside an element, around its content",
      "Changes an element's border color and thickness",
    ],
    correct: "Adds space outside an element, around its border",
  },
  {
    question: "What is flexbox used for in CSS?",
    answers: [
      "Arranging elements in flexible rows or columns",
      "Adding smooth animations to on-page text",
      "Storing multiple images inside one single file",
    ],
    correct: "Arranging elements in flexible rows or columns",
  },
  {
    question: "What does the \"return\" keyword do in a function?",
    answers: [
      "Sends a value back out of the function",
      "Immediately stops the entire program running",
      "Repeats the function one extra time",
    ],
    correct: "Sends a value back out of the function",
  },
  {
    question: "What is JSON commonly used for?",
    answers: [
      "Storing and exchanging structured data as text",
      "Styling web pages with colors and fonts",
      "Playing audio and video files smoothly",
    ],
    correct: "Storing and exchanging structured data as text",
  },
  {
    question: "What does Array.forEach() do?",
    answers: [
      "Runs a function once for every array item",
      "Removes every single item from the array",
      "Combines two separate arrays into one",
    ],
    correct: "Runs a function once for every array item",
  },
];

let questions = shuffleArray(questionBank);

function shuffleArray(array) {
  const shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = shuffled[i];
    shuffled[i] = shuffled[j];
    shuffled[j] = temp;
  }
  return shuffled;
}

function loadQuestion() {
  const current = questions[currentIndex];
  questionEl.textContent = current.question;
  const shuffledAnswers = shuffleArray(current.answers);
  answerButtons.forEach(function (button, i) {
    button.textContent = shuffledAnswers[i];
  });
}

answerButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const current = questions[currentIndex];
    if (button.textContent === current.correct) {
      feedback.textContent = "Correct!";
      correctCount++;
      feedback.classList.remove("pop");
      void feedback.offsetWidth;
      feedback.classList.add("pop");
      playTone(880, 0.15);
    } else {
      feedback.textContent = "Try again!";
      playTone(220, 0.2);
    }
    nextBtn.hidden = false;
  });
});

nextBtn.addEventListener("click", function () {
  currentIndex++;
  feedback.textContent = "";
  nextBtn.hidden = true;
  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    questionEl.hidden = true;
    feedback.textContent = "Quiz complete! Final score: " + score;
    answerButtons.forEach(function (button) {
      button.hidden = true;
    });
    playAgainBtn.hidden = false;
  }

  if (correctCount > 0 && correctCount % 5 === 0 && correctCount !== lastShotAt) {
    lastShotAt = correctCount;
    startShot();
  }
});

playAgainBtn.addEventListener("click", function () {
  currentIndex = 0;
  correctCount = 0;
  lastShotAt = 0;
  questions = shuffleArray(questionBank);
  questionEl.hidden = false;
  feedback.textContent = "";
  answerButtons.forEach(function (button) {
    button.hidden = false;
  });
  playAgainBtn.hidden = true;
  loadQuestion();
});

loadQuestion();

const meterMarker = document.querySelector("#meter-marker");
let markerPosition = 0;
let direction = 1;
let currentSpeed = 1;

function moveMarker() {
  markerPosition = markerPosition + direction * currentSpeed;
  if (markerPosition >= 100 || markerPosition <= 0) {
    direction = direction * -1;
  }
  meterMarker.style.left = markerPosition + "%";
}

const shootBtn = document.querySelector("#shoot-btn");
const shotResult = document.querySelector("#shot-result");
const shotTypeEl = document.querySelector("#shot-type");
const continueBtn = document.querySelector("#continue-btn");
const ball = document.querySelector("#ball");
let meterInterval;
let currentShotType;

const shotTypes = [
  { label: "3-Pointer", points: 3, perfectRange: 2, goodRange: 5, speed: 3 },
  { label: "2-Pointer", points: 2, perfectRange: 4, goodRange: 12, speed: 2 },
  { label: "1-Pointer (Free Throw)", points: 1, perfectRange: 10, goodRange: 35, speed: 1 },
];

function startShot() {
  quizScreen.hidden = true;
  gameScreen.hidden = false;
  shopBtn.hidden = true;
  shotResult.textContent = "";
  ball.classList.remove("perfect", "good", "miss");
  shootBtn.hidden = false;
  continueBtn.hidden = true;
  markerPosition = 0;
  direction = 1;

  const randomIndex = Math.floor(Math.random() * shotTypes.length);
  currentShotType = shotTypes[randomIndex];
  shotTypeEl.textContent = currentShotType.label;
  currentSpeed = currentShotType.speed;

  meterInterval = setInterval(moveMarker, 20);
}

shootBtn.addEventListener("click", function () {
  clearInterval(meterInterval);
  shootBtn.hidden = true;
  const distance = Math.abs(markerPosition - 50);
  let resultClass;
  if (distance <= currentShotType.perfectRange) {
    shotResult.textContent = "Perfect shot! +" + currentShotType.points;
    ball.classList.add("perfect");
    score += currentShotType.points;
    resultClass = "celebrate";
    playTone(1200, 0.35);
  } else if (distance <= currentShotType.goodRange) {
    shotResult.textContent = "Good shot! +" + currentShotType.points;
    ball.classList.add("good");
    score += currentShotType.points;
    resultClass = "pop";
    playTone(700, 0.25);
  } else {
    shotResult.textContent = "Airball!";
    ball.classList.add("miss");
    resultClass = "pop";
    playTone(150, 0.3);
  }
  shotResult.classList.remove("pop", "celebrate");
  void shotResult.offsetWidth;
  shotResult.classList.add(resultClass);

  if (resultClass === "celebrate" && equippedEffect === "confetti") {
    launchConfetti();
  } else if (resultClass === "celebrate" && equippedEffect === "hacker") {
    triggerHackerMode();
  }
  updateScoreboard();
  continueBtn.hidden = false;
});

continueBtn.addEventListener("click", function () {
  gameScreen.hidden = true;
  quizScreen.hidden = false;
  shopBtn.hidden = false;
});
