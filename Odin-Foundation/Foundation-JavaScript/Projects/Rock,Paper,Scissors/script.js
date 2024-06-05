let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
  let random = Math.floor(Math.random() * (4 - 1) + 1);
  if (random === 1) {
    return "rock";
  }
  else if (random === 2) {
    return "paper";
  }
  else if (random === 3) {
    return "scissors";
  }
  else {
    return "There was an unexpected error";
  };
};
function playRound(choice) {
  let humanSelection = choice;
  let computerSelection = getComputerChoice();
  if (humanSelection === ("rock")) {
    if (computerSelection === ("paper")) {
      console.log("paper wins");
      computerScore += 1;
    }
    else if (computerSelection === ("rock")) {
      console.log("Both selected the same thing");
    }
    else {
      if (computerSelection === ("scissors")) {
        console.log("rock wins");
        humanScore += 1;
      }
    }
  }
  else if (humanSelection === ("paper")) {
    if (computerSelection === ("rock")) {
      console.log("paper wins");
      humanScore += 1;
    }
    else if (computerSelection === ("paper")) {
      console.log("Both selected the same thing");
    }
    else {
      if (computerSelection === ("scissors")) {
        console.log("scissors wins");
        computerScore += 1;
      }
    }
  }
  else if (humanSelection === ("scissors")) {
    if (computerSelection === ("paper")) {
      console.log("scissors wins");
      humanScore += 1;
    }
    else if (computerSelection === ("scissors")) {
      console.log("Both selected the same thing");
    }
    else {
      if (computerSelection === ("rock")) {
        console.log("rock wins");
        computerScore += 1;
      }
    }
  }
  else {
    console.log("Invalid choice")
    playRound();
  }
}

function CheckForWinner() {

  if (humanScore === 5 || computerScore === 5) {
    if (humanScore > computerScore) {
      result.textContent = `You Win!`
    }
    else {
      result.textContent = `You Lose!`
    };
  }
  else {
    result.textContent = `You:  ${humanScore} vs Computer: ${computerScore}`
  };
}
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
rock.addEventListener("click", () => {
  let humanChoice = "rock";
  playRound("rock")
  CheckForWinner();
  // result.textContent = `Curent Score: ${humanScore} vs ${computerScore}`
});

paper.addEventListener("click", () => {
  let humanChoice = "paper";
  playRound("paper")
  CheckForWinner();
  // result.textContent = `Curent Score: ${humanScore} vs ${computerScore}`
});

scissor.addEventListener("click", () => {
  let humanChoice = "scissor";
  playRound("scissors")
  CheckForWinner();
  // result.textContent = `Curent Score: ${humanScore} vs ${computerScore}`
});

const result = document.querySelector("#result");
result.textContent = ` You: ${humanScore} vs Computer: ${computerScore} `
