const container = document.querySelector(".container")
function squares(num) {
    let dimension = (512 / num) - 2
    let k = 0
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
            square.style.backgroundColor = "blue"
        })
    }
}
squares(16)

const buttons = document.querySelector(".buttons")
const size = document.createElement("button")
size.textContent = "Resize Grid"
buttons.appendChild(size)

size.addEventListener("click", function() {
  /* while(true) { */
        let val =  prompt("Enter your preferred grid size (10-100)")
        val = parseInt(val)
       /* if (val >= 10 && val <= 100 && !isNaN(val)) {
            break
        } 
    } */
    squares(val)
})
