//-------------------------------------Learning the essentials of Scope in Javascript--------------------------------------------------------------

/*
Scope in javascript refers to the current context of code,which determines the accessibility of variables in javscript

There are two types of scopes in javascript:
---Global Scope Variables --> Variables that are declared outside of a block
---Local Scope Variabbles --> Variables that are declared inside of a block
*/

//Global Variable example
let textMessage = "hi"; //Global variable
console.log(textMessage);

function showMessage() {
    let textMessage = "Hello"; //local variable
    console.log(textMessage);
}
showMessage();
