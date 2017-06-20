//Two objects start from point A and travel in the same direction at constant speeds V1 and V2 for a period T.
// Write a JS function that calculates the distance between the two object at the end of the period.
//The input comes as array of strings that need to be parsed as numbers.
//The first two elements are the speeds to the two objects in km/h and the third element is the time in seconds.
//The output should be printed to the console. Calculate the distance in meters.


function distanceOverTime([v1, v2, time]){
    v1 = Number(v1);
    v2 = Number(v2);
    time = Number(time) / 3600;

    let s1 = v1 * time;
    let s2 = v2 * time;
    let distance = Math.abs(s1 - s2);

    console.log(distance * 1000);
}

distanceOverTime([0, 60, 3600]);
distanceOverTime([11, 10, 120]);
distanceOverTime([5, -5, 40]);
