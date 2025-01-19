let choices = ["rock", "scissor", "paper"];
let userchoice;
let randomChoice;
let userScore = 0; // User's score
let computerScore = 0; // Computer's score
let userLastChoice = null;
let userName = "user";

// Track how often the user picks each option
let userMoveCounts = {
    rock: 0,
    paper: 0,
    scissor: 0,
};

window.onload = () => {
    let popup = document.getElementById("namePopup")
    let inputfield = document.getElementById("userNameInput")
    let submit = document.getElementById("submitName")

    // submit.addEventListener("click",()=>{
    let name = inputfield.value.trim();
    // if(name){
    //     popup.style.display = "none";
    //     userName = name;
    //     document.querySelector(".userscores").innerHTML = `${userName}'s score: ${userScore}`;
    // }
    // else{
    //     alert("Please enter a valid name.");
    // }
    const handleSubmit = () => {
        const name = inputfield.value.trim();
        if (name) {
            userName = name;
            console.log(`The username is ${userName}`)
            popup.style.display = "none"; // Hide the popup
            document.querySelector(".userscores").innerHTML = `${userName}'s score: ${userScore}`;
        } else {
            alert("Please enter a valid name."); // Show error if name is empty
        }

    }

    submit.addEventListener("click", handleSubmit);
    inputfield.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            handleSubmit()
        }
    })

}

function main(){
    document.querySelector(".rock").addEventListener("click", () => {
        userchoice = "rock";
        userMoveCounts.rock++;
        console.log(`${userName} choice: `, userchoice);
        computerchoice()
        checkresult()
        updatescore()
        userLastChoice = userchoice;

    })
    document.querySelector(".paper").addEventListener("click", () => {
        userchoice = "paper";
        userMoveCounts.paper++;
        console.log(`${userName} choice: `, userchoice);
        computerchoice()
        checkresult()
        updatescore()
        userLastChoice = userchoice;

    })
    document.querySelector(".scissor").addEventListener("click", () => {
        userchoice = "scissor";
        userMoveCounts.scissor++;
        console.log(`${userName} choice: `, userchoice);
        computerchoice()
        checkresult()
        updatescore()
        userLastChoice = userchoice;

    })
    const computerchoice = () => {
        // randomChoice = choices[Math.floor(Math.random() * choices.length)];
        // console.log("Computer's choice:", randomChoice);

        let mostFrequentMove = Object.keys(userMoveCounts).reduce((a, b) =>
            userMoveCounts[a] > userMoveCounts[b] ? a : b
        );
        if (mostFrequentMove === "rock") {
            randomChoice = "paper"; // Paper beats rock
        } else if (mostFrequentMove === "paper") {
            randomChoice = "scissor"; // Scissor beats paper
        } else if (mostFrequentMove === "scissor") {
            randomChoice = "rock"; // Rock beats scissor
        }

        // if (userLastChoice) {
        //     // Smarter logic: Counter the user's last choice
        //     if (userLastChoice === "rock") {
        //         randomChoice = "paper"; // Paper beats rock
        //     } else if (userLastChoice === "paper") {
        //         randomChoice = "scissor"; // Scissor beats paper
        //     } else if (userLastChoice === "scissor") {
        //         randomChoice = "rock"; // Rock beats scissor
        //     }
        // } else {
        //     // First move or no previous choice, random selection
        //     randomChoice = choices[Math.floor(Math.random() * choices.length)];
        // }
        console.log("Computer's choice:", randomChoice);
    }



    function checkresult() {

        if (randomChoice == userchoice) {
            document.querySelector(".result").innerHTML = "It's a tie"
            console.log("It's a tie");
        }
        else if (
            (randomChoice === "rock" && userchoice === "scissor") ||
            (randomChoice === "scissor" && userchoice === "paper") ||
            (randomChoice === "paper" && userchoice === "rock")) {
            document.querySelector(".result").innerHTML = "Comuputer Wins"
            console.log("Comuputer Wins");
            computerScore++;
        }
        else {
            document.querySelector(".result").innerHTML = `${userName} Wins`;
            userScore++;
            console.log(`${userName} Wins`);
        }
    }

    const updatescore = () => {
        document.querySelector(".userscores").innerHTML = `${userName}'s Scores: ${userScore}`
        document.querySelector(".computerscores").innerHTML = `coputer Scores: ${computerScore}`
    }
}

document.querySelector(".dark").addEventListener("click", () => {
    const darkIcon = document.querySelector(".dark");
    const body = document.body;

    if (darkIcon.src.includes("white.svg")) {
        darkIcon.src = "dark.svg";
        body.classList.add("dark-theme");
    } else {
        darkIcon.src = "white.svg";
        body.classList.remove("dark-theme");
    }
});

main()
