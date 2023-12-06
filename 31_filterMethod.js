//-------------------------------------Filter Method-------------------------------------------------

/*
-The Filter Method is a built in array method in Javascript that allows you to create a new array containing elements 
 that pass a certain condition.
-It provide a clean and concise way to filter out elements from an array based on a specified criteria.
*/

const songs = [
    { name: "Lucky You", duration: 4.34 },
    { name: "Just Like You", duration: 3.23 },
    { name: "The Search", duration: 2.33 },
    { name: "Old Town Road", duration: 1.43 },
    { name: "The Box", duration: 5.23 },
];

console.log(songs.filter((song) => song.duration > 2.3));

//Exercise 2
const computers = [
    { ram: 4, ssd: 500 },
    { ram: 32, ssd: 1000 },
    { ram: 16, ssd: 200 },
    { ram: 8, ssd: 250 },
];

console.log(computers.filter((com) => com.ram > 8));
console.log(computers.filter((com) => com.ram < 8));
