//--------------------------------------Set Data  Structure---------------------------------------------------------------------------------------

/*
--Set is a built in data structure introduced in ES6 that represents a collection  of unique values.
--Unlike array, Set allows us to store only unique values,which means duplicate values are automatically removed.Each value can occur once 
  within a set.

--Set Objects are useful when you need to store a list of unique elements and quickly check for the existence of a specific value.
*/

const intialValues = [222, 555, 888, 888, 333, 222];
const mySet = new Set(intialValues);
console.log(mySet);

const primeKey = new Set();

primeKey.add("Orange");
primeKey.add("Apple");
primeKey.add("Watermelon");
primeKey.add("Strawberry");
primeKey.add("Mango");

console.log(primeKey);

console.log(primeKey.has("Apple"));
console.log(primeKey.has("Pomgranate"));

//To Delete Specific Properties from the Set
primeKey.delete("Orange");
console.log(primeKey);

//Clear Method
primeKey.clear();
console.log(primeKey);

for (let data of mySet) {
    console.log(data);
}
