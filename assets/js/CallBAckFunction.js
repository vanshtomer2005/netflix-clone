console.log("Hello World")                               
console.log("Hello World 2")

/*setTimeout(() => {                               //assynchrous function
   console.log("function") 
}, 2000);

console.log("the world")

const fun1 = ( )  => {
  console.log("function run")

  
}

const callback = (arg , fun1) => {
  console.log(arg)
  fun1()
}


const loadScript = (src , callback) => {
 let script =  document.createElement("script")
script = src
script.onload = callback("Harry Bhai",fun1 )
document.head.append("script")
}

loadScript("https://www.google.com" , callback)*/

alert( ``);

let prom = new Promise((resolve, reject) => {
    let arandom = Math.random();
    if(arandom<0.5){
        console.log("worked resolved")
        resolve("done")

    }
    else{
        reject("no it is smaller")
    }
})

prom.then((a) => {
    console.log(a) 
}).catch((err)=>{
    console.log(err)
})




