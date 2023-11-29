//------------------------------Rest Operator--------------------------------------------------------------------------------
/*
---The Rest Parameter syntax allows a function to accept an indefinite number of arguments.
---As an array,providing  a way to represent  variadic functions in javascript
*/

function user(x, ...userData) {
    console.log(x);
    console.log(userData);
}

user("Deon", 21, "Lite", "Hobby");

//Example

function person(firstName, lastName, ...otherDetails) {
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Other Info:", otherDetails);
}

person("Deon", "George", 25, "Looking For Jobs");
