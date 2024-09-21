let currentQuestion = 0;
let timeLeft = 36;
let timer;
let score = 0;
let questions = [];

function loadQuestions () {
    const questionsData = document.getElementById("questions-data"). textContent;
    questions = JSON.parse(questionsData);
}
function startQuiz() {
    const username = document.getElementById("username").ariaValueMax;
    if (username.trim() ==="") {
        alert("please enter name.");
        return;
    }
    
}


function shuffleArray (array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}