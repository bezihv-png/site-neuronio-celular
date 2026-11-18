const openbtn = document.getElementById("abrir");
const closebtn = document.getElementById("fechar");

const openbtn2 = document.getElementById("abrir2");
const closebtn2 = document.getElementById("fechar2");

const openbtn3 = document.getElementById("abrir3");
const closebtn3 = document.getElementById("fechar3");

const openbtn4 = document.getElementById("abrir4");
const closebtn4 = document.getElementById("fechar4");

const openbtn5 = document.getElementById("abrir5");
const closebtn5 = document.getElementById("fechar5");

const popup = document.getElementById("popup");

const popup2 = document.getElementById("popup2");

const popup3 = document.getElementById("popup3");

const popup4 = document.getElementById("popup4");

const popup5 = document.getElementById("popup5");

openbtn.addEventListener("click", () => {
    popup.classList.add("open")
})

closebtn.addEventListener("click", () => {
    popup.classList.remove("open")
})

openbtn2.addEventListener("click", () => {
    popup2.classList.add("open")
})

closebtn2.addEventListener("click", () => {
    popup2.classList.remove("open")
})

openbtn3.addEventListener("click", () => {
    popup3.classList.add("open")
})

closebtn3.addEventListener("click", () => {
    popup3.classList.remove("open")
})

openbtn4.addEventListener("click", () => {
    popup4.classList.add("open")
})

closebtn4.addEventListener("click", () => {
    popup4.classList.remove("open")
})

openbtn5.addEventListener("click", () => {
    popup5.classList.add("open")
})

closebtn5.addEventListener("click", () => {
    popup5.classList.remove("open")
})