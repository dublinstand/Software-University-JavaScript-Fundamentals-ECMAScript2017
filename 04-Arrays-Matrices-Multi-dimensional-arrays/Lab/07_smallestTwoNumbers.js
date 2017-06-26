//Write a JS function that prints the two smallest elements from an array of numbers.
//The input comes as array of string elements holding numbers.
//The output is printed on the console on a single line, separated by space.


function smallestTwoNumbers(arr){
    arr = arr.map(Number);

    //order thu array from lowest to highest
    arr.sort((a, b) => a - b);
    //cut the first two numbers from the list (start from 0 and cut 2 numbers)
    let result = arr.slice(0,2);

    return result.join(" ");
}

console.log(smallestTwoNumbers(['30', '15', '50', '5']));
console.log(smallestTwoNumbers(['3', '0', '10', '4', '7', '3']));
