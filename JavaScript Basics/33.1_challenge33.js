// REFACTOR -> USE EVERY & SOME HELPERS

/*
let products = [
    { name: "Checkers", category: "Toys" },
    { name: "Harry Potter", category: "Books" },
    { name: "iPhone", category: "Electronics" },
    { name: "Learn PHP", category: "Books" },
];

let allProductsBooks = true;
let someProductsBooks = false;

for (let i = 0; i < products.length; i++) {
    if (products[i].category != "Books") {
        allProductsBooks = false;
    } else {
        someProductsBooks = true;
    }
}
console.log(allProductsBooks);
console.log(someProductsBooks);

*/

//Using Es6
let products = [
    { name: "Checkers", category: "Toys" },
    { name: "Harry Potter", category: "Books" },
    { name: "iPhone", category: "Electronics" },
    { name: "Learn PHP", category: "Books" },
];

const task = (product) => product.category != "Books";

let allProductsBooks = products.every(task); //do all products have a category of books
let someProductsBooks = products.some(task); //do any products have a category of books

console.log(allProductsBooks);
console.log(someProductsBooks);
