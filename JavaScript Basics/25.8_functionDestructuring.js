//-------------------------------------------Function Destrucuring-------------------------------------------------------------------------------
const person = {
    Name: "Deon George",
    Age: 17,
    Country: "India",
};

function printPersonInfo(person) {
    console.log(`Name:${person.Name}`);
    console.log(`Age:${person.Age}`);
    console.log(`Country:${person.Country}`);
}

printPersonInfo(person);

//
let options = {
    title: "My Menu",
    items: ["item1", "item2"],
};

function showMenu({ title = "Untitled", width: w = 100, height: h = 200, items: [item1, item2] }) {
    console.log(`${title} ${w} ${h}`);
    console.log(item1);
    console.log(item2);
}
showMenu(options);
