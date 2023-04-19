var startButton = document.querySelector("#start-button");
var timerElement = document.querySelector("timer-count");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");


var numBlanks = 0;
var timer;
var timerCount;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var currentquestionindex = 0;

var questions = [
    {
        question: " Who was the first Hokage:",
        choices: [
            "Minato",
            "Tobirama",
            "Hashirama",
            "Naruto",
        ],
        answer: "3"
    },
    {
        question: "Which Akautski did Sakura defeat",
        choices: [
             "Sasori",
             "Kakuzu",
             "Black Zetsu",
             "Itachi",
        ],
        answer : "1",
    },
    {
        question: "What is the CORRECT name of the purple orb Tailed beast make",
        choices: [
             "Purple ball",
             "Biju Bomb",
             "Tailed beast bomb",
             "Rasengan",
        ],
        answer: "2",
    },
    {
        question: "What chakra nature did Naruto add to his Rasengan",
        choices: [
            "Wind",
            "Water",
            "Lighting",
            "Fire",
        ],
        answer: "1"
    },
    {
        question: "What is the name of Kakashis main jutsu",
        choices: [
             "Lightning strike",
             "Kamui",
             "Shadow clone",
             "Chidori",
        ],
        answer: "4"
    },
    {
        question: "Who gave Kakashi the sharingan",
        choices: [
             "Obito",
             "Might Guy",
             "Naruto",
             "Kisame",
        ],
        answer: "1"
        
    },
]

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >=0) {
            if(complete && timerCount >0) {
                clearInterval(timer);
                quizDone();
            }
        }
        if (timerCount === 0) {
            clearInterval(timer);
            quizDone();
        }
    }, 1000);
}

function getQuestion() {
    var currentquestion = questions[currentquestionindex];
    for(var i = 0; i < currentquestion.choices.length; i++) { 
        console.log(currentquestion.question)
        console.log(currentquestion.choices[i])
    }
}


startButton.addEventListener("click", function() {
    document.querySelector("#start-block").setAttribute("class","hide");
    document.querySelector("#quiz-block").setAttribute("class", "show");
    getQuestion()
    startTimer()
});



// funtion start quiz, inside start quiz we wnat to get the question and start the quiz
// need fucntion to get questions 