//Write a JS function that prints the first k and the last k elements from an array of numbers.
//The input comes as array of string elements holding numbers. The first element represents the number k, all other elements are from the array that needs to be processed.
//The output is printed on the console on two lines. On the first line print the first k elements, separated by space. On the second line print the last k elements, separated by space.


function firstAndLastKNumbers(arr){
    arr = arr.map(Number);

    //we get the first number in the array
    let k = arr.shift();

    //we slice from the 0 index and we slice k numbers and log them with joined by " "
    console.log(arr.slice(0, k).join(" "));

    //we slice from arr.length - k until the arr.length index to get the last k indexes
    console.log(arr.slice(arr.length - k, arr.length).join(' '));
}

firstAndLastKNumbers(['2',
        '7', '8', '9']
);

firstAndLastKNumbers(['3',
        '6', '7', '8', '9']
);