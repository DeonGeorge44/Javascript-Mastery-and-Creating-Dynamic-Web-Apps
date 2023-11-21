//---------------------Exercise on Enhanced Object Literals --------------------------------------------------------------------------------------

// -------------------------------
// function getPersionES5(name, age, height) {
//   return {
//     name: name,
//     age: age,
//     height: height,
//   };
// }

// getPersionES5("Zachary", 23, 195);
// Expected output: { name: 'Zachary', age: 23, height: 195 }
// -------------------------------

//ES6 Way of writing Enahnced Object Literals
const getPersionES6 = function (name, age, height) {
    return {
        name,
        age,
        height,
    };
};
const output = getPersionES6("Jay", 55, "5.5ft");
console.log(output);
