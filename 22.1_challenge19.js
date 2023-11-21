//------Exercise on Default Parameters-------------------------------------------------------------------------

// ---------------------------
// 1. Create a function name (append) it will take 2 parameters (value, array)
// 2. The default value of parameter "array" will be [].

const append = function (value, array = []) {
    array.push(value);
    return array;
};

append(1);
append(100);

// ----------------------------
// 1. Create function name (multiply) with 2 parameters (a, b) which will multiply the parameters value
// 2. Provide 1 as the default value to parameter "b"

const multiply = function (a, b = 1) {
    return console.log(a * b);
};
multiply(2);
