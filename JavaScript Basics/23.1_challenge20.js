//-------------------------------Exercise Based on Spread Operators-----------------------------------------------------------------------
// 1. Make a clone of "arr, arr2" by using spread operator
// 2. Make a clone of "user" object using spread operator

// -----------------------------

//clone of arr,arr2 by using spread operator
const arr = [20, 30, 50, 60];
const arr2 = ["single", "double", "triple"];

const clone = [...arr, ...arr2];
console.log(clone);

//clone of use object using spread operator
const user = {
    Name: "Deon George",
    Location: "Bengaluru",
    Array: [...clone],
};
console.log(user);
