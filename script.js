// Creating the questions 

var questions = [
    {
        question: "Which of the following is a Javascript data type?",
        choices: ["Function", "String", "Operator"],
        correctAnswer: "String"
    },
    {
        question: "What does the strictly equal operator demonstrate?",
        choices: ["Performs a test to see if two values are equal and of the same data type.",
        "Add two numbers together or combine two strings.", 
        "This returns the logically opposite value of what it precedes."],
        correctAnswer: "Performs a test to see if two values are equal and of the same data type"
    },
    {
        question: "Which is an example of a comment in Javascript?",
        choices: ["...//...", "//", "!!!!!**"],
        correctAnswer: "//"
    },
    {
        question: "What is a function?",
        choices: ["Containers for named values", 
        "A block of reusable code written to perform a specific task.", 
        "Are actions that can be performed on objects."],
        correctAnswer: "A block of reusable code written to perform a specific task."
    },

    {
        question: "Which of the following allows you to convert a string to a native object?",
        choices: ["JSON.convert", "JSON.parse", "JSON.stringify"],
        correctAnswer: "JSON.parse"
    },
];

// Grabbing DOM elements

var startButton = document.getElementById("start");
var questionTitle = document.getElementById("question-title");
var choices = document.getElementById("choices");
var timeElement = document.getElementById("time");
var feedback = document.getElementById("feedback");
var endScreen = document.getElementById("end-screen");
var initialsInput = document.getElementById("initials");
var submitButton = document.getElementById("submit");
var finalScore = document.getElementById("final-score");

let currentQuestionIndex = 0;
let timeLeft = 60; 
let score = 0;


// Start the Quiz  by hiding the start screen and displaying the questions 
function startQuiz() {

  document.getElementById("start-screen").classList.add("hide");
  document.getElementById("questions").classList.remove("hide");

  startTimer(); 

  loadQuestion();
}

function startTimer() {
  var timerInterval = setInterval(function () {
    timeLeft--;
    timeElement.textContent = timeLeft;

    if (timeLeft <= 0) {
      endQuiz();
      clearInterval(timerInterval);
    }
  }, 1000);
}

// Load each question 

function loadQuestion() {
  if (currentQuestionIndex < questions.length) {
    var question = questions[currentQuestionIndex];
    questionTitle.textContent = question.question;
    choices.innerHTML = "";

    for (var choice of question.choices) {
      var choiceButton = document.createElement("button");
      choiceButton.textContent = choice;
      choiceButton.addEventListener("click", checkAnswer);
      choices.appendChild(choiceButton);
    }
  } else {
    endQuiz();
  }
}

// Check if the answer is correct or incorrect 

function checkAnswer(event) {
  var selectedAnswer = event.target.textContent;
  var question = questions[currentQuestionIndex];

  if (selectedAnswer === question.correctAnswer) {
    feedback.textContent = "Correct!";
    score += 10; // Increase score for correct answer
  } else {
    feedback.textContent = "Wrong! -10 seconds";
    timeLeft -= 10; // Deduct time for incorrect answer
  }

  currentQuestionIndex++;
  loadQuestion();
}

 // Stop the timer
function endQuiz() {
 
  timeLeft = 0;
  timeElement.textContent = timeLeft;

  // Hide questions and show the end screen
  document.getElementById("questions").classList.add("hide");
  endScreen.classList.remove("hide");

  // Display the final score
  finalScore.textContent = score;
}

startButton.addEventListener("click", startQuiz);

submitButton.addEventListener("click", function() {
    var initials = initialsInput.value.trim();
    if (initials !== "") {
   
      var highscores = JSON.parse(localStorage.getItem("highscores")) || [];  // Retrieve highscores from local storage
     
      highscores.push({ name: initials, score: score });   // Addition of users score and initials onto the page
    
      localStorage.setItem("highscores", JSON.stringify(highscores));    // Store the updated highscores array in local storage
      
      window.location.href = "highscores.html";  // Redirected to highscores page 
    }
  });


