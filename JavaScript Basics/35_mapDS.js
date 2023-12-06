//----------------------------Map Data Structure In Javascript-------------------------------------------------------------------------------------------

/*
-Map is  a  built-in-data structure introduced in (ES6) that allows you to store key-value pairs where both the 
 keys and values can be of any data type.
-It is similar to an object,but with a few key differences.

-Keys can be of any data type:unlike objects,where keys are limited to strings and symbols,
-Map allows you to use datatype as keys, including numbers ,booleans,objects, and even other Map instances.

-Maintains insertion order: Map preserves the order of key-value pairs  as they were  inserted, while object keys may not be guaranteed
to be in specific order.

-Iteration:Map provides built-in-methods for easy iteration over its elements.

*/

const map = new Map();
console.log(map);

const key1 = "string";
const key2 = {};
const key3 = function () {};

map.set(key1, "Value of Key One");
map.set(key2, "value of Key Two");
map.set(key3, "Value of Key Three");

console.log(map);
console.log("Map-Keys---: ", map.keys());
console.log("Map-Values---: ", map.values());

console.log(map.delete(key2));
console.log(map);

console.log(map.size);

//iteration

for (let [key, value] of map) {
    console.log(`${key} : ${value}`);
}

for (let key of map.keys()) {
    console.log(key);
}

for (let value of map.values()) {
    console.log(value);
}
