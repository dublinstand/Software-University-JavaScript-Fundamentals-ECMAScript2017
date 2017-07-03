//You’re tasked to create and print a JSON from a text table. You will receive input as an array of strings, where each string represents a row of a table,
//with values on the row encompassed by pipes "|" and optionally spaces. The table will consist of exactly 3 columns “Town”, “Latitude” and “Longitude”.
//The latitude and longitude columns will always contain valid numbers. Check the examples to get a better understanding of your task.
//The input comes as an array of strings - the first string contains the table’s headings, each next string is a row from the table.
//The output should be printed on the console - for each entry row in the input print the object representing it.


function townsToJSON(input){

    //remove the first line which is the heading
    let towns = input.slice(1);
    let townArray = [];

    //for each record in towns
    for (let town of towns){
        //split by regex ( | and empty spaces), so that we don't need to trim the records
        //we get name as first variable, lat and lng as second and third from the input
        let [name, lat, lng] = town.split(/\s*\|\s*/)
        .filter(x => x != '');

        //create an object with properties Town, Latitude and Longitude and assign to them the variables from the input line
        let townObj = {
            Town: name,
            Latitude: Number(lat),
            Longitude: Number(lng)
        };

        //push the object to the array
        townArray.push(townObj);
    }

    return JSON.stringify(townArray);
}

console.log(townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']));
