//--------------------------------------------------------Every & Some Method-----------------------------------------------------------------

/*
The Every() and Some() are two built in array methods in Javascript that allow you to check the elements of an array based on a given condition.
Both Methods takes a Callback Function as an argument,which is applied to each element of an array.


--Every Method-every()--------
The Every Method tests whether all elements in the array pass the condition specified by the provided callback function.
It returns true if the callback function returns true for every element, and false if any element fails the condition.

--Some Method-some()----------
The Some Method tests whether atleast one element in the array passes the condition specified by the provided callback funtion.
It returns true if the callback function returns true for atleast one element, and false if no element passes the condition.
*/

//Every() Method Example
const peoples = ["deon", "Ram", "Tom"];

const result = peoples.every((people) => people.length === 6);
const result1 = peoples.every((people) => people.length > 2);

console.log("Every Method Output1:", result);
console.log("Every Method Output2:", result1);

//Some() Method Example
const result3 = peoples.some((people) => people.length === 4);
const result4 = peoples.some((people) => people.length > 10);

console.log("Some() Method Ouput3:", result3);
console.log("Some() Method Output4:", result4);

//

const songs = [
    { name: "Lucky You", duration: 4.34 },
    { name: "Just Like You", duration: 3.23 },
    { name: "The Search", duration: 2.33 },
    { name: "Old Town Road", duration: 1.43 },
    { name: "The Box", duration: 4.43 },
];

const everyRes = songs.every((song) => song.name === "Lucky You");
console.log(everyRes);

const someRes = songs.some((song) => song.duration > 4);
console.log(someRes);
