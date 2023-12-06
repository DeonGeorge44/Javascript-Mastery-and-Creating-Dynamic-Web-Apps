//------------------------Exercise Based on Map Helper---------------------------------------------------------------------------------------------

// 1. Create array with random numbers.
// 2. Map over each item in that array, & multiply each item by 10

const list = [200, 300, 555, 873, 38, 288, 56, 222];

const doubleList = list.map((list) => {
    return list * 10;
});
console.log(doubleList);
