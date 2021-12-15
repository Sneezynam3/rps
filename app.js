//Variable declarations
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r"); 
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//Function to generate random computer choice using number between 1-3
function getComputerChoice () {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//Function that takes choice and gives word for human readability  
function convertToWord(letter) {
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

//Function for user win with two parameters (userChoice, computerChoice). Declares local variables for use with CSS that tell user who won and what the choices were. Increases user score for win. Updates HTML to tell user they won. Finally, use CSS to add fancy green glow around user choice for a fraction of a second(300/1000). 
function win(userChoice, computerChoice) {
    const smallUserWord = "User".fontsize(3).sub();
    const smallCompWord = "Comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!🔥 `; 
    //document.getElementById(userChoice).classList.add('green-glow') 
    userChoice_div.classList.add('green-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow') }, 300);
} 

//Same explaination and logic as above execpt for a loss and red vs. green.
function lose(userChoice, computerChoice) {
    const smallUserWord = "User".fontsize(3).sub();
    const smallCompWord = "Comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lost...💩`
    userChoice_div.classList.add('red-glow');
    //ES6 using the arrow function
    setTimeout(() => {document.getElementById(userChoice).classList.remove('red-glow'), 300);  
}

//Function for a tie game. Local variables still need declared in order for HTML to give game outcome explaination. No score is incremented. Use of neutral grey instead of red/green. 
function draw(userChoice, computerChoice) {
    const smallUserWord = "User".fontsize(3).sub();
    const smallCompWord = "Comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} tied ${convertToWord(computerChoice)}${smallCompWord}. Its a draw.`
    userChoice_div.classList.add('gray-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('gray-glow') }, 300);
}



//Game logic. Converts symbol choice into win, lose, draw.
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }

}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {game("p");})
//es6 function
    scissors_div.addEventListener('click', => game("s"));

}
main();
//JavaScript reads bottom to top. Order matters. When things are not working as invisioned. Try changing the sequence. 