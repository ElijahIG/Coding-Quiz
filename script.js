const startButton = document.getElementById("start-btn");

const questionContainer = document.getElementById("question-container");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions,
  currentQuestionIndex = 0;
let counter = 60;

const questions = [
  [
    "What is javascript?",
    "A Coding language",
    "A Starbucks drink",
    "A Font",
    "A city",
    "A Coding language",
  ],
  ["Front end and ______", "Up end", "Numbers", "Back end", "CSS", "Back end"],
  [
    "What is used to style a webpage?",
    "Paint",
    "CSS",
    "Pencils",
    "Photoshop",
    "CSS",
  ],
  [
    "What goes in a container tag?",
    "div",
    "body",
    "Google Docs",
    "Your computer",
    "div",
  ],
  [
    "How can you change the background color in css?",
    "Change-color",
    "Make-color",
    "Background-color",
    "Photoshop",
    "Background-color",
  ],
];

function startGame() {
  showQuestion(currentQuestionIndex);
}

function showQuestion(index) {
  function answerClickHandler() {
    if (this.textContent === questions[index][5]) {
      alert("correct!");
    } else {
      alert("wrong!");
    }
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
      alert("Completed!");
    } else {
      showQuestion(currentQuestionIndex);
    }
  }
  questionContainer.innerHTML = `<div id="question">${questions[index][0]}</div>
  <div id="answer-buttons" class="btn-grid">
    <button id="a1" class="btn">${questions[index][1]}</button>
    <button id="a2" class="btn">${questions[index][2]}</button>
    <button id="a3" class="btn">${questions[index][3]}</button>
    <button id="a4" class="btn">${questions[index][4]}</button>
  </div>`;
  document.getElementById("a1").addEventListener("click", answerClickHandler);
  document.getElementById("a2").addEventListener("click", answerClickHandler);
  document.getElementById("a3").addEventListener("click", answerClickHandler);
  document.getElementById("a4").addEventListener("click", answerClickHandler);
}

// function () {
//   var x = setInterval(function () {
//     counter--;
//     if (counter >= 0) {
//       id = document.getElementById("timer");
//       id.innerHTML = counter;
//     } else if (counter < 0) {
//       clearInterval(x);
//       id = document.getElementById("timer");
//       id.innerHTML = counter + 61;
//       counter = 60;
//       alert("It works!!!");
//     }
//   }, 1000);
// }

startButton.addEventListener("click", startGame);
