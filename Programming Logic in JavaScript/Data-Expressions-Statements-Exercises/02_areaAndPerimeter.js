//Write a JS function that calculates the area and perimeter of a rectangle by given two sides.
//    The input comes as array of strings that need to be parsed as numbers.

function calculateAreaAndPerimeter([a, b]){
    a = Number(a);
    b = Number(b);
    let perimeter = 2 * a + 2 * b;
    let area = a * b;

    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}

calculateAreaAndPerimeter([2,2]);
calculateAreaAndPerimeter([1,3]);
calculateAreaAndPerimeter([2.5,3.14]);