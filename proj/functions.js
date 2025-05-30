const getUserChoice = (userInput) =>{
userInput = userInput.toLowerCase();

if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb"){
    return userInput;
}
else{
    return "Error";
}

} 


function getComputerChoice (){
let random = Math.floor(Math.random()*3);

if(random === 0){
    return "rock";
}
else if(random === 1){
    return "paper";
}
else if(random === 2){
    return "scissors";
}

}

const determineWinner = (userChoice, computerChoice) =>{

if (userChoice === "bomb"){
    return "User wins by using cheat!"
}

if(userChoice === computerChoice){
    return "The game was a tie!"
}

switch (userChoice){
    case "rock":
return computerChoice === "paper" ? "Computer won" : "User won";
case "paper":
    return computerChoice === "scissors" ? "Computer won" : "User won";
    case "scissors":
        return computerChoice === "rock" ? "Computer won" : "User won";
}



}

const playGame = () =>{
    let userChoice = getUserChoice("rock");
    let computerChoice = getComputerChoice();
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();