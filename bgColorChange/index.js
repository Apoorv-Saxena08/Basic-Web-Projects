console.log("Working");
const btn = document.getElementById("btn");
const back = document.getElementById("back");
const body = document.getElementById("body");
btn.addEventListener("click" , function(){
    console.log("Button clicked");
    btn.innerHTML="Button Clicked";
    btn.style.color="white";
    btn.style.backgroundColor = "red";
    body.style.backgroundColor = "yellow";
})

back.addEventListener("click" , function(){
    btn.innerHTML = "Change Color";
    btn.style.color ="black";
    btn.style.backgroundColor = "";
    body.style.backgroundColor = "";
})

