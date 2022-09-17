const ROCK_PAPER_SCISSOR = ['✂️', '📃', '🪨']
/* Store user and computer score */
let computerScore = 0;
let userScore = 0;
/* Getting the user choice */
function getUserChoice() {
  /* Store user's selection */
  let playerSelection;
  /* This loop will continue until user choose rock scissor or paper*/
  do {
    playerSelection = prompt('Choose one -> ✂️ 📃 🪨')
  } while (playerSelection !== '✂️' && playerSelection !== '📃' && playerSelection !== '🪨')
  /* Returning the user's selection */
  return playerSelection;
}
/* Computer choice */
function getComputerChoice() {
  // Generates a number between 0 and 2 (ROCK_PAPER_SCISSOR is zero base)
  const RANDOM_NUMBER = Math.floor(Math.random() * 3)
  // Returning the result
  return ROCK_PAPER_SCISSOR[RANDOM_NUMBER]
}
/* if user won returns u if computer c if draw returns d  */
function playRound(playerSelection, computerSelection) {
  let roundWinner = 'd';
  /* Comparing playerSelection and computerSelection */
  switch (playerSelection) {
    // When user selects scissor
    case '✂️':
      if (computerSelection === '🪨') roundWinner = 'c';
      else if (computerSelection === '📃') roundWinner = 'u';
      break;
    // When user selects paper
    case '📃':
      if (computerSelection === '✂️') roundWinner = 'c';
      else if (computerSelection === '🪨') roundWinner = 'u';
      break;
    // When user selects rock
    case '🪨':
      if (computerSelection === '📃') roundWinner = 'c';
      else if (computerSelection === '✂️') roundWinner = 'u';
      break;
  }
  return roundWinner;
}
