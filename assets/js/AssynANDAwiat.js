alert("hello world")
/*
async function getdata() {
  return new Promise((resolve, reject) => {   
      setTimeout(() => {
          resolve(445)
      
      }, 3000);
  })
}*/
    
async function getdata(){
   let x = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
   let data = await x.text()
   return data
}


async function main(){
    console.log("starting the program")
    console.log("starting")
    console.log("getting the data")
    console.log("processing")
    let data = await getdata()
    console.log(data)
    console.log("end of the program")

}

main()
/*
getdata().then((e) => {
    console.log(e)
                              FIRST method of getting wait for the program 
    console.log("end of the program")
 })*/

