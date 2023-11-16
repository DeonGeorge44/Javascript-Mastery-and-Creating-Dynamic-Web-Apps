// 1. Create variable name (favActorFirstName) & store your fav Actor name.
// 2. Create variable name (favActorLastName) & store the last name of (FA).
// 3. Create variable name (fullName) & concatenate (favActorFirstName, favActorLastName)
// 4. Create variable name (uppercase) & CAPITALIZE your fav actor name.
// 5. Create a variable name (message) & store `My favorite Actor Is (favActorName) & say something about your fav actor` name should be in UPPERCASE.
// 6. Now append this message to the (message variable) `his best show is Silicon Valley`.
// 7. Now Log your Message.

let favActorFirstName = "Kamala";
let favActorLastName = " Hassan";

// Concatenate
let fullName = favActorFirstName.concat(favActorLastName);

console.log(fullName);

//Capitalise Actor Name
let favActorFirstName1 = favActorFirstName.toUpperCase();
console.log(favActorFirstName1);

//Message using `Backtick`
let message = `My Favourite Actor is ${favActorFirstName}${favActorLastName}.
${favActorFirstName.toUpperCase()} is an auspicious actor who had contributed to the Tamil Cinema Industry in  a wide range`;
console.log(message);

//Appending the message
message += ` ,his best show is Silicon Valley`;
//Message Logging
console.log(message);
