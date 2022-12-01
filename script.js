let muxa = document.querySelector(".muxa")
let p = document.querySelector("p")
let save = localStorage.getItem("muxa")
let a = 0;
if (save == 0) {
    a = 0;
    p.textContent = 0
}
else {
    p.textContent = save
}
let s = 2000;
const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);



muxa.addEventListener("click" , function(e) {
    e.preventDefault()
    a++
    s++;
    p.textContent = a;
    clearInterval()
    
        square.style.left= getRandom(0, 1440 - 200)+'px';
        square.style.top = getRandom(0, 1440 - 200)+'px';
        localStorage.setItem("muxa", a)
     

})
const square= document.querySelector('.muxa');

