//You have been tasked to create a register for different towns and their population.
//The input comes as array of strings. Each element will contain data for a town and its population in the following format:
//“{townName} <-> {townPopulation}”
//If you receive the same town twice, you should add the given population to the current one.
//As output, you must print all the towns, and their population.


function populationsInTowns(input) {
    let townInfo = new Map();

    for (let record of input) {
        //we split by empty spaces and <-> (we escape - with \-), then we remove all empty strings
        [cityName, population] = record.split(/[\<\->]/).filter(w => w != '');
        population = Number(population);

        //if there is a record with key cityName, get its value and add the population, else create a new record with key = cityName and value = population
        townInfo.has(cityName) ? townInfo.set(cityName, townInfo.get(cityName) + population) : townInfo.set(cityName, population);
    }

    //this way we assign for each variable record and population, the value from the townInfo Map
    for (let [town, population] of townInfo) {
        console.log(town + population);
    }
}


populationsInTowns([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Sofia <-> 1000000'
]);

populationsInTowns([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);
