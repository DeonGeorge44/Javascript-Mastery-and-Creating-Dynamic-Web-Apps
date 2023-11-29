//----------------------------------Array Map Helper-------------------------------------------------------------------------------------------

/*
-The Map Method Creates  A New Array populated with the results of calling  a provided function  on every 
 element in the calling array.
*/

let numbers = [2, 100, 5, 26, 83];

let finalNumbers = numbers.map((numbers) => numbers * 2);
console.log(finalNumbers);

//Example

let peoples = [
    { firstName: "Malcom ", lastName: "Reynolds" },
    { firstName: "Kaylee", lastName: "Stash" },
    { firstName: "Jayne", lastName: "Reynolds" },
    { firstName: "Mac", lastName: "Reynolds" },
];

const results = peoples.map((peoples) => {
    return [peoples.firstName, peoples.lastName];
});
console.log(results);
