// -----------------------------------Basic Array Methods----------------------------------------------------------------------------------------------\

// | Method     |                                      Description                                       |
// | ---------- | :------------------------------------------------------------------------------------: |
// | concat()   |                     joins two or more arrays and returns a result                      |
// | includes() |                    checks if an array contains a specified element                     |
// | push()     |    aads a new element to the end of an array and returns the new length of an array    |
// | unshift()  | adds a new element to the beginning of an array and returns the new length of an array |
// | pop()      |          removes the last element of an array and returns the removed element          |
// | shift()    |         removes the first element of an array and returns the removed element          |
// | sort()     |          sorts the elements alphabetically in strings and in ascending order           |
// | slice()    |                 selects the part of an array and returns the new array                 |
// | splice()   |             removes or replaces existing elements and/or adds new elements             |

const fruits = ["Apple", "orange", "Watermelon", "Muskmelon"];
console.log(fruits);

//Push Method
console.log(fruits.push("Banana"));
console.log(fruits);

//Pop Method
console.log(fruits.pop());
console.log(fruits);

//Shift Method
console.log(fruits.shift());
console.log(fruits);

//Unshift Method
console.log(fruits.unshift("JackFruit"));
console.log(fruits);

//Concat Method
const newFruits = ["Apples", "oranges", "strawberry"];
const moreFruits = ["orange", "Lemon", "Pomegranate"];
const totalFruits = newFruits.concat(moreFruits);
console.log(totalFruits);
