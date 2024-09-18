let choices = document.querySelectorAll(".choice");
let userScoreDisplay = document.querySelector(".userScore");
let compScoreDisplay = document.querySelector(".computerScore");
let msgSection = document.querySelector("#msg");
let userName = document.querySelector(".Username");

let PlayerName = prompt("Enter Your Name");
let userScore = 0;
let computerScore = 0;


userName.innerText = PlayerName;

function getComputerChoice(){
    let options = ["rock","paper","scissor"];
    let index = Math.floor(Math.random() * 3);
    return options[index];
}

// draw game function
const drawGame = () =>{
    console.log("Game is draw!")
    msgSection.innerText = "Game is draw! Try again"
    msgSection.style.backgroundColor =  "#422020";
}

// show winner
const showWinner = (userWin,userChoice,computerChoice) =>{
    if(userWin){
        userScore++;
        userScoreDisplay.innerText = userScore;
        console.log("User won the match!");
        msgSection.innerText = `You won! ${userChoice} beats ${computerChoice}` ;
        msgSection.style.backgroundColor = "green";
    }
    else{
        computerScore++;
        compScoreDisplay.innerText = computerScore;
        console.log("Loss the game!");
        msgSection.innerText = `You Lost! ${computerChoice} beats ${userChoice}`;
        msgSection.style.backgroundColor = "red";
    }
}
let playGame = (userChoice) => {
    
    let computerChoice = getComputerChoice();

    console.log("User choice = " + userChoice + " & Computer Choice = " + computerChoice)

   
    if(userChoice === computerChoice){
        drawGame(); // draw case
    }
    else{
        let userWin = true;
        if(userChoice == "rock" && computerChoice == "scissor"){
            userWin = true;
        }
        else if(userChoice == "paper" && computerChoice == "rock"){
            userWin = true;
        }
        else if(userChoice == "scissor" && computerChoice == "paper"){
            userWin = true;
        }
        else{
            userWin = false;
        }
    
        showWinner(userWin,userChoice,computerChoice);
    }
     

}

choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})





