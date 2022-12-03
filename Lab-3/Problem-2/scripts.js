const { Observable, fromEvent, range, map } = rxjs;

const startButton = document.querySelector(".start");
timerArea = document.querySelector(".TimerArea");
var setTime = 0;

const timing = fromEvent(startButton, 'click');
timing.subscribe(timer);

function timer() {
    clearInterval(interval)
    count = 0
    hour = document.getElementById("H").value
    hourInSecs = hour * 3600
    minute = document.getElementById("M").value
    minInSecs = minute * 60
    secs = document.getElementById("S").value
    setTime = hourInSecs + minInSecs + secs
    console.log(hour, minute, secs)
    console.log(setTime)
    curr = 0;
    count = 1
    var interval = setInterval(function() {
        console.log("In func")
        curr = curr + 1;
        time = setTime - curr;
        console.log(time);

        hour = Math.floor(time / 3600)
        secs = time - (hour * 3600)
        minute = Math.floor(secs / 60)
        secs = secs - (minute * 60)

        document.getElementById('timeDisplay').innerHTML = hour + ":" + minute + ":" + secs;
        if( count == 0 || curr == setTime){
            clearInterval(interval)
        }
    }, 1000)
        
    }
