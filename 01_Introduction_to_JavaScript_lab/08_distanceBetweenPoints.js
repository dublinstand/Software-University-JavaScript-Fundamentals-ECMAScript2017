//Write a JS function that calculates the distance between two points by given x and y coordinates. Use objects to store the two points.
//The input comes as array of four string elements in the format [x1, y1, x2, y2] that need to be parsed as numbers.
// Each pair of elements are the coordinates of a point in 2D space.


function distanceBetweenPoints([x1, y1, x2, y2]){
    let a = Math.abs(x1 - x2);
    let b = Math.abs(y1 - y2);
    let c = Math.sqrt(a * a + b * b);

    console.log(c);
    return c;
}

distanceBetweenPoints(['2.34', '15.66', '-13.55', '-2.9985']);
