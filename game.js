const questions = [
    {
        question: "Who said this quote: 'I love coffee!'?",
        correctAnswer: "Jesse",
        source: "Cox n Crendor Podcast Episode 1"
    },
    {
        question: "Who said this quote: 'I hate mornings!'?",
        correctAnswer: "Crendor",
        source: "Cox n Crendor Podcast Episode 2"
    }
    // Add more questions here
];

let currentQuestionIndex = 0;

function startGame() {
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("screen").innerHTML = `
        <h1>${currentQuestion.question}</h1>
        <div class="message" id="message"></div>
        <div class="button-container">
            <button class="Jesse" onclick="selectAnswer('Jesse')">Jesse</button>
            <button class="Crendor" onclick="selectAnswer('Crendor')">Crendor</button>
        </div>
        <button class="next-button" onclick="nextQuestion()" disabled>Next</button>
        <div class="source" id="source"></div>
    `;
}

function selectAnswer(answer) {
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

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        document.getElementById("screen").innerHTML = `
            <h1>End of the quiz!</h1>
          
        `;
    }
}

function goBack() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

function backToMenu() {
    currentQuestionIndex = 0;
    //change iframe source to menu.html
    document.getElementById("screen").innerHTML = `
        <h1>Cox n Crendor The Trivia</h1>
        <div class="button-container">
            <button class="Quotes" onclick="startGame()">Quotes</button>
        </div>
        `;
}