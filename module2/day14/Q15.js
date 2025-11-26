let seconds = Number(prompt("Enter number of seconds for the countdown:"));

let timerId = setInterval(() => {
    console.log("Time left:", seconds);
    seconds--;

    if (seconds < 0) {
        clearInterval(timerId);
        console.log("Countdown Complete!");
    }
}, 1000);

setTimeout(() => {
    document.addEventListener("keydown", function (event) {
        if (event.key === "s") {
            clearInterval(timerId);
            console.log("Countdown stopped by user!");
        }
    });
}, 500); 