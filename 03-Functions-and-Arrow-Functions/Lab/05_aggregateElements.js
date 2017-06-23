//Write a JS program that performs and outputs different operations on an array of elements. Implement the following operations:
//•	Sum(ai) - calculates the sum all elements from the input array
//•	Sum(1/ai) - calculates the sum of the inverse values (1/ai) of all elements from the array
//•	Concat(ai) - concatenates the string representations of all elements from the array
//The input comes as an array of elements that must be parsed as numbers, where necessary.
//The output should be printed on the console on a new line for each of the operations.


function aggregateElements(input){
    let elements = input.map(Number);

    aggregate(elements, 0, (a, b) => a + b);
    aggregate(elements, 0, (a, b) => a + 1 / b);
    //if we have '' as initVal, then the value is recognized as a string and all the numbers as well
    //that's why they are concatenated
    aggregate(elements, '',(a, b) => a + b );

    function aggregate(arr, initVal, func){
        let val = initVal;

        for (let i = 0; i < arr.length; i++) {
            val = func(val, arr[i]);
        }
        console.log(val);
    }
}

aggregateElements(['1', '2', '3']);
aggregateElements(['2', '4', '8', '16']);



