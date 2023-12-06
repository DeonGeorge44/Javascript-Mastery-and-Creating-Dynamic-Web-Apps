//----------------------Array Reduce Method ---------------------------------------------------------------------------------------------------------

/*
The Reduce() Method applies the reducer function to each element of an array,accumulating the results into a single value.
It is often used to perform calculations or aggregations on array elements and simplify the array into single value.
*/

const numbers = [23, 33, 55, 77, 8];

const sum = numbers.reduce((p, c) => {
    console.log(`Previous:${p}`);
    console.log(`Current:${c}`);
    return p + c;
}, 100);
console.log(sum);

//
const peoples = [
    {
        name: "Deon",
        age: 25,
    },
    {
        name: "Brian",
        age: 26,
    },
    {
        name: "Rajesh",
        age: 44,
    },
];
const oldestAge = peoples.reduce((p, c) => (c.age > p ? c.age : p.age), 0);
console.log(oldestAge);

//
const fruits = ["orange", "banana", "apple", "JackFruit", "Muskmelon", "WaterMelon"];

const frequencyWord = fruits.reduce((frequencyMap, word) => {
    frequencyMap[word] = frequencyMap[word] || 0 + 1;
    return frequencyMap;
});
console.log(frequencyWord);
