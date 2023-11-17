//Functions --
/*
Function is a block of code that performs a specific task.
Functions makes the code reusable.You can declare it ones and use it multiple times.
Functions makes the program easier as each small task is divided into a function.
DRY -- Don't Repeat Yourself

-------------------------------function name(parameter if any){....};-------------------------------------------------------


*/

//------Function-Declaration--------------------------
function greet() {
    console.log("Hello From Function");
}
greet(); //call,run/execute a funtion(invoke a function)

//-------------Functions with parameters----------------------------------

function sayHello(name) {
    console.log("hello my name is", name);
}
sayHello("Deon_George");
sayHello("Alex");

//return keyword in functions      --- returns some data from the function

function add(x, y) {
    return x + y;
}
console.log(add(3, 10));

const res1 = add(5, 10);
const res2 = add(88, 100);
const res3 = add(500, 44);
console.log(res1);
console.log(res2);
console.log(res3);

//-----------------------------Function Expression------------------------
//Function Expression is a function which we store inside a variable

//Example

const Man = function (name) {
    return name;
};

console.log(Man("DEon"));

//Summary ---
/* how we are declaring the function
   how to store value inside a function
   parameters and arguments
   return keyword
 */
