//Strings--
// 'hello'
// "hello"
// `hello`

let firstName = "Deon ";
let secondName = "George";
let surName = `  George   `;
let fullName = firstName + surName; //String Concatenation
console.log(firstName);
console.log(secondName);
console.log(surName);
console.log(fullName);

//Concatenation
let fName = firstName.concat(secondName);
console.log(fName);

//Append
firstName += "george-----";
console.log(firstName);

//Length
console.log(secondName.length);

//Cases
console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());

//Slice
console.log(firstName.slice(1, 4));

//Split & Join Method
console.log(secondName.split(" ").join("-"));

//Includes
console.log(firstName.includes("D"));

//Trim
console.log(surName.trim());
console.log(surName.trim());

//Backticks  `` in use of backticks
let some = "group of text done";
console.log(some);
let any = `group of text written in any form 
            even on new line 
            even numbers 
            1
            2
            5
            3
            0
            even variables appended
            
            iam ${firstName}${secondName}`;
console.log(any);
