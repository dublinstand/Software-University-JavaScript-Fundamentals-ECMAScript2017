//Write a JS function to check whether a year is leap. Leap years are either divisible by 4 but not by 100 or are divisible by 400.
//The input comes as array of one string element, holding a number.
//    The output should be printed to the console. Print yes if the year is leap and no otherwise.


function isLeapYear(year){
    let leap = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
    console.log(leap ? "yes" : "no");
}

isLeapYear(1999);
isLeapYear(2000);
isLeapYear(1900);