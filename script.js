var hr = 0;
var min = 0;
var sec = 0;
var millisec = 0;

var timer = false;
var laps = null;
var lapNow = null;

function start() {
    if (timer == true) {
        document.getElementById("start").disabled = true;
    }
    else {
        timer = true;
    }
    stopwatch();
}

function stop() {
    timer = false;
}

function reset() {
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    millisec = 0;

    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("millisec").innerHTML = "00";
}

function lap() {

    lapNow = hr + " : " + min + " : " + sec + " : " + millisec + " | ";
    laps = document.getElementById('lapRecord').innerHTML + lapNow;

    document.getElementById('lapRecord').innerHTML = laps;
}

function stopwatch() {
    if (timer == true) {
        millisec = millisec + 1;
        if (millisec == 100) {
            sec = sec + 1;
            millisec = 0;
        }
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }
        var hrString = hr;
        var minString = min;
        var secString = sec;
        var millisecString = millisec;

        if (hr < 10) {
            hrString = "0" + hrString;
        }
        if (min < 10) {
            minString = "0" + minString;
        }
        if (sec < 10) {
            secString = "0" + secString;
        }
        if (millisec < 10) {
            millisecString = "0" + millisecString;
        }
        document.getElementById("hr").innerHTML = hrString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("millisec").innerHTML = millisecString;
        setTimeout("stopwatch()", 10);
    }
}