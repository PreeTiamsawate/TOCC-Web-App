let newHour = document.querySelector("#new-time-hour");
let newMinute = document.querySelector("#new-time-minute");
let estTime = document.querySelector(".ESTIMATED_TIME");
const hourIncreaseBtn = document.querySelector("#hour-increment");
const hourDecreaseBtn = document.querySelector("#hour-decrement");
const minuteIncreaseBtn = document.querySelector("#minute-increment");
const minuteDecreaseBtn = document.querySelector("#minute-decrement");
let estHH = estTime.innerText.substring(0, 2);
let estMM = estTime.innerText.substring(3, 5);
console.log(estMM);
newHour.value = estHH;
newMinute.value = estMM;
const wrapTime = function () {
  if (Number(newHour.value) > 23) {
    newHour.value = "00";
  }
  if (Number(newHour.value) < 00) {
    newHour.value = "23";
  }
  if (Number(newMinute.value) > 59) {
    newMinute.value = "00";
  }
  if (Number(newMinute.value) < 00) {
    newMinute.value = "59";
  }
};

hourIncreaseBtn.addEventListener("click", function (e) {
  newHour.value = Number(newHour.value) + 1;
  wrapTime();
  e.preventDefault();
});
hourDecreaseBtn.addEventListener("click", function (e) {
  newHour.value = Number(newHour.value) - 1;
  wrapTime();
  e.preventDefault();
});
minuteIncreaseBtn.addEventListener("click", function (e) {
  newMinute.value = Number(newMinute.value) + 1;
  wrapTime();
  e.preventDefault();
});
minuteDecreaseBtn.addEventListener("click", function (e) {
  newMinute.value = Number(newMinute.value) - 1;
  wrapTime();
  e.preventDefault();
});
