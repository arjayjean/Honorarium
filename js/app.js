let calculate = {
    pay: [],
    hours: [],
    days: [],
    salary: 0
};

//Click the buttons available on the app to be able to type out your hourly pay
function insert(val) {
    let $num = $('#inputOutput').val() + val;

    $('#inputOutput').val($num)
    console.log(`Hourly pay: $${$num}`);
    
    calculate.pay.push($num)
    console.log(calculate.pay.push($num));

    return $num;
};


// Select how many hours a user worked
function hoursWrk(hrs) {
    $('#inputHours').on('keyup mouseup', () => {
        hrs = $('#inputHours').val();
        console.log(`Hours worked: ${hrs} hour(s)`);

        calculate.hours.push(hrs)
        console.log(calculate.hours.push(hrs));
        console.log(calculate.hours);


        return hrs;
    })
};

hoursWrk();

$('#inputHours').keypress(function (e) {
    e.preventDefault();
});


// Select how many days a user worked
function daysWrk(days) {
    $('#inputDays').change(() => {
        let $selectedDay = $('#inputDays option:selected');
        days = $selectedDay.val();
        console.log(days);
        console.log(`Days worked: ${days} day(s)`);
        return days;
    })
};


daysWrk();

// Calculates the day, hours, and hourly pay to get your yearly salary

function salary(results) {

};

salary();


