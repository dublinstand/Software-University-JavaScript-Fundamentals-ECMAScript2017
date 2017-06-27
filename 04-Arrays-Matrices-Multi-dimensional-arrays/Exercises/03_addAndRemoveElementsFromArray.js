//Write a JS function that adds and removes numbers to / from an array. You will receive a command which can either be �add� or �remove�.
//The initial number is 1. Each input command should increase that number, regardless of what it is.
//Upon receiving an �add� command you should add the current number to your array.
//Upon receiving the �remove� command you should remove the last entered number, currently existent in the array.
//
// The input comes as array of strings. Each element holds a command.
//The output is the array itself, with each element printed on a new line. In case of an empty array, just print �Empty�.



function addAndRemoveElementsFromArray(commands){
    let arr = [];


    for (let i = 0; i < commands.length; i++) {
        if(commands[i] == 'add'){
            arr.push(`${i + 1}`);
        }

        if(commands[i] == 'remove'){
            arr.pop();
        }
    }

    if(arr.length == 0){
        console.log('Empty');
        return;
    }

    console.log(arr.join("\n"))
}

addAndRemoveElementsFromArray(['add','add','add','add']);
addAndRemoveElementsFromArray(['add','add','remove','add','add']);
addAndRemoveElementsFromArray(['remove','remove','remove']);