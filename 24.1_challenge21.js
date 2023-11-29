//---------------------Exercise on Rest Operators----------------------------------------------------------------------------------------

// 1. Create a function name (sum) which takes (unlimited) amount of parameters
// 2. No matter how many parameters you provide it will return the sum value of those params!

//1.

function sum(...params) {
    console.log(params);
}

console.log(sum("Deon", "Hobbies", 149));
