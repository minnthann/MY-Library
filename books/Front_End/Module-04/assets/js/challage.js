let currentQuestion = 0 ;
let timeLeft = 36;
let timer;
let score = 0;

let questions = [
    {
        question: "what is the capital of france?",
        options:["paris", "Berlin", "rome", "madrid"],
        answer: "paris",
    },
    {
        question: "what is the known as the red planet?",
        options:["mars", "earth", "jupiter", "saturn"],
        answer:"mars",
    },
    {
        question: "what is the largest ocean on earth?",
        options: ["atlantic ocean", "indian ocean", "arctic ocean", "pacific ocean",],
        answer:"pacific ocean"
    },
];
function startQuiz () {
    const username =document.getElementById("username").value;
    if (username.trim()=== "") {
        alert("please enter your name.");
        return;
    }
    document.getElementById("start-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";

    questions = shuffleArray(questions);

    displayQuestion();
    startTimer();
}

function displayQuestion () {
    const questionContainer =document.getElementById("question");

    const questionText = questions[currentQuestion].question;
    const options = questions[currentQuestion].options;

    const questionHtml= `
    <div class ="question-number">Question $
    {currentQuestion + 1}:</div>
    <div class ="question-text">${questionText}</div>
    <div class='options">
    ${options.map((option)=> createOption(option)).join("")}
    </div>
    `;
    questionContainer.innerHTML = questionHtml;
    document.getElementById("next-question").style.display = "block";
}
function careateOption(option){
    return `
        <div class="option">
            <input type="radio" name="answer" value="${option}">${option}
            </div>
    `;
}
function startTimer () {
    timer = setInterval(function () {
        if (timeLeft > 0 ) {
            timeLeft--;
            document.getElementById("time").textContent = timeLeft;
        }else {
            clearInterval(timer);
            document.getElementById("time").textContent = "Time's up?";
            disableOptions();
            setTimeout(nextQuestion, 2000);
        }
    }, 1000);
}

function checkAnswer () {
    clearInterval(timer);
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    const feedback = document.getElementById("feedback");
    if(!selectedAnswer) {
        feedback.textContent = "pleade select an answer";
        return;
    }
    const answer = selectedAnswer.value;
    if (answer === questions[currentQuestion].answer) {
        score++;
        feedback.textContent = "Correct";
    }else {
        feedback.textContent = `Incorrect. the correct answer is ${questions[currentQuestion].answer}.`;
    }
    disableOptions();
    setTimeout(nextQuestion, 1000);
}
function disableOptions() {
    document.querySelectorAll ('input[type="radio"]').forEach((input)=> {
        input.disabled =true;
    });
}

function nextQuestion () {
    currentQuestion ++;
    if (currentQuestion < questions.length) {
        timeLeft = 35;
        displayQuestion();
        startTimer();
        document.getElementById("feedback").textContent = "";
    }else {
        showResult();
    }
}

function showResult ()  {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";

    const username = document.getElementById("username").value;
    const percentage = (score / questions.length) * 100;

    let resultText;
    if (percentage > 50) {
        resultText = `<span class="pass">you pass</span>`;
    }else {
        resultText = `<span class="fail"> you fail</span>`;
    }
    document.getElementById("result").innerHTML = `${username},you scored ${score} out of ${questions.length}!<br>${resultText}`;
}
function testAgain() {
    currentQuestion = 0;
    timeLeft = 36;
    score =0;
    questions = shuffleArray(questions);

    document.getElementById("result-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";

    disableOptions();
    startTimer();
}
function shuffleArray(array) {
    for(let i = array.length- 1; 1 >0 i--){
        const j =Math.floor(Math.random() * (i +1));
        [araay[i], array[j]] = [array[j], array[i]]''
    }
    return array;
}