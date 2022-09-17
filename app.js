const ROCK_PAPER_SCISSOR = ['✂️', '📃', '🪨']

/* Computer choice */
function getComputerChoice() {
  // Generates a number between 0 and 2 (ROCK_PAPER_SCISSOR is zero base)
  const RANDOM_NUMBER = Math.floor(Math.random() * 3)
  // Returning the result
  return ROCK_PAPER_SCISSOR[RANDOM_NUMBER]
}
