//-------------------------------------------Object Destructuring--------------------------------------------------------------

//-----In Object Destructuring order doesn't matter but the name does matter

//Example

const student = {
    name: "Deon George",
    position: "First",
    rollno: 14,
};
const { name, position, rollno } = student;
console.log(name);
console.log(position);
console.log(rollno);
