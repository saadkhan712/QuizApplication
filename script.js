let start_page = document.querySelector("#Start");
let game_button = document.querySelector(".neon-button");
let game = document.querySelector("#Game");
let end = document.querySelector("#End");

game_button.addEventListener('click', () => {
    start_page.style.display = "none";
    game.style.display = "block";
    startGame();
});

let question_array = [
    {
        question: "Which of the following is used to declare a variable in JavaScript?",
        option_1: "var",
        option_2: "let",
        option_3: "const",
        option_4: "All of the above",
        answer: "op4"
      },
      {
        question: "Which symbol is used for strict equality comparison in JavaScript?",
        option_1: "=",
        option_2: "==",
        option_3: "===",
        option_4: "!=",
        answer: "op3"
      },
      {
        question: "How do you write a comment in Python?",
        option_1: "// This is a comment",
        option_2: "# This is a comment",
        option_3: "<!-- This is a comment -->",
        option_4: "/* This is a comment */",
        answer: "op2"
      },
      {
        question: "Which of these is a valid loop in Python?",
        option_1: "for (let i = 0; i < 5; i++)",
        option_2: "foreach (item in list)",
        option_3: "while i < 5:",
        option_4: "for i in range(5):",
        answer: "op4"
      },
      {
        question: "Which method is used to convert a string to an integer in Python?",
        option_1: "toInt()",
        option_2: "int()",
        option_3: "parseInt()",
        option_4: "Number()",
        answer: "op2"
      },
      {
        question: "What is the correct syntax to output data in Python?",
        option_1: "echo 'Hello, World!'",
        option_2: "console.log('Hello, World!')",
        option_3: "print('Hello, World!')",
        option_4: "printf('Hello, World!')",
        answer: "op3"
      },
      {
        question: "Which of these is a valid way to declare a function in JavaScript?",
        option_1: "function = myFunction()",
        option_2: "def myFunction()",
        option_3: "function myFunction()",
        option_4: "funct myFunction()",
        answer: "op3"
      },
      {
        question: "What does CSS stand for?",
        option_1: "Computer Style Sheets",
        option_2: "Creative Style Sheets",
        option_3: "Cascading Style Sheets",
        option_4: "Colorful Style Sheets",
        answer: "op3"
      },
      {
        question: "Which HTML element is used for the largest heading?",
        option_1: "<h1>",
        option_2: "<heading>",
        option_3: "<h6>",
        option_4: "<head>",
        answer: "op1"
      },
      {
        question: "Which method can be used to find the length of a string in JavaScript?",
        option_1: "strlen()",
        option_2: "length()",
        option_3: "len()",
        option_4: ".length",
        answer: "op4"
      }
      

];

let currQuestionIdx = 0; // setting the current index of the question to be 0 ,i.e, start.
let currScore = 0;
let LastScore = 0;

const startGame = () => {
    // Reset score and question index when starting the game
    currQuestionIdx = 0;
    currScore = 0;
    LastScore = 0;
    changeQuestion(currQuestionIdx);
};

const changeQuestion = (questionIdx) => {
    let question = question_array[questionIdx];
    let currQuestion = document.querySelector(".question");

    if (questionIdx < question_array.length) {
        changeProgress(questionIdx);
        currQuestion.innerText = question.question;
        let options = document.querySelectorAll(".option-sentence");
        let optionKeys = ["option_1", "option_2", "option_3", "option_4"];
        options.forEach((option, idx) => {
            option.innerText = question[optionKeys[idx]];
            option.style.backgroundColor = "white";
            option.style.color = "black";
            option.onclick = () => handleOptionClick(option, question, questionIdx);
        });
    }
};

const handleOptionClick = (option, question, questionIdx) => {
    let selected = option.id;
    let toBeVerified = option;
    let answer = question.answer;
    if (selected !== answer) {
        toBeVerified.style.backgroundColor = "red";
        toBeVerified.style.color = "white";
    } else {
        toBeVerified.style.backgroundColor = "green";
        toBeVerified.style.color = "white";
        currScore += 1;
        LastScore += 1;
    }
    setTimeout(() => {
        if (questionIdx + 1 < question_array.length) {
            currQuestionIdx++;
            changeQuestion(currQuestionIdx);
        } else {
            game.style.display = "none"; 
            end.style.display = "flex";
            let finalScore = end.querySelector("#final-score");
            finalScore.innerText = LastScore;
        }
    }, 1000);
};

const changeProgress = (currIdx) => {

    let number = game.querySelector("#question-progress h3 span");
    let score = game.querySelector("#current-score")
    if(currIdx < 3){
        number.innerText = currIdx + 1;
    }
    else{
        number.innerText = currIdx ;   
    }
    score.innerText  = currScore;
    let bar = game.querySelector("#inner-progress");
    bar.style.width = ((currIdx) * 10) + "%"; // Adjusting the width based on the current question index
};

// Event listeners for the restart and home buttons
document.querySelector("#restart").addEventListener('click', () => {
    currScore = 0;
    LastScore = 0;
    currQuestionIdx = 0;
    end.style.display = "none";
    game.style.display = "block";
    startGame();
});

document.querySelector("#home").addEventListener('click', () => {
    currScore = 0;
    LastScore = 0;
    currQuestionIdx = 0;
    end.style.display = "none";
    start_page.style.display = "block";
});
