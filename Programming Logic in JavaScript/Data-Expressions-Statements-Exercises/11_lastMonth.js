//Write a JS function that receives a date as array of strings containing day, month and year in that order.
// Your task is to print the last day of previous month (the month BEFORE the given date). Check the examples to better understand the problem.
//The input comes as an array of string elements.
//The output should be a single number representing the last day of the previous month.

function lastMonth([day, month, year]){
    [day, month, year] = [day, month, year].map(Number);

    //in order to return the last day of the month before you need to enter 0 for days
    let date = new Date(year, month - 1, 0);

    console.log(date.getDate());
}

lastMonth(['17','3','2002']);
lastMonth(['13','12','2004']);


