//------------------------------------Arrow Functions--------------------------------------------------------------------------------------------

/* ----------------------------------------------------------------------------------------------------------------------------------------------
Arrow Functions,also known as fat arrow functions,are a concise and shorter way to define functions in Javascript.They were introduced in
ECMASCRIPT 6 (Es6) and provide a more compact syntax compared to traditional function expressions..
------------------------------------------------------------------------------------------------------------------------------------------------- */

//Default Function
function greet(username) {
    console.log(`Hello:${username}`);
}

greet("Deon");

//Fat Arrow Function
console.log(`Fat Arrow Function Example:`);
const name1 = (userWord) => console.log(`My name is ${userWord}`);
name1("Jay");

//
console.log(`Default Function`);
function double(dataNumber) {
    return dataNumber * 2;
}
console.log(double(5));
console.log(double(7));
console.log(double(100));

//Far Arrow Function
console.log(`Fat Arrow Function:`);
const single = (dNumber) => dNumber * 2;
console.log(single(2));
console.log(single(100));
console.log(single(678));
console.log(single(67890));
