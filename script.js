let start = document.getElementById("start");
let stop = document.getElementById("stop");
let startColor = document.getElementById("start2");
let stopColor = document.getElementById("stop2");
let intervalFunctionBG;
let intervalFunction;
let eventfunctionBG = function () {
  intervalFunctionBG = setInterval(function () {
    let a = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let c = Math.floor(Math.random() * 255);
    document.body.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
  }, 1000);
};
start.addEventListener("click", eventfunctionBG, false);
stop.addEventListener(
  "click",
  () => {
    clearInterval(intervalFunctionBG);
  },
  false
);
let eventfunction = function () {
  intervalFunction = setInterval(function () {
    let a = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let c = Math.floor(Math.random() * 255);
    document.body.style.color = `rgb(${a}, ${b}, ${c})`;
  }, 1000);
};
startColor.addEventListener("click", eventfunction, false);
stopColor.addEventListener(
  "click",
  () => {
    clearInterval(intervalFunction);
  },
  false
);
