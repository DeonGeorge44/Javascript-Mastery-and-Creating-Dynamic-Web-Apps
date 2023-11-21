//-----------------------Exercise based on Enhanced Object Literals------------------------------------------------------------------------

// -------------------------------
// REFACTOR ES5 CODE TO ES6 (Enhanced Object Literals)
// ES5 code
// var a = 1,
//   b = 2,
//   c = 3;
// obj = {
//   a: a,
//   b: b,
//   c: c,
// };

// obj.a = 1, obj.b = 2, obj.c = 3

// -------------------------------
// ES6 code
let a = 1;
let b = 2;
let c = 3;

const obj = {
    a,
    b,
    c,
};

console.log(obj);
