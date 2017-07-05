//You will be given different juices, as strings. You will also receive quantity as a number.
//If you receive a juice, you already have, you must sum the current quantity of that juice, with the given one.
//When a juice reaches 1000 quantity, it produces a bottle. You must store all produced bottles and you must print them
//at the end.
//Note: 1000 quantity of juice is one bottle. If you happen to have more than 1000, you must make
//as much bottles as you can, and store what is left from the juice.
//Example: You have 2643 quantity of Orange Juice – this is 2 bottles of Orange Juice and 643 quantity left.
//The input comes as array of strings. Each element holds data about a juice and quantity in the following format:
//“{juiceName} => {juiceQuantity}”
//The output is the produced bottles. The bottles are to be printed in order of obtaining the bottles. Check the second example bellow - even though we receive the Kiwi juice first, we don’t form a bottle of Kiwi juice until the 4th line, at which point we have already create Pear and Watermelon juice bottles, thus the Kiwi bottles appear last in the output.


function cappyJuice(input) {
    let juiceInfo = new Map();

    for (let item of input){
        let [fruit, quantity] = item.split(/\s*=>\s*/).filter(w => w != '');
        quantity = Number(quantity);

        juiceInfo.has(fruit) ? juiceInfo.set(fruit, juiceInfo.get(fruit) + quantity) : juiceInfo.set(fruit, quantity);

        //if(!juiceInfo.has(fruit)){
        //    juiceInfo.set(fruit, quantity);
        //}
        //else{
        //    juiceInfo.set(fruit, juiceInfo.get(fruit) + quantity);
        //}
    }

    for (let [key, value] of juiceInfo){
        if(value > 1000){
            console.log(key + " => " + Math.floor(value / 1000));
        }
    }
}

cappyJuice([
    `Orange => 2000`,
    `Peach => 1432`,
    `Banana => 450`,
    `Peach => 600`,
    `Strawberry => 549`
]);

cappyJuice([
       `Kiwi => 234`,
       `Pear => 2345`,
       `Watermelon => 3456`,
       `Kiwi => 4567`,
       `Pear => 5678`,
       `Watermelon => 6789`
]);