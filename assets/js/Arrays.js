alert("Hello World")
console.log("Todays topic is array")

let arr=[10,20,30,40,50]
console.log(arr)
console.log(arr.length)
/*arr[0]=5666
for (let index = 0; index < 5; index++) {
    console.log(arr[index])
}
console.log(typeof arr)
*//

console.log(arr.toString())
console.log(arr.join(" and "))
let d=[1,2,3,4,50]
console.log(d.pop())
console.log(d.push(3))
console.log(d.push("Harry"))
console.log(d.shift())
console.log(d.unshift("unshift"))
console.log(d)
delete d[2]
console.log(d)
console.log(d.length)

let arr1=[10,20,30,40]
let arr2=[50,60,70,80]
let arr3=[100]
console.log(arr3.concat(arr1,arr2)) //it does not change the existing array

let sort=[3,2,5,2,1,42,2,4]
console.log(sort.sort())
console.log(sort.splice(0,4,444,333))
console.log(sort)
console.log(sort.slice(2,5))
console.log(sort)

let array={
  "name": "harry",
  "rollnumber": 333,
  "subject": "engliish"
}
for (const key in array) {
    if (array.hasOwnProperty.call(array, key)) {
        const element = array[key];
        console.log(element,key)
    }
}

for (const iterator of d) {
    console.log(iterator)
}

let a11=[10,20,30,40]

let newarray = a11.map((e)=>{
    return e**2
})
console.log(newarray)


