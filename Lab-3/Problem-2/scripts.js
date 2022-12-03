const { Observable, fromEvent, range, map } = rxjs;

const startButton = document.querySelector(".start");

const setTime = 0;

const timing = fromEvent(startButton, 'click');
timing.subscribe(timer);

function timer() {
    hour = document.getElementById("H").value
    minute = document.getElementById("M").value
    secs = document.getElementById("S").value
    console.log(hour, minute, secs)
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
