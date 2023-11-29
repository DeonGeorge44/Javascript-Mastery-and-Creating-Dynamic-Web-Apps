//----------------------------------Exercise Based on "For In Loop"-----------------------------------------------------------------------

// Iterate over object & log the property and the value of that object using for in loop.
const object = { a: 1, b: 2, c: 3 };

for (let keys in object) {
    console.log(`${keys} : ${object[keys]}`);
}
