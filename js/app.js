let calculate = {
    pay: [],
    hours: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    days: [1, 2, 3, 4, 5, 6, 7],
    week: [],
    month: [],
    salary: [],
    filled: false
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
//HOURLY PAY
//Click the buttons available on the app to be able to type out your hourly pay.
//All of the values will go to calculate.pay 
function insert(num) {

    let $num = $('#inputOutput').val() + num;

    if (calculate.filled == false) {
        $('#inputOutput').val($num)

        pay = calculate.pay;
        pay.push(num);

        return num;
    } else {
        $('#inputOutput').val()
    }
};

//This will take the calculate.pay indexes, join them as one, and hold the hourly pay
function hourPay() {
    let payment = 0;

    payment = pay.join('');

    console.log(`Hourly Pay: $${payment}`)
    return parseFloat(payment);

};

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

//HOURS WORKED
// Select how many hours a user worked
// This allows the hours to be shown when selected
function showHours() {
    let $hours = parseInt($('#inputHours').val());

    $('#inputHours').on('keyup mouseup', (e) => {


        return $hours;
    });

    return $hours;
};

// This function compares what you selected to the calculate.hours arrays and holds the hour(s) that was selected in the app
function hoursWrk() {
    let hours = calculate.hours;

    for (i = 0; i < hours.length; i++) {
        if (showHours() === hours[i]) {
            console.log(`Hours Worked: ${hours[i]} hr(s)`);
            return hours[i];
        }
    }
};


//This will prevent users from typing in the "Hours worked input box"
$('#inputHours').keypress(function () {
    e.preventDefault();
});

//-----------------------------------------------------------------------------------------------------------------------

//DAYS WORKED
// Select how many days a user worked
function showDays() {
    let $days = parseInt($('#inputDays').find(":selected").val());

    $('#inputDays').on('change', (e) => {

        return $days;
    });

    return $days
};

// This function compares what you selected to the calculate.days arrays and holds the day(s) that was selected in the app
function daysWrk() {
    let days = calculate.days;

    for (i = 0; i < days.length; i++) {
        if (showDays() === days[i]) {
            console.log(`Days Worked: ${days[i]} day(s)`);
            return days[i];
        }
    }
};

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

// WEEK HOURS
// This takes both daysWrk() & hoursWrk() functions to be multiplied and holds the amount of hours a user works a week
function weekHours() {
    let week = calculate.week;

    week.push(daysWrk() * hoursWrk());

    console.log(`Hours Worked in a week: ${week}hr(s)`)
    return week[0];
};

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

// MONTHLY PAY
// This takes both weekHours() & hourPay() functions to be multiplied and holds how much a user makes a month
function monthPay() {
    let month = calculate.month;

    month.push((weekHours() * hourPay()) * 4);

    console.log(`Monthly Pay: $${month.toLocaleString()}`)
    return month[0];
};

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

// SALARY / ENTER BUTTON
// This takes monthPay() & multiplies it by 12, holds how much a user makes a month, and displays it on the app.
function salary() {
    let salary = calculate.salary;

    salary.push(monthPay() * 12);
    
    for (i = 0; i <= salary.length; i++){
        if (salary >= 1000) {
            
        }
    }

    calculate.filled = true;

    console.log(`Salary: $${salary.toLocaleString()}`)
    return $('#inputOutput').val(`$${salary.toLocaleString()}`);
};


//-------------------------------------------------------------------------------------------------------------------------------------------------------------

//DELETE BUTTON
// Delete the values that were inserted
function del() {
    let del = $('#inputOutput').val();
    $('#inputOutput').val(del.substring(0, del.length - 1));

    let pay = calculate.pay;
    pay.pop();
};


//CLEAR BUTTON
// Clears calculator of previous Salary
function clr() {
    let clr = $('#inputOutput').val();
    $('#inputOutput').val('');

    let pay = calculate.pay;
    pay.splice(0, pay.length);

    let salary = calculate.salary;
    salary.splice(0, salary.length);
    
    let week = calculate.week;
    week.splice(0, week.length);
    
    let month = calculate.month;
    month.splice(0, month.length);

    calculate.filled = false;
};
