//SWitch Statement Exercises

// 1. Create variable name (fruit) & store "banana".
// 2. If case is "Banana" print "Banana is good!"
// 3. If case is "Orange" print "I am not a fan of oranges."
// 4. If case is "Apple" print "How you like them apples?"
// 5. default "I  have never heard of that fruit."

const fruit = "Banana";

switch (fruit) {
    case "Banana":
        console.log("Yes it is Banana");
        break;
    case "Orange":
        console.log("Iam not a fan of oranges");
        break;
    case "Apple":
        console.log("How you like them apples");
        break;
    default:
        console.log("I have never heard of that fruit");
}
