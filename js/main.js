var demo = document.querySelector(".demo");
var start = document.querySelector("button.start");
var stop = document.querySelector("button.stop");
var intervalId;

start.addEventListener("click", function () {
    var running = true;
    clearInterval(intervalId);
    c =0;
    intervalId = setInterval(function () {
        if (running) {
            demo.textContent = c++;
            stop.addEventListener("click", function () {
                running = false;
            })
        }
    },100);
});


var btn = document.querySelector(".sizer");
var input = document.querySelector(".inputt");
var number = document.querySelector('.number');

btn.addEventListener("click", function(e) {
    e.preventDefault();
    number.textContent = input.value; // Use 'input' instead of 'inputt'
});