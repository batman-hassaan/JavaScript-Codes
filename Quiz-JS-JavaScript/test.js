let questionnum = 0;
let countdownInterval;

function startCountdown() {
    let timeLeft = 10; // Reset the timer for each question
    const timerDisplay = document.querySelector(".sec");
    timerDisplay.textContent = `${timeLeft}s`;

    clearInterval(countdownInterval); // Clear any previous intervals

    countdownInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timerDisplay.textContent = `${timeLeft}s`;
        } else {
            clearInterval(countdownInterval);
            timerDisplay.textContent = "Time's up!";
            handleTimeout();
        }
    }, 1000);
}

function displayquestion() {
    const currentQuestion = questions[questionnum];
    document.querySelector(".qnum").innerHTML = `${questionnum + 1} of ${questions.length} Question`;
    document.querySelector('.question').innerHTML = currentQuestion.question;

    const optionsContainer = document.querySelector(".options");
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;

        button.addEventListener("click", () => {
            checkanswer(button, option);
        });

        optionsContainer.appendChild(button);
    });

    startCountdown(); // Start the timer for the question
}

function checkanswer(selectedButton, option) {
    clearInterval(countdownInterval); // Stop the timer
    const correctAnswer = questions[questionnum].correctAnswer;
    const optionsContainer = document.querySelector(".options");

    const correctButton = Array.from(optionsContainer.children).find(
        (button) => button.innerText === correctAnswer
    );

    if (option === correctAnswer) {
        console.log("Correct!");
        selectedButton.style.backgroundColor = "#ACE1AF"; // Green for correct
    } else {
        console.log("Wrong!");
        selectedButton.style.backgroundColor = "#E32636"; // Red for wrong
        if (correctButton) correctButton.style.backgroundColor = "#ACE1AF"; // Green for correct
    }

    // Move to the next question after a delay
    setTimeout(() => {
        questionnum++;
        if (questionnum < questions.length) {
            displayquestion();
        } else {
            alert("Quiz Complete!");
            questionnum = 0; // Reset to the first question
            displayquestion();
        }
    }, 2000);
}

function handleTimeout() {
    const correctAnswer = questions[questionnum].correctAnswer;
    const optionsContainer = document.querySelector(".options");

    const correctButton = Array.from(optionsContainer.children).find(
        (button) => button.innerText === correctAnswer
    );

    if (correctButton) correctButton.style.backgroundColor = "#ACE1AF"; // Highlight correct answer in green
    console.log("Time's up!");

    setTimeout(() => {
        questionnum++;
        if (questionnum < questions.length) {

        } else {
            alert("Quiz Complete!");
            questionnum = 0; 
            // displayquestion();
        }
    }, 2000);
}

document.querySelector(".next-btn").addEventListener("click", () => {
    displayquestion()
})
// Initialize the first question
displayquestion();
