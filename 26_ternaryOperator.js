//---------------------------------------------------Ternary Operator-------------------------------------------------------------------------------------

/* 
Ternary Operator in Javascript is a concise way of writing conditional expressions.It is the only javascript operator that takes three operands:
a condition followed by a question mark (?),
an expression to execute if the conidition is true, followed by a colon (:),
and 
an expression to execute if the condition is false
*/

//   condition ? exprIfTrue : expIfFalse ;

let password = 8;

function passwordChecker(ps) {
    if (ps === 8) {
        return `Strong Password`;
    } else {
        return `Password Should Be 8 Characters`;
    }
}
const res = passwordChecker(password);
console.log(res);

//Making the Same Code  a One-Liner
function pswdCheck(p) {
    /*
   if (ps === 9) {
        return `Strong Password`;
    } else {
        return `Password Should Be 8 Characters`;
    }
  */

    return p === 8 ? `Strong Password` : `Hii Password Should Be 8 Characters`;
}
const res1 = pswdCheck(password);
console.log(res1);

//Example 2
const age = 25;

const isAdult = age >= 18 ? "Adult" : "NOt Adult";
console.log(isAdult);
