//Write a JS function that calculates a triangle’s area by its 3 sides.
//    The input comes as array of three string elements, each holding a number, representing one side of a triangle.
//    The output should be printed to the console.

function triangleArea([a, b, c]){
    //mapping the strings from an array to number
    [a, b, c] = [a, b, c].map(Number);

    let sp = (a + b + c) / 2;
    let area = Math.sqrt(sp * (sp - a)*(sp - b)*(sp - c));
    console.log(area);
    return area;
}

triangleArea([2, 3.5, 4]);
