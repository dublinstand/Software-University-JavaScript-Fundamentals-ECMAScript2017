//You’re tasked with calculating the total sum of income for a number of Towns. You will receive an array of strings representing towns and their incomes,
//every even index will be a town and every odd index will be an income belonging to that town. Create an object that will hold all the towns as keys and their
//total income (the sum of their incomes) as values to those keys and print it as a JSON.
//The input comes as an array of strings - each even index is the name of a town and each odd index is an income belonging to that town.
//The output should be printed on the console - JSON representation of the object containing all towns and their total incomes.


function sumByTown(arr){
    let sums = {};

    for (let i = 0; i < arr.length; i += 2) {

        //create an array for town and income and each even number is town, each odd is income
        //for the income parse it to Number
        let[town, income] = [arr[i], Number(arr[i + 1])];

        //if the sums array does not have the town value assign income to that town
        if (sums[town] == undefined){
            sums[town] = income;
        }
        else{
            //if it has town and income already assigned, just add the new income
            sums[town] += income;
        }
    }

    return JSON.stringify(sums);
}


console.log(sumByTown(['Sofia','20','Varna','3','Sofia','5','Varna','4']));