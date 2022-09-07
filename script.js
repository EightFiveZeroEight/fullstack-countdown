let timeRemaining = 5;
let timer = document.getElementById("timer");

function countdown () {
    timeRemaining = timeRemaining -1;
    if (timeRemaining <=0) {
        timer.innerText ="Time is up!"
    } else {
        timer.innterText = timeRemaining;
    }
}

setInterval(countdown, 1000)