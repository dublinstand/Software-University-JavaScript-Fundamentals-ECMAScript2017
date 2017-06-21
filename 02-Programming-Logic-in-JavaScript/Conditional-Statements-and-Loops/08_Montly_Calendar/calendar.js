function calendar([day, month, year]) {
    [day, month, year] = [day, month, year].map(Number);

    //note that the day shows with one day less, then it will be shown firstDay will be shown as 25th, but will be printed as 26th
    let firstDay = new Date(year, month - 1, 1);
    let firstDateOfCalendar = new Date(firstDay);

    //from today's date we subtract (-) the day of the week, so that we can have the date in the calendar in the previous month
    firstDateOfCalendar.setDate(firstDateOfCalendar.getDate() - firstDateOfCalendar.getDay());

    let lastDateOfCalendar = new Date(firstDay);
    lastDateOfCalendar.setMonth(lastDateOfCalendar.getMonth() + 1);
    lastDateOfCalendar.setDate(0);

    lastDateOfCalendar.setDate(lastDateOfCalendar.getDate() + 6 - lastDateOfCalendar.getDay());

    let html = '<table>\n';
    html += '<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n';

    for (let i = firstDateOfCalendar; i <= lastDateOfCalendar; i.setDate(i.getDate() + 1)) {

        //check if it is sunday, and create new line
        if (i.getDay() == 0) {
            html += '<tr>';
        }

        html += `<td>${i.getDate()}</td>`;

        //if it Sunday close </tr>
        if (i.getDay() == 6) {
            html += '</tr>';
        }
    }

    html += '</table>';
    return html;
}

calendar(['4', '9', '2016']);