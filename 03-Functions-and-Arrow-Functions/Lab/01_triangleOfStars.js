//Write a JS function that outputs a triangle made of stars with variable size, depending on an input parameter. Look at the examples to get an idea.
//The input comes as an array with one string element in it, which needs to be parsed to a number.
//The output is a series of lines printed on the console, forming a triangle of variable size.


function triangleOfStars(n){
    function printStars(k){
        console.log("*".repeat(k));
    }

    for (let i = 1; i <= n; i++) {
        printStars(i);
    }
    for (let j = n - 1; j > 0; j--) {
        printStars(j);
    }
}

triangleOfStars(5);
