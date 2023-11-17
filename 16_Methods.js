//-----------------------------Methods in JavaScript---------------------------------------------------------------------------
//Method is a function inside an object

function greet() {
    console.log(`My Name is ${person.name},My age is ${person.age}`);
}

const person = {
    name: "Deon George",
    age: 24,
    greet: function () {
        console.log(`My Name is ${this.name} & My age is ${this.age}`);
    },
};

console.log(person.greet());
