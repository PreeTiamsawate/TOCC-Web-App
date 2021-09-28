// Get CURRENT TIME--------------------------------------------
const timeZoneSwitch = document.querySelector("#timezone-switch");
const timeZoneDisplays = document.querySelectorAll(".time-zone-display");
const getTwoDigit = function (num) {
  return ("0" + num).slice(-2);
};
const getCurrentTime = function () {
  let d = new Date();
  let hoursLocalNow = getTwoDigit(d.getHours());
  let hoursUTCNow = getTwoDigit(d.getUTCHours());
  let minutesLocalNow = getTwoDigit(d.getMinutes());
  let minutesUTCNow = getTwoDigit(d.getUTCMinutes());
  let timeNow;
  // console.log(getTwoDigit(11));
  // console.log(minutesLocalNow);

  if (timeZoneSwitch.checked) {
    return (timeNow = hoursUTCNow + ":" + minutesUTCNow);
  } else {
    return (timeNow = hoursLocalNow + ":" + minutesLocalNow);
  }
};
const getTimeZone = function () {
  if (timeZoneSwitch.checked) {
    return "UTC";
  } else {
    return "LT";
  }
};

// STAFF STBY MODAL CONTROL----------------------------

const staffStbyUpdateBtn = document.querySelector("#STAFF_STBY_UPDATE_BTN");
// const staffStbyStartNow = document.querySelector("#STAFF_STBY_START_NOW");
const staffStbyHourIncrement = document.querySelector(
  "#STAFF_STBY_HOUR_INCREMENT"
);
const staffStbyMinuteIncrement = document.querySelector(
  "#STAFF_STBY_MINUTE_INCREMENT"
);
const staffStbyHourDecrement = document.querySelector(
  "#STAFF_STBY_HOUR_DECREMENT"
);
const staffStbyMinuteDecrement = document.querySelector(
  "#STAFF_STBY_MINUTE_DECREMENT"
);

let staffStbyHour = document.querySelector("#STAFF_STBY_HOUR");
let staffStbyMinute = document.querySelector("#STAFF_STBY_MINUTE");
const staffStbyStartBtn = document.querySelector("#STAFF_STBY_START_BTN");
const staffStbyConfirmModal = document.querySelector(
  "#STAFF_STBY_CONFIRM_MODAL"
);

staffStbyConfirmTime = document.querySelector("#STAFF_STBY_CONFIRM_TIME");

staffStbyUpdateBtn.addEventListener("click", function () {
  // staffStbyStartNow.innerText = getCurrentTime();
  staffStbyHour.value = getCurrentTime().substring(0, 2);
  staffStbyMinute.value = getCurrentTime().substring(3, 5);
  staffStbyConfirmModal.classList.add("d-none");
  for (let timeZoneDisplay of timeZoneDisplays) {
    timeZoneDisplay.innerText = getTimeZone();
  }
});
const wrapTime = function () {
  if (Number(staffStbyHour.value) > 23) {
    staffStbyHour.value = "00";
  }
  if (Number(staffStbyHour.value) < 00) {
    staffStbyHour.value = "23";
  }
  if (Number(staffStbyMinute.value) > 59) {
    staffStbyMinute.value = "00";
  }
  if (Number(staffStbyMinute.value) < 00) {
    staffStbyMinute.value = "59";
  }
};
staffStbyHourIncrement.addEventListener("click", function (e) {
  staffStbyHour.value = getTwoDigit(Number(staffStbyHour.value) + 1);
  wrapTime();
  e.preventDefault();
});
staffStbyMinuteIncrement.addEventListener("click", function (e) {
  staffStbyMinute.value = getTwoDigit(Number(staffStbyMinute.value) + 1);
  wrapTime();
  e.preventDefault();
});
staffStbyHourDecrement.addEventListener("click", function (e) {
  staffStbyHour.value = getTwoDigit(Number(staffStbyHour.value) - 1);
  wrapTime();
  e.preventDefault();
});
staffStbyMinuteDecrement.addEventListener("click", function (e) {
  staffStbyMinute.value = getTwoDigit(Number(staffStbyMinute.value) - 1);
  wrapTime();
  e.preventDefault();
});
staffStbyStartBtn.addEventListener("click", function (e) {
  e.preventDefault();
  staffStbyConfirmModal.classList.remove("d-none");
  staffStbyConfirmTime.innerText =
    staffStbyHour.value + ":" + staffStbyMinute.value;
});
