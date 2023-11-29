//---------------------------Spread Operators in Javascript-------------------------------------------------------------------------------

/*
---Spread Operator is a new addition to the set of operators in JavaScript ES6
---It takes in an iterable (eg:an array) and expands it into individual elements
---The Spread Operator is used to create shallow copies of JS Objects
---Using this operator makes the code concise and enhances its readability

*/

//Learning about the use of spread operators using Functions, Array & Objects

function giveMe4(a, b, c, d) {
    console.log("a", a);
    console.log("b", b);
    console.log("c", c);
    console.log("d", d);
}

const colors = ["red", "green", "teal", "blue"];

giveMe4(...colors);

//Usage of Spread Operators using Arrays
const strNums = ["one", "Two", "Three"];
const morestrNums = ["four", "five", "six"];

const concat = [...strNums, ...morestrNums];
console.log(concat);

//Example 2 --Spread Operators Based on Arrays
const peoples = ["Huxn", "Ravi", "Jamsi"];
const totalPeps = ["Jazim", "Tarun", ...peoples, "James"];
console.log(totalPeps);
const totalP = ["Jhansi", "John", totalPeps];
console.log(totalP);

//Example 3 - Spread Operator Based on Object
const obj1 = {
    x: 1,
    y: 2,
};

const obj2 = {
    z: 200,
};

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

//Example 4 : Cloning an Object to another

const person = {
    name: "Jimbei",
    age: 55,
    gender: "Male",
};

const clone = { ...person, work: "Programmer", Location: "Bengaluru" };
console.log(clone);
