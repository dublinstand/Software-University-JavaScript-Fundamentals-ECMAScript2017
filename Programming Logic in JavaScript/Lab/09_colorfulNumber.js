//Write a JS function to print the numbers from 1 to n. Return a string holding HTML list with the odd lines in blue and even lines in green. See the example for more information.
//    The input comes as array of one string element, holding the number n.
//    The output should be returned as a result of your function in the form of a string.

function colorfulNumber(n){
    let html = "<ul>\n";

    for(let i = 1; i <= n; i++){
        let color = (i % 2 == 0) ? "green" : "blue";
        html += `<li><span style="color:${color}">${i}</span></li>\n`;
    }
    html += "</ul>";
    return html;
}

console.log(colorfulNumber(10));

//the function returns the html we generated, if we want to print it in the browser, go in console in google chrome (F12)
//document.body.innerHtml = colorfulNumber(10);
