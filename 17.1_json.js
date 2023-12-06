const person = {
    name: "John Doe",
    age: 30,
    email: "john@example.com",
    isSubscribed: true,
    hobbies: ["Reading", "Running", "Cooking"],
    address: {
        city: "New York",
        zipCode: "10001",
    },
};

//----------Use of JSON.stringify()------------------------------------------------
//--it is a method which converts javascript object and it will convert that into a JSON string.
const jsonString = JSON.stringify(person);
console.log(jsonString);

//---------Use of JSON.parse()-----------------------------------------------------
//-it is used to parse a JSON String and returns a javascript object based on that

const parseObj = JSON.parse(jsonString);
console.log(parseObj);
