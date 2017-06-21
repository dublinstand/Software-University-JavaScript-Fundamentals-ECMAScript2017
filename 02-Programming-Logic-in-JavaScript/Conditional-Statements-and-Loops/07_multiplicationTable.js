//Write a JS function to print a math multiplication table of size n, formatted as HTML table.
//The input comes as array of strings. Its first element holds the number n (0 < n < 100).
//The output consists of n+3 text lines like shown below.

function multiplicationTable(input) {
    let size = Number(input[0]);

    let html = "<table border='1'>\n";
    html += "<tr><th>x</th>";

    for (let i = 1; i <= size; i++) {
        html += `<th>${i}</th>`;
    }
    html += "</tr>\n";

    for (let row = 1; row <= size; row++) {
        html += `<tr>`;

        for (let col = 1; col <= size; col++) {

            if (col == 1) {
                html += `<th>${col * row}</th>`;
            }

            html += `<td>${col * row}</td>`;
        }

        html += "</tr>\n";
    }

    console.log(html);
    return html;
}

multiplicationTable(['5']);

//you can see in the browser by executing:
//document.body.innerHTML = multiplicationTable(['5']);