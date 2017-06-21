//Write a JS function that sums a variable number of prices and calculates their VAT (Value Add Tax, 20%).
//The input comes as array of string elements that need to be parsed as numbers. The number of elements will be different every time.
//    The output should be printed to the console on a new line for every entry.

function sumAndVAT(input){
    let sum = 0;

    for(let num of input){
        sum += Number(num);
    }
    let vat = sum * 0.2;
    let total = sum + vat;

    console.log(`sum = ${sum}`);
    console.log(`VAT = ${vat}`);
    console.log(`total = ${total}`);
}

sumAndVAT(['1.20', '2.60', '3.50']);
sumAndVAT(['3.12', '5', '18', '19.24', '1953.2262', '0.001564', '1.1445']);
