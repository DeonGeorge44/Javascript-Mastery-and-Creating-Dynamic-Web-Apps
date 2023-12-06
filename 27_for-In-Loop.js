//------------------------------------------------------For In Loop ------------------------------------------------------------------------------

/*
-The For In Loop  in Javascript is used to iterate over the enumerable properties of an object.
-It is s way to loop through the keys(property names) of an object.
*/

//          for(let key in object) {....}

let person = {
    name: "Deon",
    age: 24,
    gender: "Male",
};

for (let keys in person) {
    console.log(`${keys} : ${person[keys]}`);
}

//Example 2

let list = ["one", "two", "Three"];

for (let index in list) {
    console.log(`${index}:${list[index]}`);
}
