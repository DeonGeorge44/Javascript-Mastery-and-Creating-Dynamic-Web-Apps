//-------------------------------------------For Of Loop---------------------------------------------------------------------------------------------

/*
----  "For Of" loop in Javascript is a modern iteration statement introduced in ECMASCRIPT 6 (ES6) that provides a concise and easy way to loop 
       over elements in iterable objects like arrays,strings,maps,sets and more. 
       It allows you to iterate directly over the values of the elements ,rather than dealing with their indices of keys,  which makes the code 
       more readable and less error-prone. 
*/

//             for (variables of iterables){  ............    }

//Iterating through Arrays
let peoples = ["Deon", "Jay", "Kane", "Simon", "Alex"];

for (people of peoples) {
    console.log(people);
}

//Iterating through Strings
const text = "COFFEE-POWDER";

for (txt of text) {
    console.log(txt);
}
