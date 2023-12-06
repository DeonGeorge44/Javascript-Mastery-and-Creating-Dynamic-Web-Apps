//Arrays --> 0 index based
//We can Store only one value inside a variable,if you want to store multiple values inside a variable then it can be done using some sort of data structure like array/object

const myList = ["brushing", "washing", "cleaning"];
console.log(myList);

const numberArrays = [1, 2, 3, 4, 5];
console.log(numberArrays);

const stringArray = ["eat", "code", "sleep", "repeat"];
console.log(stringArray);

//Accessing items from the array
console.log(stringArray[0]);
console.log(stringArray[1]);
console.log(stringArray[2]);
console.log(stringArray[3]);

//Nested Array --> Array inside an another array

const nestedArr = ["one", ["two", "three"], "Faalse", "true"];
console.log(nestedArr[1]);
console.log(nestedArr[1][0]);
console.log(nestedArr[1][1]);

//Letter Array example
const myLetters = ["h", "e", "l", "l", "o"];
console.log(myLetters);
