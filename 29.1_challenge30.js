//---------------------------------------------Exercise Based on forEachHelper------------------------------------------------------------

// 1. Create an array of numbers.

// 2. Create a variable to hold the sum.

// 3. Create the adder function which takes the parameter of number & add that with sum variable.

// 4. Loop over the array, incrementing the sum variable except this time a function gets referenced in the forEach

// 5. print the sum variable.

//-------------------------Output---------------------------------------------------------
//1
let num = [2, 3, 5, 6, 10];

//2
let sum = 0;

//3
const adder = (number) => {
    sum += number;
};

//4
num.forEach(adder);

//5
console.log(`Sum: ${sum}`);
