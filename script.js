// Get elements
const playerText = document.getElementById('playerText');
const resultText = document.getElementById('resultText');
const computerText = document.getElementById('computerText');
const rockBtn = document.querySelector('.choiceBtn:nth-child(1)');
const paperBtn = document.querySelector('.choiceBtn:nth-child(2)');
const scissorsBtn = document.querySelector('.choiceBtn:nth-child(3)');

// Add event listeners to buttons
rockBtn.addEventListener('click', () => playRound('rock'));
paperBtn.addEventListener('click', () => playRound('paper'));
scissorsBtn.addEventListener('click', () => playRound('scissors'));

// Function to generate computer's choice
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to play a round
function playRound(playerSelection) {
    const computerSelection = computerPlay();

    // Update displayed choices
    playerText.textContent = `Player: ${playerSelection}`;
    computerText.textContent = `Computer: ${computerSelection}`;

    // Determine the winner
    if (playerSelection === computerSelection) {
        resultText.textContent = 'It\'s a tie!';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        resultText.textContent = 'You win!';
    } else {
        resultText.textContent = 'You lose!';
    }
}