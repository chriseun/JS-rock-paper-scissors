let userSelection = prompt("rock, paper or scissors?"); //Gets the users selection
let computerSelection = Math.floor(Math.random()*3) + 1; //Randomly generate a number

//Conditional logic goes here to determine the computers selection

//<--Code goes here-->
if (computerSelection == 1){
  console.log('Computer used rock');
}
else if (computerSelection == 2){
  console.log('Computer used scissors');
}
else {
  console.log('Computer used paper');
}
//Function to compare the userSelection and the computerSelection to determine the winner
let compare=function(selection1,selection2){
  // if (selection1 === selection2){
  //   console.log('It\'s a tie')
  // }
  if (selection1 === 'rock'){
    if (selection2 === 1){
      return 'It is a tie. Both Rocks'
    }
    else if (selection2 === 2){
      return 'Rock wins. You won'
    }
    else{
      return 'paper wins. You lost'
    }
  }

  if (selection1 === 'scissors'){
    if (selection2 === 1){
      return 'Rock wins. You lost'
    }
    else if (selection2 === 2){
      return 'It is a tie. Both scissors'
    }
    else {
      return 'Paper Wins. You lost'
    }
  }

  if (selection1 === 'paper'){
    if (selection2 === 1){
      return 'Paper Wins. You won.'
    }
    else if (selection2 === 2){
      return 'Scissors won. You Lost.'
    }
    else {
      return 'It is a tie. Both paper'
    }
  }


    else {
      return 'Please input a valid option.';
      return userSelection;
    }
}
console.log(compare(userSelection,computerSelection)); //call the function to compare and display result
// console.log(computerSelection)
