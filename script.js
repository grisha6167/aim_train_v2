const startBtn = document.querySelector("#start")
const screens = document.querySelectorAll(".screen")
const timeList = document.querySelector(".time-list")
const height = document.querySelector(".screen").length
const board = document.querySelector('#board')
const timeElement = document.querySelector('#time')
console.log(timeElement)

let score = 0
let score2 = 0

const colors = [
    "#2b2b2b",
    "#707070",
    "#b8b8b8",
    "#e5e5e5"
]


let time = 0

startBtn.addEventListener("click", (event) => {
    event.preventDefault()
    screens[0].classList.add("up")
})

timeList.addEventListener("click", (event) => {
    if (event.target.classList.contains("time-btn")) {
        time = parseInt(event.target.getAttribute("data-time"))
        screens[1].classList.add("up")
        startGame()
    }
})

board.addEventListener("click", (event) =>{
    if(event.target.classList.contains('circle')){
        score++
        event.target.remove()
        createCircle()
    }
    else{
        score2++
        circle.remove()
        createCircle()
    }
    
})

function startGame() {
    setInterval(decreaseTime, 1000)
    createCircle()
    setTime(time)
}

function decreaseTime() {
    if (time === 0) {
        finishGame()
    }
    else {
        --time
        setTime(time)
        console.log(time)
    }
}
function setTime(value) {
    if (value < 10) {
        timeElement.innerHTML = `00:0${value}`
    }
    else {
        timeElement.innerHTML = `00:${value}`
    }
}

function randomColor() {
    let colorRan = Math.floor(Math.random() * colors.length)
    return colors[colorRan]
}

function createCircle() {
    const circle = document.createElement('div')
    const size = getRandomNumber(10, 60)
    const { width, height } = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)

    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.background = randomColor()
    circle.style.left = `${x}px`
    circle.style.top = `${y}px`
    board.append(circle)
}
function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}


function finishGame() {
    timeElement.parentElement.style.opacity = 0
    board.innerHTML = `<h1>ваш счёт:<span class="primary">${score}</span></h1> `
}