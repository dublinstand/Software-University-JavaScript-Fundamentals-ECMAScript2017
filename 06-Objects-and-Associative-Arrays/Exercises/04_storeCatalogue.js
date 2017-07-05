//You have to create a sorted catalogue of store products. You will be given the products� names and prices.
// You need to order them by alphabetical order.
//The input comes as array of strings. Each element holds info about a product in the following format:
//�{productName} : {productPrice}�
//The product�s name will be a string, which will always start with a capital letter, and the price will be a number.
//You can safely assume there will be NO duplicate product input. The comparison for alphabetical order is case-insensitive.
//As output you must print all the products in a specified format. They must be ordered exactly as specified above.
//The products must be divided into groups, by the initial of their name. The group�s initial should be printed, and after
//that the products should be printed with 2 spaces before their names. For more info check the examples.

function storeCatalogue(input){
    let catalogue = new Map;

    for (let i = 0; i < input.length; i++) {
        let current = input[i].split(':');

        let productName = current[0];
        let productPrice = Number(current[1]);

        //because we want to sort them by product letter, we need to create a map in catalogue
        let productFistLetter = productName[0];


        //if there is no first letter, add the first letter ot the catalogue and create new map
        //where to store each product with its price
        if (!catalogue.has(productFistLetter)) {

            catalogue.set(productFistLetter, new Map())
        }

        //if there is a product first letter, but no product name in the second map, set the product name
        if (!catalogue.get(productFistLetter).has(productName)) {
            catalogue.get(productFistLetter).set(productName, 0)
        }
        catalogue.get(productFistLetter).set(productName, productPrice)
    }

    //function for sorting alphabetically
    function alphabeticalSort(a, b) {
        return a[0].localeCompare(b[0])
    }

    //first sort them alphabetically by first letter, by creating an array for the catalogue
    let sortedInitials = [...catalogue].sort(alphabeticalSort);

    for (let [key,value]of sortedInitials) {
        //log the key which will be the letter for each map
        console.log(key);

        //sort alphabetically the value map by creating an array
        let sortedProducts = [...value].sort(alphabeticalSort);

        //print for each product and price in the sortedProducts
        for (let [products,price] of sortedProducts) {
            console.log("  " + products.trim() + ": " + price);
        }
    }
}

storeCatalogue([
   'Appricot : 20.4',
   'Fridge : 1500',
   'TV : 1499',
   'Deodorant : 10',
   'Boiler : 300',
   'Apple : 1.25',
   'Anti-Bug Spray : 15',
   'T-Shirt : 10'
]);