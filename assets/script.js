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

var questions = [
    {
        question: " Who was the first Hokage:",
        choices: {
            1: "Minato",
            2:"Tobirama",
            3:"Hashirama",
            4:"Naruto",
        },
        answer: "3"
    },
    {
        question: "Which Akautski did Sakura defeat",
        choices: {
            1: "Sasori",
            2: "Kakuzu",
            3: "Black Zetsu",
            4: "Itachi",
        },
        answer : "1",
    },
    {
        question: "What is the CORRECT name of the purple orb Tailed beast make",
        choices: {
            1: "Purple ball",
            2: "Biju Bomb",
            3: "Tailed beast bomb",
            4: "Rasengan",
        },
        answer: "2",
    },
    {
        question: "What chakra nature did Naruto add to his Rasengan",
        choices: {
            1:"Wind",
            2:"Water",
            3:"Lighting",
            4:"Fire",
        },
        answer: "1"
    },
    {
        question: "What is the name of Kakashis main jutsu",
        choices: {
            1: "Lightning strike",
            2: "Kamui",
            3: "Shadow clone",
            4: "Chidori",
        },
        answer: "4"
    },
    {
        question: "Who gave Kakashi the sharingan",
        choices: {
            1: "Obito",
            2: "Might Guy",
            3: "Naruto",
            4: "Kisame",
        },
        answer: "1"
        
    },
]

var Code = "";
for( var i = 0; i < questions);

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




startButton.addEventListener("click", function() {
    document.querySelector("#start-block").setAttribute("class","hide");
    document.querySelector("#quiz-block").setAttribute("class", "show");
});

