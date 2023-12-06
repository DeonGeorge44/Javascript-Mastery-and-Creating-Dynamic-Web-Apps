//---------------------------Template Strings----------------------------------------
/*Template Strings,also known as template literals,are a feature in javascript
  that allows you to create strings with embedded expressions.They are denoted
  by backticks`` instead of single or double quotes.
  Template Strings provide a more flexible and concise way to construct strings ,
  especially when they involve variables  or expressions*/

console.log(`This is some 
  random text`);

const firstName = "Deon";
const lastName = "George";
console.log("My Name is :" + firstName + " " + lastName);
console.log(`My Name is : ${firstName} ${lastName}`);

//writing breakers inside template Strings
console.log(`["One","Two","Three"]`);

//
function info() {
    return console.log(`My Name is Deon George and I'm 24 years old`);
}
console.log(`${info}`);
