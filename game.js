let rock = document.querySelector("#rock")
let paper = document.querySelector("#paper")
let scissors = document.querySelector("#scissors")
let mssg = document.querySelector("h2")
const userScore = document.querySelector("#userScore")
const compScore = document.querySelector("#compScore")
let userPoints = 0
let compPoints = 0

rock.onclick = () => {
    let userChoice = "rock"
    let compChoice = game();

    if(userChoice === compChoice){
        mssg.innerText = "It's Draw ! Computer choose Rock"
        mssg.style.backgroundColor = "#6c5ce7"
    }
    else if(compChoice === "paper") {
        mssg.innerText = "Sorry, You Lose ! Computer choose Paper"
        mssg.style.backgroundColor = "#dc3545"
        compPoints++
        compScore.innerText = compPoints
    } else {
        mssg.innerText = "Hurray, You Win ! Computer choose Scissors"
        mssg.style.backgroundColor = "#28a745"
        userPoints++
        userScore.innerText = userPoints
    }
}

paper.onclick = () => {
    let userChoice = "paper"
    let compChoice = game();

    if(userChoice === compChoice){
        mssg.innerText = "It's Draw ! Computer choose Paper"
        mssg.style.backgroundColor = "#6c5ce7"
    }
    else if(compChoice === "scissors") {
        mssg.innerText = "Sorry, You Lose ! Computer choose Scissors"
        mssg.style.backgroundColor = "#dc3545"
        compPoints++
        compScore.innerText = compPoints
    } else {
        mssg.innerText = "Hurray, You Win ! Computer choose Rock"
        mssg.style.backgroundColor = "#28a745"
        userPoints++
        userScore.innerText = userPoints
    }
}

scissors.onclick = () => {
    let userChoice = "scissors"
    let compChoice = game();

    if(userChoice === compChoice){
        mssg.innerText = "It's Draw ! Computer choose Scissors"
        mssg.style.backgroundColor = "#6c5ce7"
    }
    else if(compChoice === "rock") {
        mssg.innerText = "Sorry, You Lose ! Computer choose Rock"
        mssg.style.backgroundColor = "#dc3545"
        compPoints++
        compScore.innerText = compPoints
    } else {
        mssg.innerText = "Hurray, You Win ! Computer choose Paper"
        mssg.style.backgroundColor = "#28a745"
        userPoints++
        userScore.innerText = userPoints
    }
}

function game() {
    let arr = ["rock","paper","scissors"]
    let idx = Math.floor(Math.random()*3)
    return arr[idx]
}


// reset button

let btn = document.querySelector("#btn")

btn.onclick = () => {
    window.location.reload()
}


