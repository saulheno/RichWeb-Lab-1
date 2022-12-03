const { Observable, fromEvent, range, map } = rxjs;

const startButton = document.querySelector(".start");

const time = 10;

const timing = fromEvent(startButton, 'click');
const subscription = timing
    .range(0, time)
    .map(curr => time - curr)
    .subscribe(curr => console.log(curr));