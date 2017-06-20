//Write a JS function that calculates circle area by given radius. Print the area as it is calculated and then print it rounded to two decimal places.
//    The input comes as array of one string element, holding a number.
//    The output should be printed to the console on a new line for each result.


function circleArea(r){
    let area =  Math.PI * r * r;
    console.log(area);
    //to round the area until second decimal (21.21)
    let areaRounded = Math.round(area * 100) / 100;
    console.log(areaRounded)
}

circleArea(5);
