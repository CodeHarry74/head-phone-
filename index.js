let display = document.querySelector(".count")
let minusBtn = document.querySelector(".minus-btn")
let plusBtn = document.querySelector(".plus-btn")
let changeBy = document.querySelector(".changeBy")
let resetBtn = document.querySelector(".reset-btn")

minusBtn.addEventListener("click", () => {
    let count = parseInt(display.innerText)
    let changeByValue = parseInt(changeBy.value)
    display.innerText = count - 799

})

plusBtn.addEventListener("click", () => {
    let count = parseInt(display.innerText)
    let changeByValue = parseInt(changeBy.value)
    display.innerText = count + 799
})

resetBtn.addEventListener("click", () => {
    display.innerText = 799
})