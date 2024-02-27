alert("hello World")
/*
let animal = {
    tiger : "four legs",
    vangaru : "two hands"
}
let girraf = {
    neck : "long"
}

girraf.__proto__ = animal;
*/

class animal{
    constructor(name ){
        this.name = name
        console.log("object is created...")
    }

    eats(){
        console.log("kha raha huu")
    }

    jump(){
        console.log("jump kar raha hu")
    }
}

class lion extends animal{
    constructor(name ){
        super(name)
        this.name = name
        console.log("object is created an the here the object name is shera")
    }
    eats(){
        super.eats()
        console.log("ja raha hu")
    }
}

let a =  new animal("vansh");
console.log(a)

let i = new lion("shera")
console.log(i)