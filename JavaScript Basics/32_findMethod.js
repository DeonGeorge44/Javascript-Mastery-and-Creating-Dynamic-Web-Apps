//--------------------------------------Find Method() in Javascript-----------------------------------------------------------------------------------

/*
-The find () method is another built-in array helper in JavaScript that allows you to find the first element in an array that matches a specific 
 condition.
-It returns the value of the first element that satisfies the given testing function,or undefined if no element is found.
*/

const peoples = [
    { name: "Deon", age: 24 },
    { name: "Dev", age: 33 },
    { name: "Kane", age: 48 },
    { name: "James", age: 12 },
    { name: "Kane", age: 88 },
];

const person = peoples.find((people) => people.name === "Kane");
console.log(person);

//Exercise 2

const posts = [
    { id: 1, content: "Automobiles" },
    { id: 2, content: "Computer-Systems" },
    { id: 3, content: "Smartphones" },
    { id: 4, content: "AI & Technology" },
    { id: 5, content: "Smartphones" },
];

const res = posts.find((identity) => identity.content === "Smartphones");
console.log(res);
