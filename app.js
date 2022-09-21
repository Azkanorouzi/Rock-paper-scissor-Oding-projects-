
  const ROCK_PAPER_SCISSOR = ['✂️', '📃', '🪨']
  /* Store user and computer score */
  let computerScore = 0;
  let userScore = 0;
  /* Getting the user choice */
  function getPlayerChoice() {
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
    let computerChoice = ROCK_PAPER_SCISSOR[RANDOM_NUMBER];
    alert(`computer chose -> ${computerChoice}`);
    return computerChoice;
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
  /*updatesTheScore given the round winner*/
  function updateScores(roundWinner) {
    if (roundWinner === 'c') {
      computerScore++;
    } else if (roundWinner === 'u') {
      userScore++;
    }
    alert(`🧒: ${userScore}       VS       💻: ${computerScore} `)
  }
  function playGame() {
    let roundWinner;
    /* This while loop iterates until user or computer score is greater */
    while ((computerScore - userScore) < 3 && (computerScore - userScore) > -3) {
      if (computerScore === 5 || userScore === 5) {
        break;
      }
      // Getting the round winner.
      roundWinner = playRound(getPlayerChoice(), getComputerChoice())
      // Updating scores
      updateScores(roundWinner)
    }
    // Getting the winner
    getWinner();
  }

  function getWinner() {
    if (userScore > computerScore) {
      alert('🧒 WON! ⭐✨🎊🎉');
    } else if (userScore < computerScore) {
      alert('💻 WON! 💔 maybe next time ....')
    } else {
      alert('something went wrong ....')
    }
  }
  playGame()
