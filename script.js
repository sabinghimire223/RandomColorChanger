let start = document.getElementById("start");
let stop = document.getElementById("stop");
let intervalFunction;
let eventfunction = function () {
  intervalFunction = setInterval(function () {
    let a = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let c = Math.floor(Math.random() * 255);
    document.body.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
  }, 1000);
};
start.addEventListener("click", eventfunction, false);
stop.addEventListener(
  "click",
  () => {
    clearInterval(intervalFunction);
  },
  false
);
