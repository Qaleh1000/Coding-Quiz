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

let startButton = document.getElementById("start");
let h2QuestionElement = document.getElementById("question-title");
let choicesElement = document.getElementById("choices");
let timerElement = document.getElementById("time");
let feedback = document.getElementById("feedback");
let endScreen = document.getElementById("end-screen");
let initialsInput = document.getElementById("initials");
let submitButton = document.getElementById("submit");
let finalScore = document.getElementById("final-score");

