//You will be given a list of towns and incomes for each town, formatted in a table, separated by pipes (|).
//Write a JS function that extracts the names of all towns and produces a sum of the incomes. Note that splitting may result in empty string elements
//and the number of spaces may be different in every table.
//
//The input comes as array of string elements. Each element is one row in a formatted table.
//The output is printed on the console on two lines. On the first line, print a comma-separated list of all towns and on the second, the sum of all incomes.


function aggregateTable(input){
    let cities = [];
    let sum = 0;

    for (let i of input){
        let result = i.split("|");
        let city = result[1].trim();
        let amount = Number(result[2].trim());

        cities.push(city);
        sum += amount;
    }

    console.log(cities.join(", "));
    console.log(sum);
}

aggregateTable(['| Sofia           | 300',
        '| Veliko Tarnovo  | 500',
        '| Yambol          | 275']
);
