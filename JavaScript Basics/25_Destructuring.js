//--------------------------------------Destructring--------------------------------------------------------------------------------------

/*
Destructring allows us to "unpack " values from data-structures(Arrays,objects) into separate distrinct variables.
*/

const foo = ["one", "Two", "Three"];

const [huxn, yellow, green, blue] = foo;
console.log(foo);

//
let a, b;
[a = 5, b = 10] = [1, 2];
console.log("a:", a);
console.log("b:", b);

//
let c, d;
[c = 15, d = 20] = [];
console.log("c:", c);
console.log("d:", d);

//
function f() {
    return [1, 2];
}

let z, x;

[z, x] = f();
console.log(z);
console.log(x);

//For Ignoring one element
function f() {
    return [1, 2, 3];
}

const [a1, , b1] = f();
console.log(a1);
console.log(b1);
