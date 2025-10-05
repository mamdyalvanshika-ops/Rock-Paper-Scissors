const choiceBtns = document.querySelectorAll(".choice-btn");

const playerChoiceText = document.querySelector(".player-choice-text");
const cpuChoiceText = document.querySelector(".cpu-choice-text");

const gameTitle = document.querySelector(".game-title");

const scoreWonText = document.querySelector(".score-won-text");
const scoreDrawText = document.querySelector(".score-draw-text");
const scoreLostText = document.querySelector(".score-lost-text");

let playerResultValue = "";
let cpuResultValue = "";

const choiceEmoji = {
  Rock: "✊",
  Paper: "✋",
  Scissors: "✌️"
};

choiceBtns.forEach((choiceBtn) => {
  choiceBtn.addEventListener("click", () => {
    gameTitle.textContent = "Let's Play!";

    // Show default hand while waiting
    playerChoiceText.textContent = "✊";
    cpuChoiceText.textContent = "✊";

    // Get choices
    playerResultValue = choiceBtn.value;
    cpuResultValue = getCpuResultValue();

    // Add animation
    playerChoiceText.classList.add("player-choice-text-anim");
    cpuChoiceText.classList.add("cpu-choice-text-anim");

    // Show result after 2 seconds
    setTimeout(() => {
      playerChoiceText.textContent = choiceEmoji[playerResultValue];
      cpuChoiceText.textContent = choiceEmoji[cpuResultValue];

      playerChoiceText.classList.remove("player-choice-text-anim");
      cpuChoiceText.classList.remove("cpu-choice-text-anim");

      showResultGame();
    }, 2000);

  });
});

function getCpuResultValue() 
{
  const cpuOptionChoices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * cpuOptionChoices.length);
  return cpuOptionChoices[randomIndex];
}

function showResultGame() 
{
  if (playerResultValue === cpuResultValue) 
    {
       gameTitle.textContent = "Draw!";
       scoreDrawText.textContent++;
    } 
    else if (
    (playerResultValue === "Rock" && cpuResultValue === "Scissors") 
    ||
    (playerResultValue === "Paper" && cpuResultValue === "Rock") 
    ||
    (playerResultValue === "Scissors" && cpuResultValue === "Paper")
    ) 
    {
    gameTitle.textContent = "You Won!";
    scoreWonText.textContent++;
    } 
    else 
    {
    gameTitle.textContent = "You Lost!";
    scoreLostText.textContent++          ;
    }
}
