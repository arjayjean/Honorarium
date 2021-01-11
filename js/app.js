let calculate = {
    pay: [],
    hours: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    days: [1, 2, 3, 4, 5, 6, 7],
    week: [],
    month: [],
    salary: []
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
//HOURLY PAY
//Click the buttons available on the app to be able to type out your hourly pay.
//All of the values will go to calculate.pay object
function insert(num) {

    let $num = $('#inputOutput').val() + num;

    $('#inputOutput').val($num)

    pay = calculate.pay;
    pay.push(num);

    return num;
};

//This will take the calculate.pay object, join the values, and hold the hourly pay
function hourPay() {
    let payment = 0;

    payment = pay.join('');

    console.log(`Hourly Pay: $${payment}`)
    return parseFloat(payment);

};

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

//HOURS WORKED
// Select how many hours a user worked
function showHours() {
    let $hours = parseInt($('#inputHours').val());

    $('#inputHours').on('keyup mouseup', (e) => {


        return $hours;
    });

    return $hours;
};


function hoursWrk() {
    let hours = calculate.hours;

    for (i = 0; i < hours.length; i++) {
        if (showHours() === hours[i]) {
            console.log(`Hours Worked: ${hours[i]}`);
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

function daysWrk() {
    let days = calculate.days;

    for (i = 0; i < days.length; i++) {
        if (showDays() === days[i]) {
            console.log(`Days Worked: ${days[i]}`);
            return days[i];
        }
    }
};

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

// WEEK HOURS
// This takes both daysWrk() & hoursWrk() functions to be multiplied
function weekHours() {
    let week = calculate.week;

    week.push(daysWrk() * hoursWrk());

    console.log(`Hours Worked in a week: ${week}hr(s)`)
    return week[0];
};

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

// MONTHLY PAY
// This takes both weekHours() & hourPay() functions to be multiplied
function monthPay() {
    let month = calculate.month;

    month.push((weekHours() * hourPay()) * 4);

    console.log(`Monthly Pay: $${month}`)
    return month[0];
};

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

// SALARY
// This takes monthPay() & multiplies it by 12
function salary() {
    let salary = calculate.salary;

    salary.push(monthPay() * 12);

    console.log(`Salary: $${salary}`)
    return salary[0];
};


//-------------------------------------------------------------------------------------------------------------------------------------------------------------

//DELETE BUTTON
// Delete the values that were inserted
function del() {
    let del = $('#inputOutput').val();
    $('#inputOutput').val(del.substring(0, del.length - 1));

    let pay = calculate.pay;
    pay.pop();
    console.log(pay);
};


//CLEAR BUTTON
// Clears calculator of previous Salary
function clear() {

    let clr = $('#inputOutput').val();
    $('#inputOutput').val(del.substring(0, del.length - 1));

    let pay = calculate.pay;
    pay.pop();
    // let pay = calculate.pay;
    // pay.pop();
    // console.log(pay);
};




