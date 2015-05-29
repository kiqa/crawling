var userChoice= prompt("Do you choose rock, paper or scissors?");
var computerChoice= Math.random(); 
   

if(computerChoice <= 0.33) {
   computerChoice = "rock";
}else if (computerChoice >= 0.34 && computerChoice <= 0.66) {
    computerChoice ="paper";
}else{
    computerChoice ="scissors";
}
    
if(userChoice === computerChoice){
    console.log("no one won")
}
else if(userChoice=== "rock" && computerChoice=== "paper" ){
    console.log("The computer won");
}
else if(userChoice=== "paper" && computerChoice=== "rock" ){
    console.log("The user won");
}
else if(userChoice=== "scissors" && computerChoice=== "paper" ){
    console.log("The user won");
}
else if(userChoice=== "paper" && computerChoice=== "scissors" ){
    console.log("The computer won");
}
else if(userChoice=== "rock" && computerChoice=== "scissors" ){
    console.log("The user won");
}
else if(userChoice=== "scissors" && computerChoice=== "rock" ){
    console.log("The computer won");
}
else{
    console.log("there is a bug, sorry!")
}