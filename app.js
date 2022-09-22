/* loadDocument(1000); */
// Preloader
/* function loadDocument(speed) {
  const PRE_LOADER = document.getElementById("preLoader");
  // Adding event listener to preloader
  window.addEventListener('load', () => {
    setTimeout(() => {
      // making preloader disappear
      PRE_LOADER.classList.add('preloader-hidden')
      PRE_LOADER.style.transition = `${speed}ms`;
    },speed)
    setTimeout(() => {
      PRE_LOADER.style.display = "none";
    },speed * 2)
  })
} */
changeDifficultyBackground()
function changeDifficultyBackground() {
  // getting all difficulty buttons
  const buttons = document.querySelectorAll('.difficultyLevel__button');
  // getting Main element (for changing background)
  const main = document.querySelector('main');
  // Change background event
  changeBackground = function (e) {
    console.log(e.type);
    // Easy button hover
    if (e.target.classList.contains("button-easy")) {
      main.classList.add("background-easy")
    }
    // Normal button hover
    else if (e.target.classList.contains("button-normal")) {
      main.classList.add("background-normal")
    }
    // Hard button hover
    else if (e.target.classList.contains("button-hard")) {
      main.classList.add("background-hard")
    }
    // Impossible button hover
    else if (e.target.classList.contains("button-impossible")) {
      main.classList.add("background-impossible")
    }
    if (e.type === 'click') {
      for (button of buttons) {
        // Makes background remains the same color when difficulty level is chosen
        button.removeEventListener('mouseleave', removeClasses);
      }
    }
  }
  // iterating through buttons
  for (button of buttons) {
    button.addEventListener('mouseleave', removeClasses)
    // Checking what button user hovered on
    button.addEventListener('mouseover', changeBackground)
    button.addEventListener('click',
      changeBackground)
    
  }
  function removeClasses() {
    main.classList.remove("background-easy")
    main.classList.remove("background-normal")
    main.classList.remove("background-hard")
    main.classList.remove("background-impossible")
  }
}
function playNormal()
{
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
}

