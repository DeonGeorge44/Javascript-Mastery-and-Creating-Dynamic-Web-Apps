//--------------------------CallBack Functions-Example 2-----------------------------------------

const greet = function (name, cb) {
    console.log(name);
    cb();
};

function cb() {
    console.log("Iam a CallBack Function");
}
greet("Deon", cb);
