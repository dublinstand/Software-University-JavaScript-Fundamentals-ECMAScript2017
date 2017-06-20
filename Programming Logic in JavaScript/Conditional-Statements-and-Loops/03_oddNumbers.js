//Write a JS function that reads an integer n and prints all odd numbers from 1 to n.
//The input comes as array of strings. Its first element holds the string representation of n. The number n will be an integer in the range [1 … 100 000].
//The output should hold the expected odd numbers, each at a separate line.


function oddNumbers(n){
    n = Number(n);

    for (let i = 1; i <= n; i++) {
        if( i % 2 != 0){
            console.log(i)
        }
    }
}

oddNumbers(5);
oddNumbers(4);
oddNumbers(7);
