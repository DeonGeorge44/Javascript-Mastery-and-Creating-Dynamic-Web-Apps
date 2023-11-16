//----------------------------------------------------For Loop Statement in Javascript--------------------------------------------------------
//  DRY - Don't Repeat Yourself

console.log("Hello Jack");
console.log("Hello Jack");
console.log("Hello Jack");

//for Loop
/*
for(intial expression;condition;increment/decrement expression){

}
*/

for (let i = 0; i < 5; i++) {
    console.log("Hello World", i);
}

//Nested Loop
for (let i = 1; i <= 10; i++) {
    console.log("outer Loop", i);
    for (let j = 1; j <= 2; j++) {
        console.log("---Inner  Loop-----", j);
    }
}
