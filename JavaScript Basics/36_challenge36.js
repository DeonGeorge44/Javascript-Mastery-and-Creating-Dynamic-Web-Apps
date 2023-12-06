//----------------------Exercise Based on Set---------------------------------------------------------------------------------------------------

// 1. Create a Set name (letters)
// 2. Add ("a", "b", "c") as properties
// 3. Add ("a", "b", "c") as values
// 4. Iterate over Set & log the values.

const letters = new Set();

letters.add("a");
letters.add("b");
letters.add("c");

console.log(letters);

const a = "A";
const b = "B";
const c = "C";

for (let alphabets of letters) {
    console.log(alphabets);
}
