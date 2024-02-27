alert("hello world")

let a= prompt("Enter the number1")
let b= prompt("Enter the number2")
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("soryy the input is wrong")
}
let sum = parseInt(a) + parseInt(b)

function getdata(){

    try {   
        console.log("the sum is ", sum*x )
        return true;
    } catch (error) {
        console.log("error a gaya bhai")
        return false;
    }
    finally{
        console.log("the file are closed and the resources are encoundtered by the system")
    }
}

let data = getdata();
console.log(data)
