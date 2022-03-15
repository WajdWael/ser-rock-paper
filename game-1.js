/* ==== START ROCK SCISSORS PAPER GAME ====*/
// START WITH VARIABLES
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelectorAll('.score-board');
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const sicssors_div = document.getElementById('s');


function getComputerChoice() {
    const chioces = ['r', 'p', 's']
    const randomNumber = Math.floor(Math.random() * 3)
    return chioces[randomNumber]
}

// FIXING THE LETTERS OF VARS
function convertToWord(letter) {
    if (letter === 'r') return "Rock";
    if (letter === 'p') return "Paper";
    return "Scissers";
}

// THE FIRST FUNCTION IF USER WIN
function win(user, computer) {
    // GET SOME IMPORTAINT VARS
    const smallWord = 'User'.fontsize(3).sup();
    const smallComp = 'Comp'.fontsize(3).sup();
    const user_div = document.getElementById(user);
    // INCREASE USER SCORE
    userScore++;
    // CHANGE THE MESSAGES AND APPER IT ON THE SCREEN
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    // CHANGE THE MAIN PARGARAPH AND APPER IT ON THE SCREEN
    result_div.innerHTML = `${convertToWord(user)}${smallWord} Beats  ${convertToWord(computer)}${smallComp}. You Win!`;
    // ADDVENCED EFFECT 
    /* AT WIN STATMENT THE BORDER OF THE PICUTER CHANGE TO THE GREAN COLOR */ 
    user_div.classList.add('green-glow')
    setTimeout( () =>
        user_div.classList.remove('green-glow'), 3000)
}

// THE SECOND FUNCTION IF USER LOSE
function lose(user, computer) {
    // START GRAP THE VARS
    const user_div = document.getElementById(user);
    const smallWord = 'User'.fontsize(3).sup();
    const smallComp = 'Comp'.fontsize(3).sup();
    // INCREASE THE COMPUTER SCORE
    computerScore++;
    // CHANGE THE MESSGES AND APPER IT ON THE SCREEN
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    // CHANGE THE MAIN PARGRAPH AND APPER IT ON THE SCREEN
    result_div.innerHTML = `${convertToWord(user)}${smallWord} Loses ${convertToWord(computer)}${smallComp}. You Lost.`;
    user_div.classList.add('red-glow')
    /* WHEN USER LOSE CHANGE THE GREEN COLOR TO A RED COLOR */
    setTimeout( () =>
        user_div.classList.remove('red-glow') , 3000)
}

// THE LAST FUNCTION IF IT DRAW
function draw(user, computer) {
    // GRAP THE MAIN VARS
    const user_div = document.getElementById(user);
    const smallWord = 'User'.fontsize(3).sup(); 
    const smallComp = 'Comp'.fontsize(3).sup();
    // FOR SHOW THE MAIN PARGARAPH AND CHANGE THE CONTENT
    result_div.innerHTML = `${convertToWord(user)} ${smallWord} ${convertToWord(computer)} ${smallComp}. It's a draw.`;
    // CHANGE THE LOSE COLOR TO A GRAY DRAW COLOR
    user_div.classList.add('gray-glow')
    setTimeout(() => 
        user_div.classList.remove('gray-glow') , 3000)
}

// THE CHOICES OF THE GAME
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice);
            break;
    }
}
// CREATE A FUNCTION 
function main() {
// ADD EVENT LISTENER
rock_div.addEventListener('click', () => game('r'))
paper_div.addEventListener('click', () => game('p'))
sicssors_div.addEventListener('click', () => game('s'))
}
// CALL THE MAIN FUNCTION
main()
/* ==== END ROCK SCISSORS PAPER GAME ====*/
