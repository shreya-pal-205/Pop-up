let submit = document.querySelector(".submit");
let ok = document.querySelector(".ok");
let box = document.querySelector(".box")

submit.addEventListener("click",()=>{
    box.classList.add("open-popup");
})
ok.addEventListener("click",()=>{
    box.classList.remove("open-popup");
})