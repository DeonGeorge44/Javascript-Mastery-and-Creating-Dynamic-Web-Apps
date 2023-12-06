//---------------------------------------For Each Helper --------------------------------------------------------------------------------------------

/*
-When we call the For Each Helper we call in anonymous callback function ,
-This functions gets called one time  for every element in the array
-Whatever is inside the  function that logic happens
*/

const colors = ["teal", "blue", "Red", "yellow"];

//Normal Way of Iterating using For-loop

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

//Using Array For Each Method
console.log(" ");
console.log(" Using For Each Method");
colors.forEach((color) => console.log(color));

//Example 2
const words = ["table", " Chair", "Football", "Basket", "Pipe", "COde"];

const capWords = words.forEach((word, index, arr) => {
    arr[index] = word[0].toUpperCase() + word.substring(1);
});

console.log(words);
console.log(capWords);
