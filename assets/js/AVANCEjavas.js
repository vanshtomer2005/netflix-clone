alert("Hello World")

//IIFE                   //stand for --> IMMIDIATELY INVOK FUNC
/*
async function getdata(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 3000);
    })
}
(async function main(){

    let a = await getdata();
    console.log(a)
    let b = await getdata();
    console.log(b)
    let c = await getdata();
    console.log(c)
})()*/

//DESTRUCTION

let [x , y] = [10 , 20];
console.log(x , y)

let [a , b , ...rest] = [200 , 55 , 44 , 534563 ,7846 , 87]

console.log(a,b,...rest)

// IN THE CASE OBJECT

let obj = {
    cc : 44,
    dd : 29
}

let {cc,dd} = obj;
console.log(cc,dd)

//SPREAD SYNTEX

function sum(num1 , num2 , num3){
    return num1+num2+num3;
}

let arr = [10,20,30];
let result1 =  sum(arr[0],arr[1],arr[2 ])
console.log(result1)
let result2 = sum(...arr)
console.log(result2)
