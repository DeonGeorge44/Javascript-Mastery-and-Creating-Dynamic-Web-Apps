//---------------------------Symbol in JavaScript---------------------------------------------------------------------------------------------------

/*
--Symbol is a unique and immutable primitive data type introduced in ECMASCRIPT 6 (ES6).A Symbol is often used as an 
  identifier for object properties to avoid potential naming conflicts. 

--Unlike strings or numbers, symbols are guaranteed to be unique.
  When you create a symbol, it is unique and cannot be recreated or changed.
  This uniqueness ensures that symbols will not collide with other property names ,even if they have the same string representation.
*/

const mySymbol = Symbol("My Custom PC Build");
console.log(mySymbol);
console.log(typeof mySymbol);

//Comparing Symbols
const mySymbol1 = Symbol();
const mySymbol2 = Symbol();
const mySymbol3 = Symbol();

console.log(mySymbol1);

//
const obj = {};
obj[mySymbol1] = "Value 1";
obj[mySymbol2] = "Value 2";
obj[mySymbol3] = "Value 3";

console.log(obj);

//
const obj1 = {};
obj1[Symbol("foo")] = "some value for foo";
console.log(obj1);

for (let i in obj1) {
    console.log(i);
}

//
let surValue = {
    firstName: "deon",
    lastName: "George",
};
for (let i in surValue) {
    console.log(i);
}
