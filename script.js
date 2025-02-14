let start = document.getElementById("start");
let stop = document.getElementById("stop");
let intervalFunction;

start.addEventListener(
  "click",
  function () {
    console.log("pressed");

    interval = setInterval(function () {
      let hexcode = Math.random().floor * 255;
      document.body.style.backgroundColor = `#${hexcode}`;
    }, 1);
  },
  false
);
