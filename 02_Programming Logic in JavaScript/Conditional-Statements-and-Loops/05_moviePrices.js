//Write a JS function that calculate the ticket price by movie title and day of week.
//The input comes as array of 2 strings. The first string holds the movie title. The second string holds the day of week.
//The output should hold the ticket price or “error” if the title or day of week is invalid.


function moviePrices([movie, day]) {
    movie = movie.toLowerCase();
    day = day.toLowerCase();
    let price = 0;

    if (movie == "the godfather") {
        switch (day) {
            case "monday":
                price = 12;
                break;
            case "tuesday":
                price = 10;
                break;
            case "wednesday":
                price = 15;
                break;
            case "thursday":
                price = 12.50;
                break;
            case "friday":
                price = 15;
                break;
            case "saturday":
                price = 25;
                break;
            case "sunday":
                price = 30;
                break;
            default:
                throw new Error("Unknown day of week")
        }

    }
    else if (movie == "schindler's list") {
        switch (day) {
            case "monday":
                price = 8.50;
                break;
            case "tuesday":
                price = 8.50;
                break;
            case "wednesday":
                price = 8.50;
                break;
            case "thursday":
                price = 8.50;
                break;
            case "friday":
                price = 8.50;
                break;
            case "saturday":
                price = 15;
                break;
            case "sunday":
                price = 15;
                break;
            default:
                throw new Error("Unknown day of week")
        }
    }
    else if (movie == "casablanca") {
        switch (day) {
            case "monday":
                price = 8;
                break;
            case "tuesday":
                price = 8;
                break;
            case "wednesday":
                price = 8;
                break;
            case "thursday":
                price = 8;
                break;
            case "friday":
                price = 8;
                break;
            case "saturday":
                price = 10;
                break;
            case "sunday":
                price = 10;
                break;
            default:
                throw new Error("Unknown day of week")
        }
    }
    else if (movie == "the wizard of oz") {
        switch (day) {
            case "monday":
                price = 10;
                break;
            case "tuesday":
                price = 10;
                break;
            case "wednesday":
                price = 10;
                break;
            case "thursday":
                price = 100;
                break;
            case "friday":
                price = 10;
                break;
            case "saturday":
                price = 15;
                break;
            case "sunday":
                price = 15;
                break;
            default:
                throw new Error("Unknown day of week")
        }
    }
    else {
        throw new Error("Movie is unknown")
    }

    console.log(price);
}

moviePrices(['The Godfather', 'Friday']);
moviePrices(['casablanca', 'sunday']);
moviePrices(['Schindler\'s LIST', 'monday']);
moviePrices(['SoftUni', 'Nineday']);
moviePrices(['casablanca', 'Nineday']);

