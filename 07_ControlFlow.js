//======================COntrol FLow In Programming ==================================

//If user has money,buy something or else Bring some money
let a = 10;
let b = 30;

if (a > b) {
    console.log("a is greater than b");
} else {
    console.log("b is greater than a ");
}

//time evaluation
let time = 10;
let greetings;

if (time > 10) {
    greetings = "Good";
    console.log(greetings);
} else if (time < 10) {
    greetings = "Good Morning";
} else {
    console.log("nothing");
}

//Switch Statements
/*
SYNTAX ---- 

switch(expression){
  case x: //print;
          //break;
  case y://print;
        //break;
}
*/

let x = 0;

switch (x) {
    case 0:
        console.log("Case 0");
        break;
    case 1:
        console.log("Case 1");
        break;
    default:
        console.log("No Value");
}

let day = "Monday";

switch (day) {
    case "Monday":
        console.log("today is monday");
        break;
    case "Tuesday":
        console.log("TOday is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    default:
        console.log("Some other day");
}

//--------------------CONTROLLING THE FLOW USING A CONDITIONAL STATEMENT-------------------------------------------------------------------------------
