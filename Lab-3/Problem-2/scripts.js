const { Observable, fromEvent, range, map } = rxjs;

const startButton = document.querySelector(".start");

var setTime = 0;

const timing = fromEvent(startButton, 'click');
timing.subscribe(timer);

function timer() {
    hour = document.getElementById("H").value
    hourInSecs = hour * 3600
    minute = document.getElementById("M").value
    minInSecs = minute * 60
    secs = document.getElementById("S").value
    setTime = hourInSecs + minInSecs + secs
    console.log(hour, minute, secs)
    console.log(setTime)
    count = 1
    curr = 0;
    var interval = setInterval(function() {
        console.log("In func")
        curr = curr + 1;
        time = setTime - curr;
        console.log(time);
        if( count == 0 || curr == setTime){
            clearInterval(interval)
        }
    }, 1000)
        
    }
