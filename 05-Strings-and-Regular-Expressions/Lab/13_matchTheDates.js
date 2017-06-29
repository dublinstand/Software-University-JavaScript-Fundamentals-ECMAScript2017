//Write a JS function that finds and extracts all the dates in the given sentences. The dates should be in format
//d-MMM-yyyy. Example: 12-Jun-1999, 3-Dec-2017.
//The input comes as an array of strings. Each string represents a sentence.
//The output should be printed on the console. The output should consist of all extracted VALID dates. Each element should be printed on a new line.


function matchTheDates(input){
    let regExp = /\b([0-9]{1,2})-([A-Za-z]{3})-([0-9]{4})\b/g;
    let dates = [];
    let match;

    for (let sentence of input){
        while(match = regExp.exec(sentence)){
            //the regExp.exec(sentence) returns an array of the whole matching element + each matching group that is in the brackets of the regExp
            dates.push(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`);
        }
    }

    console.log(dates.join("\n"))
}

matchTheDates(['I am born on 30-Dec-1994.','This is not date: 512-Jan-1996.','My father is born on the 29-Jul-1955.']);