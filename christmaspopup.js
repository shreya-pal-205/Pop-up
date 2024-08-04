let click = document.querySelector(".click-me");
let ho= document.querySelector(".ho");
let box = document.querySelector(".box");

click.addEventListener("click",()=>{
    box.classList.add("open-popup");
    document.body.style.background = "rgb(164, 9, 9)";
})

ho.addEventListener("click",()=>{
    box.classList.remove("open-popup");
    document.body.style.background = "rgb(14, 111, 32)";
})