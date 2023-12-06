//Logical Operators-

// --->1) Logical AND (&&)  --True if both the operands/boolean values are true,else evaluates to False
// --->2) Logical OR  (||)  --True if either of the operands/boolean values are true and it evaluates to false if both are false
// --->3) Logical NOT (!)   --True if operands is false and vice-versa

//if one is false, then it gives false
const a = true;
const b = false;
const c = 4;

console.log(a && b);

//if both are true then it gives true
const a1 = true;
const b1 = true;
const c1 = 4;

// console.log(a1 && b1);
console.log(c > 2 && c < 2);

//Logical OR Operator------
const a2 = false;
const b2 = false;
const c2 = 6;
console.log(a2 || b2);

//--->Logical NOT (!)
console.log(!a2);
console.log(!b2);

//Example
let password = "Deon_George";

if (password.length >= 100 || password.includes("Geo")) {
    console.log("Valid_Password");
} else {
    console.log("Invalid_Password");
}
