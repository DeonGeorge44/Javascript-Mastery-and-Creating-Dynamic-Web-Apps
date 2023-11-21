//------------------ClearInterval()----------------------------
//The CLearInterval stop the interaval after certain seconds.
const interValid = setInterval(() => {
    console.log(`This Function is being executed at the interval`);
}, 1000);
console.log(interValid);

//To stop the interval after 10 seconds
setTimeout(() => {
    clearInterval(interValid);
    console.log(`Interval Stopped`);
}, 10000);
