const startButton = document.getElementById("start-btn");

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);

function startGame() {
  console.log("Started");
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion() {
  questionElement.innerText = question.question;
}

function selectAnswer() {}

const questions = [
  {
    question: "What is javascript",
    answers: [
      { text: "Coding language", correct: true },
      { text: "Starbucks drink", correct: false },
    ],
  },
];

var counter = 60;
function startQuiz() {
  var x = setInterval(function () {
    counter--;
    if (counter >= 0) {
      id = document.getElementById("timer");
      id.innerHTML = counter;
    } else if (counter < 0) {
      clearInterval(x);
      id = document.getElementById("timer");
      id.innerHTML = counter + 61;
      counter = 60;
      alert("It works!!!");
    }
  }, 1000);
}
