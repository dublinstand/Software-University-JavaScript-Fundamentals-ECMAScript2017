//Write a JS function that rounds numbers to specific precision.
//The input comes as an array of two string elements that need to be parsed as a numbers. The first value is the number to be rounded and the second is the precision (significant decimal places). If a precision is passed, that is more than 15 it should automatically be reduced to 15.
//The output should be printed to the console. Do not print insignificant decimals.

function rounding([num, n]){
    [num, n] = [num, n].map(Number);

    let denominator = Math.pow(10, n);

    num = Math.round(num * denominator) / denominator;

    console.log(num);
}

rounding([3.1415926535897932384626433832795, 2]);
rounding([10.5, 3]);

