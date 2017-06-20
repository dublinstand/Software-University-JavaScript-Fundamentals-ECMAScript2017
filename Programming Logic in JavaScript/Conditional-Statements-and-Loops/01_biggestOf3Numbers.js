//Write a JS function that finds the biggest of 3 numbers.
//The input comes as array of strings, where each element holds a number.
//The output is the biggest from the input numbers.


function biggestOf3Numbers([num1, num2, num3]){
    [num1, num2, num3] = [num1, num2, num3].map(Number);
    let max = Math.max(num1, num2, num3);

}
