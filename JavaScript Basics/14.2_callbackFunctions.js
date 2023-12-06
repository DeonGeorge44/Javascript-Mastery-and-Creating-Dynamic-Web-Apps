//----------------------------------CallBack Functions----------------------------------------------------------------------------------------------------------
/*-------When we provide a function as an argument to other function that function is known as CallBack Functions */

//showcallFunc(function(){})

function showCallFunc(fn) {
    const value = 10;
    fn(value);
}

showCallFunc(function (value) {
    console.log(value);
});
/*Here we are passing a function as an argument to another function and the function which is invoked as a parameter 
by the main function is known as CallBack funtion(function which is passed as an argument to other function) */
