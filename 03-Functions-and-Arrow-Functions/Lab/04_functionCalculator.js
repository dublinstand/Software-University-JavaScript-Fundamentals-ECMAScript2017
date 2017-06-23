//Write a JS program that receives two variables and an operator and performs a calculation between the variables, using the operator.
// Store the different functions in variables and pass them to your calculator.
//The input comes as an array of three strings – two need to be parsed as numbers, and one is the operator.
//The output should be printed on the console.

function functionCalculator([a, b, op]){
    [a, b] = [a, b].map(Number);

    let calc = function(a, b, op) {return op(a, b)};

    let add = function (a, b) {return a + b};
    let subtract = function(a, b) { return a - b };
    let multiply = function(a, b) { return a * b };
    let divide = function(a, b) { return a / b };

    switch(op){
        case'+':
            return calc(a, b, add);
        case'-':
            return calc(a, b, subtract);
        case'/':
            return calc(a, b, multiply);
        case'*':
            return calc(a, b, divide);
        default:
            alert("wrong function entered")
    }
}

console.log(functionCalculator(['2', '4', '+']));
console.log(functionCalculator(['3', '3', '/']));
console.log(functionCalculator(['18', '-1', '*']));
