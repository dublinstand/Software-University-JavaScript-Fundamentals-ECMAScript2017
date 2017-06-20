//Write a JS function to print a chessboard of size n X n. See the example for more information.
//The input comes as array of one string element, holding the number n.


function chessBoard([n]) {
    let html = '<div class = "chessboard">\n';
    let color = "black";

    for (let row = 1; row <= n; row++) {
        html += "\t<div>\n";

        for (let column = 1; column <= n; column++) {
            html += `\t\t<span class = ${color}></span>\n`;

            //if the color is white, - make it black, otherwise make it white
            color = (color == "white") ? "black" : "white"
        }
        html += "\t</div>\n";
        // if n i even, do another chek
        if(n % 2 == 0){
            color = (color == "white") ? "black" : "white"
        }
    }
    html += "</div>";
    return html;
}

//console.log(chessBoard([3]));
