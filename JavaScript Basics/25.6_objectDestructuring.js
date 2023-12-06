//----------------------Object Destructuring & Rest Opeator-----------------------------------------------------------------------------------------

let { a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 600 };
console.log(a);
console.log(b);
console.log(rest);
