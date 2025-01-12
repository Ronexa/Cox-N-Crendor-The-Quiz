import questions from './questions.js';

let currentQuestionIndex = 0;

export function startGame() {
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("screen").innerHTML = `
        <h2>${currentQuestion.question}</h2>
        <div class="message" id="message"></div>
        <div class="button-container">
            <button class="Jesse" onclick="selectAnswer('Jesse')">Jesse</button>
            <button class="Crendor" onclick="selectAnswer('Crendor')">Crendor</button>
        </div>
        <div class="button-container">
            <button class="next-button" onclick="nextQuestion()" disabled>Next</button>
        </div>
        <div class="source" id="source"></div>
    `;
}

export function selectAnswer(answer) {
    const currentQuestion = questions[currentQuestionIndex];
    const buttons = document.querySelectorAll('.button-container button');
    buttons.forEach(button => button.disabled = true); // Disable buttons after selection

    const messageElement = document.getElementById('message');
    if (answer === currentQuestion.correctAnswer) {
        document.querySelector(`button.${answer}`).style.backgroundColor = 'blue';
        messageElement.textContent = 'Correct!';
    } else {
        document.querySelector(`button.${answer}`).style.backgroundColor = 'red';
        messageElement.textContent = 'Wrong!';
    }

    document.querySelector('.next-button').disabled = false; // Enable the Next button

    const sourceElement = document.getElementById('source');
    sourceElement.textContent = `Source: ${currentQuestion.source}`;
}

export function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        document.getElementById("screen").innerHTML = `
            <h1>End of the quiz!</h1>
        `;
    }
}

export function goBack() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

export function backToMenu() {
    currentQuestionIndex = 0;
    document.getElementById("screen").innerHTML = `
        <h1>Cox n Crendor The Trivia</h1>
        <div class="button-container">
            <button class="Quotes" onclick="startGame()">Quotes</button>
        </div>
    `;
}

// Attach functions to the window object
window.startGame = startGame;
window.selectAnswer = selectAnswer;
window.nextQuestion = nextQuestion;
window.goBack = goBack;
window.backToMenu = backToMenu;