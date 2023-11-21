//------------------------Default Function Parameters -------------------------------------------------------------------------------

/*
---Default Function Parameters ,introduced in ECMASCRIPT 6 (ES6),allow you to assign default values to function parameters.---

---When  a function is called , and an argument is not provided for a parameter,the default value will be used instead.This
   feature makes it easier to handle cases where arguments might be missing or undefined.---

*/

function countTo5(count) {
    if (count === true) {
        for (let i = 1; i <= 6; i++) {
            console.log(`Count:${i}`);
        }
    }
}
countTo5(true);

//Exammple

function ratings(rate) {
    if (rate === 5) {
        console.log(`High Ratings :) `);
    } else if (rate === 0) {
        console.log(`Low Ratings :( )`);
    }
}

ratings(5);
ratings(0);
