//You are tasked to write a JS function that receives an array of purchases and their prices and prints all your purchases and their total sum.
//The input comes as an array of string elements – the elements on even indexes (0, 2, 4…) are the product names, while the elements on odd indexes (1, 3, 5…)
// are the corresponding prices.
//The output should be printed on the console - a single sentence containing all products and their total sum in the format
// “You purchased {all products separated by comma + space} for a total sum of {total sum of products}”.

function restaurantBill(input){
    //if it is not a number filter the array and assign it to the items array
    let items = input.filter(x => !Number(x));

    //if the item in the input is number, map it to number and reduce by summing all items
    let sum = input.filter(x => Number(x))
        .map(Number)
        .reduce((a, b) => a + b);

    console.log(`You purchased ${items.join(", ")} for a total sum of ${sum}`);
}

restaurantBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);