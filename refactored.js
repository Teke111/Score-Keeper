const player1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const player2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

// const p1Button = document.querySelector('#p1Button')
// const p2Button = document.querySelector('#p2Button')
// const p1Display = document.querySelector('#p1Display')
// const p2Display = document.querySelector('#p2Display')
const resetButton = document.querySelector('#reset')
const playToButton = document.querySelector('#playTo')

// let p1Score = 0
// let p2Score = 0
let winningScore = 3

let isGameOver = false  //ITS EQUALS TO FALSE CAUSE THE GAME IS STILL RUNNING

function updateScores(player, opponent) {
    // console.log(isGameOver)
    if (!isGameOver) {
        // console.log(isGameOver)
        player.score += 1

        if (player.score === winningScore) {
            isGameOver = true
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger')

            player.button.disabled = true
            opponent.button.disabled = true
        }
        player.display.textContent = player.score
    }
}


player1.button.addEventListener('click', function () {
    updateScores(player1, player2)
})

player2.button.addEventListener('click', function () {
    updateScores(player2, player1)
})

playToButton.addEventListener('change', function () {
    winningScore = parseInt(this.value)
    reset()
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    player1.score = 0
    player2.score = 0
    player1.display.textContent = 0
    player2.display.textContent = 0
    player1.display.classList.remove('has-text-success', 'has-text-danger')
    player2.display.classList.remove('has-text-success', 'has-text-danger')
    player1.button.disabled = false
    player2.button.disabled = false
}