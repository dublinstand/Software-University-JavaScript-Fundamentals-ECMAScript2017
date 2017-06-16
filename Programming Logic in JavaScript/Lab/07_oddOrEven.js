//Write a JS function to check if a number is odd or even or invalid (fractions are neither odd nor even).
//The input comes as array of one string element, holding a number.
//    The output should be printed to the console. Print odd for odd numbers, even for even number and invalid for numbers that contain decimal fractions.


function oddOrEven(num){
    let rem = num % 2;
    if (rem == 0)
        console.log("even");
    //here we check if the number is not a decimal, by comparing the number to the rounded remainder
    else if (rem == Math.round(rem))
        console.log("odd");
    else console.log("invalid")
}

oddOrEven(5);
oddOrEven(8);
oddOrEven(1.5);