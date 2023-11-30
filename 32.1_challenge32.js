//------------------Exercise Based on Find () Method --------------------------------------------------------------------------------------------------

// 1. Iterate over "ages" array
// 2. Print only adults, those whos age is greater then 18

const ages = [32, 33, 16, 40];

const res = ages.find((adult) => adult > 18);
console.log(res);

// ---------------------
// 1. Iterate Over "words" array
// 2. Print only those words which length is greater then 6

const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);
console.log(result);

//BONUS => REFACTOR
let produces = [
    { name: "Checkers", category: "Toys" },
    { name: "Harry Potter", category: "Books" },
    { name: "Iphone", category: "Electronics" },
    { name: "Learn PHP", category: "Books" },
];

let product;

for (let i = 0; i < produces.length; i++) {
    if (produces[i].category === "Books") {
        product = produces[i];
        break;
    }
}
console.log(product);

//---Converting the Same Code to ES6
let production;

const rst = produces.filter((production) => production.category === "Books");
console.log("Result :", rst);
