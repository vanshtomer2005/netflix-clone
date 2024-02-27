alert("Hello World")
/*
let button = document.getElementById("btn")
button.addEventListener("pointerover", ()=>{
    document.querySelector(".box").style.backgroundColor = "red"
})*/


/*Event BuBBling*/
 document.querySelector(".child").addEventListener("click" , (e)=>{
    e.stopPropagation()
    alert("child was clicked")
})
document.querySelector(".childcontainer").addEventListener("click" , (e)=>{
e.stopPropagation()
    alert("childcontainer was clicked")
})
document.querySelector(".container").addEventListener("click" , (e)=>{
    e.stopPropagation
    alert("container was clicked")
})

setInterval(() => {
    document.querySelector(".container").style.bacgroundkColor = "red"
}, 2000);
setTimeout(() => {
    document.querySelector(".childcontainer").style.backgroundColor = "red"
}, 6000);

