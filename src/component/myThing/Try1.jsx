

const myBox = document.getElementById("myBox")



const moveBox = document.getElementById("myBox")
const moveAmount = 50
let x = 0
let y = 0



document.addEventListener("keydown", e => {
    myBox.textContent = "^.^"
    myBox.style.backgroundColor = "red"
})

document.addEventListener("keyup", e => {
    myBox.textContent = "^-^"
    myBox.style.backgroundColor = "blue"
})

document.addEventListener("keydown", event => {
    if (event.key.startsWith("Arrow")) {
        switch (event.key) {
            case "ArrowUp":
                y -= moveAmount
                break
            case "ArrowDown":
                y += moveAmount
                break
            case "ArrowRight":
                x += moveAmount
                break
            case "ArrowLeft":
                x -= moveAmount
                break
        }
        myBox.style.top = `${y}px`
        myBox.style.left = `${x}px`
    }
})