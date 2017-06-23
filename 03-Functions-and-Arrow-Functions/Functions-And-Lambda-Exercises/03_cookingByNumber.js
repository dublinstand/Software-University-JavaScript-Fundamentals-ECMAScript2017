//Write a JS program that receives a number and a list of five operations.
// Perform the operations in sequence by starting with the input number and using the result of every operation
// as starting point for the next. Print the result of every operation in order.
// The operations can be one of the following:
//•	chop – divide the number by two
//•	dice – square root of number
//•	spice – add 1 to number
//•	bake – multiply number by 3
//•	fillet – subtract 20% from number
//
//The input comes as an array of 6 string elements. The first element is your starting point and must be parsed to a number. The remaining 5 elements are the names of operations to be performed.
//The output should be printed on the console.


function cookingByNumber(input){
    let num = Number(input[0]);

    for (let i = 1; i < input.length; i++) {
        let func = input[i]
        num = operation(num, func);
        console.log(num);
    }


    function operation(number, funct){
        number = Number(number);

        switch(funct){
            case "chop": return number / 2;
            case "dice": return Math.sqrt(number);
            case "spice": return number + 1;
            case "bake": return number * 3;
            case "fillet": return number - (0.2 * number);
            default:
                throw new Error("Wrong place given!");
        }
    }
}

cookingByNumber([32, 'chop', 'chop', 'chop', 'chop', 'chop']);
cookingByNumber([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);
