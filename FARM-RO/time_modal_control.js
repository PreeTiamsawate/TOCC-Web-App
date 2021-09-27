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

// LOADING START MODAL CONTROL----------------------------

const loadingStartUpdateBtn = document.querySelector(
  "#LOADING_START_UPDATE_BTN"
);
// const loadingStartStartNow = document.querySelector("#LOADING_START_START_NOW");
const loadingStartHourIncrement = document.querySelector(
  "#LOADING_START_HOUR_INCREMENT"
);
const loadingStartMinuteIncrement = document.querySelector(
  "#LOADING_START_MINUTE_INCREMENT"
);
const loadingStartHourDecrement = document.querySelector(
  "#LOADING_START_HOUR_DECREMENT"
);
const loadingStartMinuteDecrement = document.querySelector(
  "#LOADING_START_MINUTE_DECREMENT"
);

let loadingStartHour = document.querySelector("#LOADING_START_HOUR");
let loadingStartMinute = document.querySelector("#LOADING_START_MINUTE");
const loadingStartStartBtn = document.querySelector("#LOADING_START_START_BTN");
const loadingStartConfirmModal = document.querySelector(
  "#LOADING_START_CONFIRM_MODAL"
);

loadingStartConfirmTime = document.querySelector("#LOADING_START_CONFIRM_TIME");

loadingStartUpdateBtn.addEventListener("click", function () {
  // loadingStartStartNow.innerText = getCurrentTime();
  loadingStartHour.value = getCurrentTime().substring(0, 2);
  loadingStartMinute.value = getCurrentTime().substring(3, 5);
  loadingStartConfirmModal.classList.add("d-none");
  for (let timeZoneDisplay of timeZoneDisplays) {
    timeZoneDisplay.innerText = getTimeZone();
  }
});
const wrapTime = function () {
  if (Number(loadingStartHour.value) > 23) {
    loadingStartHour.value = "00";
  }
  if (Number(loadingStartHour.value) < 00) {
    loadingStartHour.value = "23";
  }
  if (Number(loadingStartMinute.value) > 59) {
    loadingStartMinute.value = "00";
  }
  if (Number(loadingStartMinute.value) < 00) {
    loadingStartMinute.value = "59";
  }
};
loadingStartHourIncrement.addEventListener("click", function (e) {
  loadingStartHour.value = getTwoDigit(Number(loadingStartHour.value) + 1);
  wrapTime();
  e.preventDefault();
});
loadingStartMinuteIncrement.addEventListener("click", function (e) {
  loadingStartMinute.value = getTwoDigit(Number(loadingStartMinute.value) + 1);
  wrapTime();
  e.preventDefault();
});
loadingStartHourDecrement.addEventListener("click", function (e) {
  loadingStartHour.value = getTwoDigit(Number(loadingStartHour.value) - 1);
  wrapTime();
  e.preventDefault();
});
loadingStartMinuteDecrement.addEventListener("click", function (e) {
  loadingStartMinute.value = getTwoDigit(Number(loadingStartMinute.value) - 1);
  wrapTime();
  e.preventDefault();
});
loadingStartStartBtn.addEventListener("click", function (e) {
  e.preventDefault();
  loadingStartConfirmModal.classList.remove("d-none");
  loadingStartConfirmTime.innerText =
    loadingStartHour.value + ":" + loadingStartMinute.value;
});

// LOADING_COMPLETED MODAL CONTROL----------------------------

const loadingCompletedUpdateBtn = document.querySelector(
  "#LOADING_COMPLETED_UPDATE_BTN"
);
// const loadingCompletedStartNow = document.querySelector("#LOADING_COMPLETED_START_NOW");
const loadingCompletedHourIncrement = document.querySelector(
  "#LOADING_COMPLETED_HOUR_INCREMENT"
);
const loadingCompletedMinuteIncrement = document.querySelector(
  "#LOADING_COMPLETED_MINUTE_INCREMENT"
);
const loadingCompletedHourDecrement = document.querySelector(
  "#LOADING_COMPLETED_HOUR_DECREMENT"
);
const loadingCompletedMinuteDecrement = document.querySelector(
  "#LOADING_COMPLETED_MINUTE_DECREMENT"
);

let loadingCompletedHour = document.querySelector("#LOADING_COMPLETED_HOUR");
let loadingCompletedMinute = document.querySelector(
  "#LOADING_COMPLETED_MINUTE"
);
const loadingCompletedStartBtn = document.querySelector(
  "#LOADING_COMPLETED_START_BTN"
);
const loadingCompletedConfirmModal = document.querySelector(
  "#LOADING_COMPLETED_CONFIRM_MODAL"
);

loadingCompletedConfirmTime = document.querySelector(
  "#LOADING_COMPLETED_CONFIRM_TIME"
);

loadingCompletedUpdateBtn.addEventListener("click", function () {
  loadingCompletedHour.value = getCurrentTime().substring(0, 2);
  loadingCompletedMinute.value = getCurrentTime().substring(3, 5);
  loadingCompletedConfirmModal.classList.add("d-none");
  for (let timeZoneDisplay of timeZoneDisplays) {
    timeZoneDisplay.innerText = getTimeZone();
  }
});
const wrapTimeTwo = function () {
  if (Number(loadingCompletedHour.value) > 23) {
    loadingCompletedHour.value = "00";
  }
  if (Number(loadingCompletedHour.value) < 00) {
    loadingCompletedHour.value = "23";
  }
  if (Number(loadingCompletedMinute.value) > 59) {
    loadingCompletedMinute.value = "00";
  }
  if (Number(loadingCompletedMinute.value) < 00) {
    loadingCompletedMinute.value = "59";
  }
};
loadingCompletedHourIncrement.addEventListener("click", function (e) {
  loadingCompletedHour.value = getTwoDigit(
    Number(loadingCompletedHour.value) + 1
  );
  wrapTimeTwo();
  e.preventDefault();
});
loadingCompletedMinuteIncrement.addEventListener("click", function (e) {
  loadingCompletedMinute.value = getTwoDigit(
    Number(loadingCompletedMinute.value) + 1
  );
  wrapTimeTwo();
  e.preventDefault();
});
loadingCompletedHourDecrement.addEventListener("click", function (e) {
  loadingCompletedHour.value = getTwoDigit(
    Number(loadingCompletedHour.value) - 1
  );
  wrapTimeTwo();
  e.preventDefault();
});
loadingCompletedMinuteDecrement.addEventListener("click", function (e) {
  loadingCompletedMinute.value = getTwoDigit(
    Number(loadingCompletedMinute.value) - 1
  );
  wrapTimeTwo();
  e.preventDefault();
});
loadingCompletedStartBtn.addEventListener("click", function (e) {
  e.preventDefault();
  loadingCompletedConfirmModal.classList.remove("d-none");
  loadingCompletedConfirmTime.innerText =
    loadingCompletedHour.value + ":" + loadingCompletedMinute.value;
});

// PUSH BACK STBY MODAL CONTROL----------------------------

const pushbackStbyUpdateBtn = document.querySelector(
  "#PUSH_BACK_STBY_UPDATE_BTN"
);

const pushbackStbyHourIncrement = document.querySelector(
  "#PUSH_BACK_STBY_HOUR_INCREMENT"
);
const pushbackStbyMinuteIncrement = document.querySelector(
  "#PUSH_BACK_STBY_MINUTE_INCREMENT"
);
const pushbackStbyHourDecrement = document.querySelector(
  "#PUSH_BACK_STBY_HOUR_DECREMENT"
);
const pushbackStbyMinuteDecrement = document.querySelector(
  "#PUSH_BACK_STBY_MINUTE_DECREMENT"
);

let pushbackStbyHour = document.querySelector("#PUSH_BACK_STBY_HOUR");
let pushbackStbyMinute = document.querySelector("#PUSH_BACK_STBY_MINUTE");
const pushbackStbyStartBtn = document.querySelector(
  "#PUSH_BACK_STBY_START_BTN"
);
const pushbackStbyConfirmModal = document.querySelector(
  "#PUSH_BACK_STBY_CONFIRM_MODAL"
);

pushbackStbyConfirmTime = document.querySelector(
  "#PUSH_BACK_STBY_CONFIRM_TIME"
);

pushbackStbyUpdateBtn.addEventListener("click", function () {
  pushbackStbyHour.value = getCurrentTime().substring(0, 2);
  pushbackStbyMinute.value = getCurrentTime().substring(3, 5);
  pushbackStbyConfirmModal.classList.add("d-none");
  for (let timeZoneDisplay of timeZoneDisplays) {
    timeZoneDisplay.innerText = getTimeZone();
  }
});
const wrapTimeThree = function () {
  if (Number(pushbackStbyHour.value) > 23) {
    pushbackStbyHour.value = "00";
  }
  if (Number(pushbackStbyHour.value) < 00) {
    pushbackStbyHour.value = "23";
  }
  if (Number(pushbackStbyMinute.value) > 59) {
    pushbackStbyMinute.value = "00";
  }
  if (Number(pushbackStbyMinute.value) < 00) {
    pushbackStbyMinute.value = "59";
  }
};
pushbackStbyHourIncrement.addEventListener("click", function (e) {
  pushbackStbyHour.value = getTwoDigit(Number(pushbackStbyHour.value) + 1);
  wrapTimeThree();
  e.preventDefault();
});
pushbackStbyMinuteIncrement.addEventListener("click", function (e) {
  pushbackStbyMinute.value = getTwoDigit(Number(pushbackStbyMinute.value) + 1);
  wrapTimeThree();
  e.preventDefault();
});
pushbackStbyHourDecrement.addEventListener("click", function (e) {
  pushbackStbyHour.value = getTwoDigit(Number(pushbackStbyHour.value) - 1);
  wrapTimeThree();
  e.preventDefault();
});
pushbackStbyMinuteDecrement.addEventListener("click", function (e) {
  pushbackStbyMinute.value = getTwoDigit(Number(pushbackStbyMinute.value) - 1);
  wrapTimeThree();
  e.preventDefault();
});
pushbackStbyStartBtn.addEventListener("click", function (e) {
  e.preventDefault();
  pushbackStbyConfirmModal.classList.remove("d-none");
  pushbackStbyConfirmTime.innerText =
    pushbackStbyHour.value + ":" + pushbackStbyMinute.value;
});
