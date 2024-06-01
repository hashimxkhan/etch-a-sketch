const container = document.querySelector(".container")
hovColor = "blue"
let val = 16
function squares(num, hovColor) {
    let dimension = (550 / num) - 2
    for (let i = 1; i <= (num ** 2 + num + 1); i++) {
        const square = document.createElement("div")
        container.appendChild(square)
        if ((i + 1) % num === num - 1) {
            square.className = "special"
        } else {
            square.className = "square"
            square.style.height = dimension + "px"
            square.style.width = dimension + "px"
        }
        container.appendChild(square) 
        square.addEventListener("mouseenter", function() {
            square.style.backgroundColor = hovColor
        })
    }
}
squares(val, hovColor) 

const buttons = document.querySelector(".buttons")
const size = document.createElement("button")
size.textContent = "Resize Grid"
buttons.appendChild(size)
const rgb = document.createElement("button")
rgb.className = "btn"
rgb.textContent = "RGB Generator"
buttons.appendChild(rgb)
size.className = "btn"

size.addEventListener("click", function() { 
     val =  prompt("Enter your preferred grid size (10-100)")
     val = parseInt(val)
     container.innerHTML = ''
     squares(val, hovColor)
})

rgb.addEventListener("click", function() {
    container.innerHTML = ''
    rgbSquares(val)
})

function randomColor() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")"
}

function rgbSquares(num) {
    let dimension = (550 / num) - 2 
    for (let i = 1; i <= (num ** 2 + num + 1); i++) {
        const square = document.createElement("div")
        container.appendChild(square)
        if ((i + 1) % num === num - 1) {
            square.className = "special"
        } else {
            square.className = "square"
            square.style.height = dimension + "px"
            square.style.width = dimension + "px"
        }
        container.appendChild(square) 
        square.addEventListener("mouseenter", function() {
            square.style.backgroundColor = randomColor()
        })
    }
}