//Write a JS function that orders a given array of strings, by length in ascending order as primary criteria,
//and by alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.
//
//The input comes as array of strings.
//The output is the ordered array of strings.


function sortArrayBy2Criteria(array){

    // default sort is alphabetical and ascending order
    let x = array.sort().sort((a, b)=> a.length > b.length);

    console.log(x.join('\n'))
}

sortArrayBy2Criteria(['test', 'Deny', 'omen', 'Default']);