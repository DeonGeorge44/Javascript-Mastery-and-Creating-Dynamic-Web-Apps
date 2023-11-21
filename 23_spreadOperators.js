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
