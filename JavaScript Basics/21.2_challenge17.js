//------------------Exercise on Enhanced Object Literals--------------------------------------------------------------------

// ES5 code
// var lib = {
//   sum: function (a, b) {
//     return a + b;
//   },
//   mult: function (a, b) {
//     return a * b;
//   },
// };

// console.log(lib.sum(2, 3)); // 5
// console.log(lib.mult(2, 3)); // 6
// -------------------------------

//---------ES5 Code------------
const lib = {
    sum(a, b) {
        return a + b;
    },
    mult(a, b) {
        return a * b;
    },
};
console.log("           ");
console.log("ES5 Method of Writing Enhanced Object Literal");
console.log(lib.sum(2, 400));
console.log(lib.mult(9, 55));

// -------------------------------

//------------ES6 Code--------------------------------------------------------------------------
const library = {
    sum: (a, b) => a + b,
    mult: (a, b) => a * b,
};
console.log("             ");
console.log(`ES6 Method of writing Enhanced Object Literals`);
console.log(`Add:${library.sum(10, 20)}`);
console.log(`Add:${library.mult(9, 9)}`);
