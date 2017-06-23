//Write a JS function that determines whether a driver is within the speed limit.
// You will receive his speed and the area where he’s driving.
// Each area has a different limit: on the motorway the limit is 130 km/h, on the interstate the limit is 90,
// inside a city the limit is 50 and within a residential area the limit is 20 km/h.
// If the driver is within the limits, your function prints nothing. If he’s over the limit however,
// your function prints the severity of the infraction. For speeds up to 20 km/h over the limit, he’s speeding;
// for speeds up to 40 over the limit, the infraction is excessive speeding and for anything else, reckless driving.
//
// The input comes as an array of string elements. The first element is the current speed and needs to be parsed as a number,
// the second element is the area where.
//The output should be printed to the console. Note in certain cases there will be no output.


function roadRadar([speed, place]){
    speed = Number(speed);

    let limit = Number(getSpeedAllowed(place));
    let penalty = getPenalty(speed, limit);

    if(penalty){
        console.log(penalty);
    }

    function getSpeedAllowed(place) {
        switch (place) {
            case "motorway":
                return 130;
            case "interstate":
                return 90;
            case "city":
                return 50;
            case "residential":
                return 20;
            default:
                throw new Error("Wrong place given!")
        }
    }

    function getPenalty(speed, limit){
        let overSpeed = speed - limit;

        if(overSpeed < 0){
            return false;
        }
        else{
            if(overSpeed < 20){
                return "speeding";
            }
            else if(overSpeed < 40){
                return "excessive speeding";
            }
            else {
                return "excessive driving"
            }
        }
    }
}

roadRadar([21, 'residential']);
roadRadar([40, 'city']);
roadRadar([120, 'interstate']);
roadRadar([200, 'motorway']);
