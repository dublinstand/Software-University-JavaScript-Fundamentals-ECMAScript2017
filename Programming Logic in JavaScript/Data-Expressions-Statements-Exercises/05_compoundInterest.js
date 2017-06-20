//Write a JS function that calculates the total accumulated value for a monetary deposit by given principal sum, interest rate, compounding frequency and overall length.
//The input comes as an array of strings that need to be parsed as a numbers. The first value is the principal sum, the second is the interest rate in percent, the third is the compounding period in months and the final value is the total timespan, given in years.
//The output should be printed to the console, with two decimal places.

function compoundInterest([principal, interest, period, time]){
    //mapping all strings to map and turn them to numbers
    [principal, interest, period, time] = [principal, interest, period, time].map(Number);

    //this is equal to interest = interest / 100;
    interest /= 100;
    let frequency = 12 / period;

    let total = principal * Math.pow(1 + interest / frequency, frequency * time);

    console.log(total.toFixed(2));
}

compoundInterest([1500, 4.3, 3, 6]);
compoundInterest([100000, 5, 12, 25]);