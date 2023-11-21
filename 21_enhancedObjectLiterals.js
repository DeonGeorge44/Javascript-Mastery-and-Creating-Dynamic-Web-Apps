//----------------------------Enhanced Object Literals----------------------------------------------------------------------------
/*
Enhanced Object Literal,introduced in ECMASCRIPT 6 (ES6), are a set of enhancements to the syntax for defining objects in Javascript.
These enhancements make it more convenient and concise  to define object properties and methods.
*/

function user(name, age, work) {
    return {
        name: name,
        age: age,
        work: work,
    };
}

const title = user("Deon", 24, "software Developer");
console.log(title);

const alex = user("Alex", 55, "Entrepreneur");
console.log(alex);

//Usage of Enhanced Object LIteral
function person(name, age, work) {
    return {
        name,
        age,
        work,
        intro: function () {
            console.log(`My Name is ${name}, and I am ${age} years old.I work as a ${work}`);
        },
    };
}
const data = person("Jay", 33, "Accountant");
console.log(data);

//calling method intro
console.log(`Intro Method ()`);
console.log(data.intro());
