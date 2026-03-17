
let arr=["rock","paper","scissors"];
let input="";
let humanScore=0;
let computerScore=0;
    
function getComputerChoice(arr){
    let random=Math.floor(Math.random()*3);
    return arr[random];
    
    
}
console.log(getComputerChoice(arr));

function getHumanChoice(){
    input=prompt("Enter your choice Rock or Paper or Scissors = ");
    return input.toLowerCase();

}
// console.log(getHumanChoice());
function playRound(humanChoice, computerChoice){

    if(humanChoice=="rock" && computerChoice=="scissors"){
        console.log(`You win ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }

    else if(humanChoice=="paper" && computerChoice=="rock"){
        console.log(`You win ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }

    else if(humanChoice=="scissors" && computerChoice=="paper"){
        console.log(`You win ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }

    else if(humanChoice==computerChoice){
        console.log(`Draw ${humanChoice} equals ${computerChoice}`);
    }

    else{
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}


function playGame(){
    playRound(getHumanChoice(),getComputerChoice(arr));
    playRound(getHumanChoice(),getComputerChoice(arr));
    playRound(getHumanChoice(),getComputerChoice(arr));
    playRound(getHumanChoice(),getComputerChoice(arr));
    playRound(getHumanChoice(),getComputerChoice(arr));
    if(humanScore>computerScore){
        console.log("You Win!");

    }
    else{
        console.log("Computer Win!");
    }
   
}
playGame();