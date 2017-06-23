//Write a JS function that determines whether a point is inside the volume, defined by the box, shown on the right.
//The input comes as an array of string elements that need to be parsed as numbers. Each set of 3 elements are the x, y and z coordinates of a point.
//The output should be printed to the console on a new line for each point. Print inside if the point lies inside the volume and outisde otherwise.


function checkInside(input) {

    for (let i = 0; i < input.length; i += 3) {
        let x = input[i];
        let y = input[i + 1];
        let z = input[i + 2];

        if (inVolume([x, y, z])) {
            console.log("inside");
        }
        else{
            console.log("outside")
        }
    }


    function inVolume([x, y, z]) {
        [x, y, z] = [x, y, z].map(Number);

        [x1, y1, z1] = [10, 20, 15];
        [x2, y2, z2] = [50, 80, 50];

        if (x >= x1 && x <= x2) {
            if (y >= y1 && y <= y2) {
                if (z >= z1 && z <= z2) {
                    return true
                }
            }
        }

        return false;
    }
}

checkInside([8, 20, 22]);
checkInside([13.1, 50, 31.5, 50, 80, 50, -5, 18, 43]
);

