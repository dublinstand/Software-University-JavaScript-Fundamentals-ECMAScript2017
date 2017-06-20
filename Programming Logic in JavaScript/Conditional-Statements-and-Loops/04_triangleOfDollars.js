//Write a JS function that prints a triangle of n lines of “$” characters like shown in the examples.
//The input comes as array of strings. Its first element holds the number n (0 < n < 100).
//The output consists of n text lines like shown below.


function triangleOfDollars(n){
    n = Number(n);

    for (let i = 1; i <= n; i++) {
        console.log(new Array(i + 1).join('$'))
        console.log('$'.repeat(i))
    }
}

triangleOfDollars(3);
