// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true


// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
let player1Name = "Player 1"
let player2Name = "Player 2"

 function editNames() {
        player1Name = prompt("Change Player1 name");
        player2Name = prompt("Change player2 name");
  
        document.getElementById("player1Name").innerHTML = player1Name;
        document.getElementById("player2Name").innerHTML = player2Name;
}

 function restBtnAppear () {
     rollBtn.style.display = "none"
     resetBtn.style.display = "block"
 }
 
//editNames()
/* Hook up a click event listener to the Roll Dice Button. */
 rollBtn.addEventListener("click", function() {
     const randomNumber = Math.floor(Math.random() * 6) + 1

        if (player1Turn) {
         player1Score += randomNumber
         player1Scoreboard.textContent = player1Score
         player1Dice.innerHTML = randomNumber
         player1Dice.classList.remove("active")
         player2Dice.classList.add("active")
         message.textContent = `${player2Name}'s Turn`
     } else {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.innerHTML = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = `${player1Name}'s Turn`
     }
     player1Turn = !player1Turn
     
     if (player1Score >= 20){
       message.textContent = "Player 1 has won 🥳"
       restBtnAppear()
    }else if(player2Score >= 20){
       message.textContent = "Player 2 has won 🎉"
       restBtnAppear()
    }else{
        return;
    }
    
    
 })
 
  resetBtn.addEventListener("click", reset)
 
 function reset(){
    message.textContent = "Player 1 Turn"
    player1Score = 0
    player2Score = 0
    player1Turn = true
    player1Scoreboard.textContent = player1Score
    player2Scoreboard.textContent = player2Score
    player1Dice.textContent = `-`
    player2Dice.textContent = `-`
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
 }