//--------------------------Date & Time In Javascript----------------------------------------------------------------------------
//Date Object allow you to create,manipulate and format the date and time in Javascript

//year, month , day , hours , minutes ,seconds ,miliseconds
const currentDate = new Date();
console.log(currentDate);

const vari = new Date(2024, 2, 24, 12, 30, 0, 0);
console.log(vari);

//
const date = new Date();
//To get current year
const year = date.getFullYear();
console.log(`Year:${year}`);

//To Get Current month
const month = date.getMonth();
console.log(`Month:${month}`);

//To Get Current Day
const day = date.getDay();
console.log(`Day:${day}`);

//To Get Hours
const hours = date.getHours();
console.log(`Hours:${hours}`);

//To Get Minutes
const minutes = date.getMinutes();
console.log(`Minutes:${minutes}`);

//To Get Milliseconds
const milliSeconds = date.getMilliseconds();
console.log(`MilliSeonds:${milliSeconds}`);

//To Convert Date To Strings

const dat = new Date();
console.log(dat.toDateString());
console.log(dat.toISOString());
console.log(dat.toLocaleTimeString());

//To Add One More Day
const nxtDay = new Date();
nxtDay.setDate(nxtDay.getDate() + 1);
console.log(nxtDay);

nxtDay.setDate(nxtDay.getDate() - 2);
console.log(nxtDay);
