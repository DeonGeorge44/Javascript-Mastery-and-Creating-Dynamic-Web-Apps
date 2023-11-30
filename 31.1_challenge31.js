//-------------------------------Exercise Based on Filter Method ---------------------------------------------------------------------------------

// ---------------------
// 1. Iterate Over "words" array
// 2. Print only those words which length is greater then 6

const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

console.log(
    words.filter((word) => {
        return word.length > 6;
    })
);
