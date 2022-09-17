// Your Code Here
let userName = window.prompt('Please enter name:')
// Add userScore
let userScore = 0
// Add playAgain
let playAgain = true

//Answer each question in the Array
function playGame (){

for (let i = 0; i < questions.length; i ++){
    let question = questions[i]
    let userAnswer = window.prompt(question.text)
    if (userAnswer === question.correctAnswer){
        userScore = userScore + 10
    }
}

window.alert('Your score is ' +userScore)
}
//add option to play again 
while (playAgain === true) {
    playGame()
    let userChoice = window.prompt ('Would you like to play again? Answer yes or no.')
    if(userChoice === 'yes' ) {
        playAgain = true
    } else {
        playAgain = false
        window.alert('Thanks for playing my Game!') 
           
    }
}

