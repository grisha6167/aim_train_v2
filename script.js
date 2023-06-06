const startBtn = document.querySelector("#start")
const screens = document.querySelectorAll(".screen")
const timeList = document.querySelector(".time-list")
const height = document.querySelector(".screen").length
const board = document.querySelector('.board')
const timeElement = document.querySelector('#time')
console.log(timeElement)

const colors = [
    "#2b2b2b",
    "#707070",
    "#b8b8b8",
    "#e5e5e5"
]


let time = 0

startBtn.addEventListener("click", (event)=>{
 event.preventDefault()
 screens[0].classList.add("up")
})

timeList.addEventListener("click", (event)=>{
    if(event.target.classList.contains("time-btn")){
        time = parseInt(event.target.getAttribute("data-time"))
        screens[1].classList.add("up")
        startGame()
    }
   })

   function startGame(){
     setInterval(decreaseTime,1000)
   } 

   function decreaseTime(){
    if(time === 0){
    console.log("стоп")
    }
    else{
        --time
        setTime(time)
        console.log(time)
    }
   }
   function setTime(value){
    timeElement.innerHTML = `00:${value}`
   }

   function randomColor(){
    let colorRan = Math.floor(Math.random() * colors.length)
    return colors[colorRan]
   }
