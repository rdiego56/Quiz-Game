var startButton = document.querySelector("#start-button");
var timerElement = document.querySelector(".timer");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var feedbackEl = document.querySelector("#feedback");
var resetButton = document.querySelector(".reset-button");
var submitButton = document.querySelector("#submit-button");

var numBlanks = 0;
var timer;
var timerCount = 100;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var currentquestionindex = 0;
var complete = false

var questions = [
    {
        question: " Who was the first Hokage:",
        choices: [
            "Minato",
            "Tobirama",
            "Hashirama",
            "Naruto",
        ],
        answer: "Hashirama"
    },
    {
        question: "Which Akautski did Sakura defeat",
        choices: [
             "Sasori",
             "Kakuzu",
             "Black Zetsu",
             "Itachi",
        ],
        answer : "Sasori",
    },
    {
        question: "What is the CORRECT name of the purple orb Tailed beast make",
        choices: [
             "Purple ball",
             "Biju Bomb",
             "Tailed beast bomb",
             "Rasengan",
        ],
        answer: "Biju Bomb",
    },
    {
        question: "What chakra nature did Naruto add to his Rasengan",
        choices: [
            "Wind",
            "Water",
            "Lighting",
            "Fire",
        ],
        answer: "Wind"
    },
    {
        question: "What is the name of Kakashis main jutsu",
        choices: [
             "Lightning strike",
             "Kamui",
             "Shadow clone",
             "Chidori",
        ],
        answer: "Chidori"
    },
    {
        question: "Who gave Kakashi the sharingan",
        choices: [
             "Obito",
             "Might Guy",
             "Naruto",
             "Kisame",
        ],
        answer: "Obito"
        
    },
]

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount === 0) {
            clearInterval(timer);
            quizDone();
        }
        if(currentquestionindex >= questions.length){
            clearInterval(timer);
            quizDone();
        }
    }, 1000);
}
function quizDone() {
    document.querySelector("#quiz-block").classList.remove("show");
    document.querySelector("#quiz-block").classList.add("hide");
    document.querySelector("#Finished").classList.remove("hide");
    document.querySelector("#Finished").classList.add("show");
    document.querySelector("#finalscore").textContent="highscore: " + timerCount
}


function getQuestion() {
    var currentquestion = questions[currentquestionindex];
    var quizblock = document.querySelector("#quiz-block")
    var question = document.querySelector("#Question-text") 
    var correct = document.querySelector(".answers")
    correct.innerHTML = ""
    for(var i = 0; i < currentquestion.choices.length; i++) { 
        console.log(currentquestion.question)
        console.log(currentquestion.choices[i])
        question.textContent = currentquestion.question
        var answers = document.createElement("p")
        answers.className = "correct-answer"
        answers.textContent = currentquestion.choices[i]
        answers.onclick = function(event){
            checkAnswer(event)
        }
        // quizblock.appendChild(question)
        correct.appendChild(answers)
    }
}

function checkAnswer(event) {
    console.log(event.target.textContent)
    var answer = event.target.textContent
    if(currentquestionindex <= questions.length){
    if (answer === questions[currentquestionindex].answer) {
        currentquestionindex++
        getQuestion()
      // Answer is correct
      feedbackEl.textContent = "Correct!";
    } else {
      // Answer is incorrect
      timerCount -= 10;
      currentquestionindex++ 
      getQuestion()
      feedbackEl.textContent = "Wrong!";
    }}
    else{
        quizDone()
    }
} 

startButton.addEventListener("click", function() {
    document.querySelector("#start-block").setAttribute("class","hide");
    document.querySelector("#quiz-block").setAttribute("class", "show");
    getQuestion()
    startTimer()
});

submitButton.addEventListener("click", function() {
    // console.log(timerCount)
    var currentinitials = document.querySelector("#initials").value
//     console.log(document.querySelector("#initials").value)
var currenthighscores = JSON.parse(localStorage.getItem("highscore")) ||[]
currenthighscores.push({
    initials: currentinitials,
    score: timerCount
}) 
localStorage.setItem("highscore", JSON.stringify(currenthighscores))
document.querySelector("#Finished").classList.remove("show");
document.querySelector("#Finished").classList.add("hide");
document.querySelector("#highscore-block").classList.remove("hide");
for(var i = 0; i < currenthighscores.length; i++){
    var score = document.createElement("li")
    score.textContent = currenthighscores.timerCount.scorelist[i]
}
})

var resetButton = document.querySelector(".reset-button")
document.querySelector("#reset-button").classList.remove("show");
document.querySelector("#Finished").classList.add("hide");

function resetGame() {
    winCounter = 0;
    loseCounter = 0;
    setWins()
    setLosses()
}
resetButton.addEventListener("click", function(){
});

// funtion start quiz, inside start quiz we wnat to get the question and start the quiz
// need fucntion to get questions 