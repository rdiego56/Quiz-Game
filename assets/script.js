var startButton = document.querySelector("#start-button");

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
        
    }
]


startButton.addEventListener("click", function() {
    document.querySelector("#start-block").setAttribute("class","hide");
    document.querySelector("#quiz-block").setAttribute("class", "show");
})
