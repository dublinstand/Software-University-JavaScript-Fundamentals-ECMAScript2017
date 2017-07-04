//You have been tasked to follow the sales of products in the different towns.
// For every town you need to keep track of all the products sold, and for every product, the amount of total income.
//   The input comes as array of strings. Each element will represent data about a product and its sales. The format of input is:
//{town} -> {product} -> {amountOfSales} : {priceForOneUnit}
//The town and product are both strings.
// The amount of sales and price for one unit will be numbers. Store all towns, for every town, store its products, and for every product,
// its amount of total income. The total income is calculated with the following formula - amount of sales * price for one unit.
// If you receive as input a town you already have, you should just add the new product to it.
//As output you must print every town, its products and their total income in the following format:
//“Town – {townName}
//$$${product1Name} : {productTotalIncome}
//$$${product2Name} : {productTotalIncome}
//...”
//The order of output for each of those entries is – by order of entrance.

function cityMarkets(input) {
    let townsWithProducts = new Map();

    for (let sale of input) {
        [town, product, quantityPrice] = sale.split(/\s*->\s*/);
        [amountOfSales, priceForUnit] = quantityPrice.split(/\s*:\s*/);

        //if the townsWithProducts does not have the key town, create new empty Map
        if (!townsWithProducts.has(town)) {
            townsWithProducts.set(town, new Map());
        }

        //this is the initial income
        let income = amountOfSales * priceForUnit;

        //this is the old income if it exists, it will return false if there no product for the town
        let oldIncome = townsWithProducts.get(town).get(product);

        //if there is old income existing in townsWithProduct for that product, add it to the income
        if (oldIncome) {
            income += oldIncome;
        }

        //create the Map with key = product and value = income, if there is product with income, it overwrites the existing one
        townsWithProducts.get(town).set(product, income);
    }

    let print='';

    //printing by getting the index and value from townsWithProducts
    //then get the product and price from the Map using townsWithProducts.get(index)
    for (let [index, value] of townsWithProducts){
        print+=(`Town - ${index}\n`);
        for (let [product, price] of townsWithProducts.get(index)){
            print+=(`$$$${product} : ${price}\n`);
        }
    }
    return print;
}

console.log(cityMarkets([
    `Sofia -> Laptops HP -> 200 : 2000`,
    `Sofia -> Raspberry -> 200000 : 1500`,
    `Sofia -> Audi Q7 -> 200 : 100000`,
    `Montana -> Portokals -> 200000 : 1`,
    `Montana -> Qgodas -> 20000 : 0.2`,
    `Montana -> Chereshas -> 1000 : 0.3`

]));