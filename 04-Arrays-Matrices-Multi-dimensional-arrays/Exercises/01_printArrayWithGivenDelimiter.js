//Write a JS function that prints a given array.
//The input comes as array of strings. The last element of the array is the delimiter.
//The output is the same array, printed on the console, each element separated from the others by the given delimiter.



function printArrayWithGivenDelimiter(input){
    let delimiter = input[input.length - 1];

    let print = "";

    for (let i = 0; i < input.length -1; i++) {
        if (i === 0 ){
            print += input[i];
        }
        else{
           print += delimiter + input[i]
        }
    }

    console.log(print);
}

printArrayWithGivenDelimiter(['one', 'two', 'three', '=']);
