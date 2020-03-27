// Preliminaries

if (5 > 3) {
    console.log("is greater than");
}

if ("cat".length == 3) {
    console.log("is the length");
}

if ("cat"=="dog") {
    console.log("dog");
} else {
    console.log("not the same");
}

//Bronze Medal

var person = {
    name: "Bobby",
    age: 12
}

if (person.age >= 18) {
    console.log(person.name + " is allowed to go to the movie")
}
else {
    console.log(person.name + " is not allowed to go to the movie")
}

if (person.name[0] == "B"){    
    console.log(person.name + " is allowed to go to the movie")
}
else {
    console.log(person.name + " is not allowed to go to the movie")
}

if (person.name[0] == "B" && person.age > 18){    
    console.log(person.name + " is allowed to go to the movie")
}
else {
    console.log(person.name + " is not allowed to go to the movie")
}

//Silver Medal

if (1 === "1"){
    console.log("strict")
} else if (1 == "1"){
    console.log("loose")
} else {
    console.log("not equal at all")
}

if (1 <= 2 && 2 == 4){
    console.log("yes")
}

//Gold Medal
if (typeof "dog" === 'string'){
    console.log("dog is string")
} else {
    console.log("dog is not string")
}

if (typeof "true" === 'boolean'){
    console.log("true is boolean")
} else {
    console.log("true is " + typeof "true")
}

var apple = 0 ;
if (typeof apple !== 'undefined'){
    console.log("Variable apple is defined")
} else {
    console.log("Variable apple is not defined")
}

if ("s" > 12) {
    console.log(" s is greater than 12")
} else {
    console.log("s is not greater than 12")
}

if (36 > 12) {
    console.log("36 is greater than 12")
} else {
    console.log("36 is not greater than 12")
}

var myNum = 10;
if ((myNum % 2) == 0 ){
    console.log(myNum + " is even number")
} else {
    console.log(myNum + " is odd number")
}