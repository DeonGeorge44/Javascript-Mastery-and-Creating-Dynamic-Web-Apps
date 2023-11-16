//--------------------------------------------OBJECTS in jS----------------------------------------------------------------------------------

/* Objects --> Objects are javascript data structures which allows us to store a collection of data
           --> Also allows to store Collection of data in the form of  key value pairs  OBJECTS:{label:value}*/

const person = {
    firstName: "Deon",
    lastName: "George",
    age: 19,
    location: ["Planet", "Earth", ""],
    isProgrammer: true,
    10: true,
};
console.log(person);
console.log(typeof person);

// typeOf Array----
const arr = [];
const arr1 = [1, 2, 3, 6, 8];
console.log(typeof arr);
console.log(typeof arr1);

//Accessing items from an Object
// ----- 1)Dot Notation
console.log("   ");
console.log("---Dot Notation--- ");
console.log(person.firstName);
console.log(person.age);
console.log(person.location);
console.log(person.lastName);

// ------2)using Bracket Notation
console.log("Using Bracket Notation");
console.log(person["firstName"]);
console.log(person["location"]);
console.log(person["10"]);
