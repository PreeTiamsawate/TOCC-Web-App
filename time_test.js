console.log(Date().toString());
const x = Date.now();
console.log(x);
const date = new Date(1630997900000);
let hours = date.getHours();
console.log(`${date.getHours()}:${date.getMinutes()} `);

const timeStart = Date.parse("07 Sep 2021 13:59:59 GMT+0700");
console.log(timeStart);

const timeStop = Date.parse("07 Sep 2021 14:15:00 GMT+0700");
console.log(timeStop);

let timeDiff = timeStop - timeStart;
console.log(timeDiff);

const timeAlert = document.querySelector("h1");

if (timeDiff > 900000) {
  timeAlert.style.backgroundColor = "pink";
} else {
  timeAlert.style.backgroundColor = "green";
}

const countBar = document.querySelector("#count_bar");
const finishTime = Date.parse("07 Sep 2021 17:00:00 GMT+0700");

const countDown = function () {
  let timeDiff = finishTime - Date.now();
  let barWidth = (timeDiff / 900000) * 100;
  countBar.style.width = `${barWidth}%`;
};

countDown();
setInterval(countDown, 1000);
