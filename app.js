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
'use strict';
// getting all difficulty buttons
const difficultyButtons = document.querySelectorAll('.difficultyLevel__button');
// getting Main element (for changing background)
const main = document.querySelector('main');
// getting difficulty__level container to make it disappear when a button is clicked
const difficultyLevelContainer = document.querySelector('.difficultyLevel__container')
// game container
const gameContainer = document.querySelector('.game-container')
// Buttons
const playerButtons = document.querySelectorAll('.player-button')

chooseDifficulty();
playGame();
/* ======================================== */
/* ==========choose difficulty function==========*/
/* ======================================== */
function chooseDifficulty() {
  // Change background event
  let changeBackground = function (e) {
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
      for (let button of difficultyButtons) {
        // Makes background remains the same color when difficulty level is chosen
        button.removeEventListener('mouseleave', removeClasses);
        // Makes background remains the same color when difficulty level is chosen
        button.removeEventListener('mouseover', changeBackground);
        // making difficulty__level page disappear
        difficultyLevelContainer.classList.add('difficulty__level--disappear')
        // setting display on none 
        setTimeout(() => {
          difficultyLevelContainer.style.display = 'none';
        },500)
        
      }
    }
  }
  // iterating through buttons
  for (let button of difficultyButtons) {
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
/* ======================================== */
/* ==========choose difficulty end==========*/
/* ======================================== */
/* ======================================== */
/* ========== Play game function    ==========*/
/* ======================================== */

function playGame() {
  // player img (rock paper or scissor)
  const playerChoiceImg = document.querySelector('.player-choice-img');
  // player choice
  let playerChoice;
  // Computer img (rock paper or scissor)
  const computerChoiceImg = document.querySelector('.computer-choice-img');
  // scores
  let computerScore = 0;
  let computerScoreEl = document.querySelector('.computer-score');
  let playerScore = 0;
  let playerScoreEl = document.querySelector('.player-score');
  // computer choice random number
  let computerChoice ;
  // use chance
  let playerChance;
  // rock paper Scissor
  const ROCK_PAPER_SCISSOR = ['rock', 'paper', 'scissor']
  // computer choice
  for (let button of difficultyButtons) {
    button.addEventListener('click', (e) => {
      // Rendering the game right away when a button is clicked
      renderGame()
      if (button.classList.contains("button-easy")) {
        playerChance = 0;
      }
      else if (button.classList.contains("button-normal")) {
        playGameNormal();
        
      } 
      else if (button.classList.contains('button-hard')) {
        playGameHard();
      }
      else if (button.classList.contains('button-impossible')) {
        playGameImpossible();
      }
    })
  }
  // Renders the game and change the playerChoiceImg when user choose a button
  function renderGame() {
    gameContainer.style.animation = "appear-game-container 1s forwards";
    // setting computer and user choice
    playerButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        playerChoice = btn.dataset.button;
        applyPlayerChoice(playerChoice)
        computerChoice = getComputerChoice(playerChance);
        compareChoices(playerChance)
        applyComputerChoice(computerChoice)
      }) 
    })
  }
  function applyPlayerChoice(choice) {
    playerChoiceImg.src = `assets/${choice}.png`
  }
  function applyComputerChoice(choice) {
    computerChoiceImg.src = `assets/${choice}.png`
  }
  function compareChoices() {
    let roundWinner = '';
    /* Comparing playerSelection and computerSelection */
    switch (playerChoice) {
      // When user selects scissor
      case 'scissor':
        if (computerChoice === 'rock') {
          roundWinner = 'c';
        }
        else if (computerChoice === 'paper') {
          roundWinner = 'u';
        }
        break;
      // When user selects paper
      case 'paper':
        if (computerChoice === 'scissor') {
          roundWinner = 'c';
        }
        else if (computerChoice === 'rock') {
          roundWinner = 'u';
        }
        break;
      // When user selects rock
      case 'rock':
        if (computerChoice === 'paper') {
          roundWinner = 'c';
        }
        else if (computerChoice === 'scissor') {
          roundWinner = 'u';
        }
        break;
    }
    updateScores(roundWinner);
    return roundWinner;
  }
  function updateScores(roundWinner) {
    if (roundWinner === 'c') {
      computerScore++;
    } else if (roundWinner === 'u') {
      playerScore++;
    }
    computerScoreEl.textContent = computerScore;
    playerScoreEl.textContent = playerScore; 
  }
  /* This function always make computer win */
  function makeComputerWin() {
    switch (playerChoice) {
      case 'paper':
        return 2;
      case 'rock':
        return 1;
      case 'scissor':
        return 0;
    }
  }
  /* this function always make player win */
  function makePlayerWin() {
    switch (playerChoice) {
      case 'paper':
        return 0;
      case 'rock':
        return 2;
      case 'scissor':
        return 1;
    }
  }
  function getComputerChoice(playerChance) {
    // Generates a number between 0 and 2 (ROCK_PAPER_SCISSOR is zero base)
    const RANDOM_NUMBER = Math.floor(Math.random() * 3)
    // Returning the result
    computerChoice = ROCK_PAPER_SCISSOR[RANDOM_NUMBER];
    /* Making player win */
    if (playerChance === 1) computerChoice = ROCK_PAPER_SCISSOR[makePlayerWin()];
    /* making player win */
    else if (playerChance === 0) computerChoice = ROCK_PAPER_SCISSOR[makeComputerWin()];
    return computerChoice;
  }
} 

/* ======================================== */
/* ========== Play game function end ==========*/
/* ======================================== */


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

