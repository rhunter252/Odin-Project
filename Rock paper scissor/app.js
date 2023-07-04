const choices = ["rock", "paper", "scissors"];
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result = document.getElementById("result");

const getCPUChoice = () => {
  const randNum = Math.floor(Math.random() * 3);
  const cpuChoice = choices[randNum];
  return cpuChoice;
};

rock.addEventListener("click", () => {
  const playerSelection = "rock";
  const computerSelection = getCPUChoice();
  console.log(playRound(playerSelection, computerSelection));
});

paper.addEventListener("click", () => {
  const playerSelection = "paper";
  const computerSelection = getCPUChoice();
  console.log(playRound(playerSelection, computerSelection));
});

scissors.addEventListener("click", () => {
  const playerSelection = "scissors";
  const computerSelection = getCPUChoice();
  console.log(playRound(playerSelection, computerSelection));
});

let score = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return (result.textContent = "It's a draw!");
  }
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return (result.textContent = "Player wins!");
  } else {
    return (result.textContent = "Computer wins!");
  }
}
