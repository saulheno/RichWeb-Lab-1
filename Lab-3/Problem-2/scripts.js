const { Observable, fromEvent, range, map } = rxjs;

const startButton = document.querySelector(".start");

const setTime = 10;

const timing = fromEvent(startButton, 'click');
timing.subscribe(timer);

function timer() {
    console.log("In func")
    count = 1
    curr = 0;
    while( count = 1 && curr != setTime ) {
        console.log("In while")
        setTimeout(function() {
            console.log("In func")
            curr = curr + 1;
            time = setTime - curr;
            console.log(time);
        }, 1000)
        
    }
}