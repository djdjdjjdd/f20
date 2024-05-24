// tinh khoang thoi gian chenh lech giua countDowDate va current Date => distance
// bien doi distance => YYYY-MM-DD
// hien thi len man hinh 


// set the date we are counting down to
var countDownDate = new Date("2023-12-07 21:00:00").getTime();

var x = setInterval(
    function () {

        // get today's date and time
        var now = new Date().getTime();

        // find the distance between now and the count dow date
        var distance = countDownDate - now;

        // time calculations for days, hours, minutes and seconds
        // math-xu li cac tac vu lien quan den toan hoc
        // math.floor- lam tron xuong
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60*60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        // display the result in the element with id='demo'
        document.getElementById('demo').innerHTML = days + "d" + hours + 'h' + minutes + 'm' + seconds + 's';
        // if the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById('demo').innerHTML = 'EXPIRED';
        }

    },
    1000
)