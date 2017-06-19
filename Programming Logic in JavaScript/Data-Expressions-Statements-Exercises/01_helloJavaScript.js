//Write a JS function that can receive a name as input and print a greeting to the console.
//The input comes as array of strings with one element that is the name of the person.
//The output should be printed to the console.

function helloJavaScript(input){
    let name = input[0];
    console.log(`Hallo, ${name}, I am JavaScript!`);
}

helloJavaScript(['Pesho']);
helloJavaScript(['Bill Gates']);

