
const container = document.querySelector(".container")

for (let i = 1; i <= 274; i++) {
    const square = document.createElement("div")
    container.appendChild(square)
    square.className = "square"
    square.addEventListener("mouseenter", function() {
        square.style.backgroundColor = "blue"
    })
}
function hover() {
    square.style.backgroundColor = "black"
    container.textContent = "check"
}
