//Write a JS function that takes three numbers as input and outputs their sum.
//The input comes as array of string elements that need to be parsed as numbers.
//The output should be printed to the console.



    function sum3Numbers([num1, num2, num3]){
    let sum = Number(num1) + Number(num2) + Number(num3);
    console.log(sum);
}

sum3Numbers(['2', '3', '4']);
sum3Numbers(['1.5', '1', '-1']);

