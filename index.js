let body = document.querySelector("body")
let btn = document.querySelector(".btn")
let btn1 = document.querySelector(".btn1")

let intervalId;

btn.addEventListener("click", () => {
    intervalId = setInterval(() => {
        let red = Math.floor(Math.random() * 256)
        let green = Math.floor(Math.random() * 256)
        let blue = Math.floor(Math.random() * 256)
        let rgb = `rgb(${red},${green},${blue})`
        body.style.backgroundColor = rgb
    }, 1000)

})
btn1.addEventListener("click", () => {
    clearInterval(intervalId)
})
