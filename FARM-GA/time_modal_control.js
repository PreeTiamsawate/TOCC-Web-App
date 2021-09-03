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

// CREW ARRIVED MODAL CONTROL----------------------------

const crewArrivedUpdateBtn = document.querySelector("#CREW_ARRIVED_UPDATE_BTN");
// const crewArrivedStartNow = document.querySelector("#CREW_ARRIVED_START_NOW");
const crewArrivedHourIncrement = document.querySelector(
  "#CREW_ARRIVED_HOUR_INCREMENT"
);
const crewArrivedMinuteIncrement = document.querySelector(
  "#CREW_ARRIVED_MINUTE_INCREMENT"
);
const crewArrivedHourDecrement = document.querySelector(
  "#CREW_ARRIVED_HOUR_DECREMENT"
);
const crewArrivedMinuteDecrement = document.querySelector(
  "#CREW_ARRIVED_MINUTE_DECREMENT"
);

let crewArrivedHour = document.querySelector("#CREW_ARRIVED_HOUR");
let crewArrivedMinute = document.querySelector("#CREW_ARRIVED_MINUTE");
const crewArrivedStartBtn = document.querySelector("#CREW_ARRIVED_START_BTN");
const crewArrivedConfirmModal = document.querySelector(
  "#CREW_ARRIVED_CONFIRM_MODAL"
);

crewArrivedConfirmTime = document.querySelector("#CREW_ARRIVED_CONFIRM_TIME");

crewArrivedUpdateBtn.addEventListener("click", function () {
  // crewArrivedStartNow.innerText = getCurrentTime();
  crewArrivedHour.value = getCurrentTime().substring(0, 2);
  crewArrivedMinute.value = getCurrentTime().substring(3, 5);
  crewArrivedConfirmModal.classList.add("d-none");
  for (let timeZoneDisplay of timeZoneDisplays) {
    timeZoneDisplay.innerText = getTimeZone();
  }
});
const wrapTime = function () {
  if (Number(crewArrivedHour.value) > 23) {
    crewArrivedHour.value = "00";
  }
  if (Number(crewArrivedHour.value) < 00) {
    crewArrivedHour.value = "23";
  }
  if (Number(crewArrivedMinute.value) > 59) {
    crewArrivedMinute.value = "00";
  }
  if (Number(crewArrivedMinute.value) < 00) {
    crewArrivedMinute.value = "59";
  }
};
crewArrivedHourIncrement.addEventListener("click", function (e) {
  crewArrivedHour.value = getTwoDigit(Number(crewArrivedHour.value) + 1);
  wrapTime();
  e.preventDefault();
});
crewArrivedMinuteIncrement.addEventListener("click", function (e) {
  crewArrivedMinute.value = getTwoDigit(Number(crewArrivedMinute.value) + 1);
  wrapTime();
  e.preventDefault();
});
crewArrivedHourDecrement.addEventListener("click", function (e) {
  crewArrivedHour.value = getTwoDigit(Number(crewArrivedHour.value) - 1);
  wrapTime();
  e.preventDefault();
});
crewArrivedMinuteDecrement.addEventListener("click", function (e) {
  crewArrivedMinute.value = getTwoDigit(Number(crewArrivedMinute.value) - 1);
  wrapTime();
  e.preventDefault();
});
crewArrivedStartBtn.addEventListener("click", function (e) {
  e.preventDefault();
  crewArrivedConfirmModal.classList.remove("d-none");
  crewArrivedConfirmTime.innerText =
    crewArrivedHour.value + ":" + crewArrivedMinute.value;
});

// OPEN GATE MODAL CONTROL----------------------------

const openGateUpdateBtn = document.querySelector("#OPEN_GATE_UPDATE_BTN");
// const openGateStartNow = document.querySelector("#OPEN_GATE_START_NOW");
const openGateHourIncrement = document.querySelector(
  "#OPEN_GATE_HOUR_INCREMENT"
);
const openGateMinuteIncrement = document.querySelector(
  "#OPEN_GATE_MINUTE_INCREMENT"
);
const openGateHourDecrement = document.querySelector(
  "#OPEN_GATE_HOUR_DECREMENT"
);
const openGateMinuteDecrement = document.querySelector(
  "#OPEN_GATE_MINUTE_DECREMENT"
);

let openGateHour = document.querySelector("#OPEN_GATE_HOUR");
let openGateMinute = document.querySelector("#OPEN_GATE_MINUTE");
const openGateStartBtn = document.querySelector("#OPEN_GATE_START_BTN");
const openGateConfirmModal = document.querySelector("#OPEN_GATE_CONFIRM_MODAL");

openGateConfirmTime = document.querySelector("#OPEN_GATE_CONFIRM_TIME");

openGateUpdateBtn.addEventListener("click", function () {
  openGateConfirmModal.classList.add("d-none");
  for (let timeZoneDisplay of timeZoneDisplays) {
    timeZoneDisplay.innerText = getTimeZone();
  }
});
const wrapTimeTwo = function () {
  if (Number(openGateHour.value) > 23) {
    openGateHour.value = "00";
  }
  if (Number(openGateHour.value) < 00) {
    openGateHour.value = "23";
  }
  if (Number(openGateMinute.value) > 59) {
    openGateMinute.value = "00";
  }
  if (Number(openGateMinute.value) < 00) {
    openGateMinute.value = "59";
  }
};
openGateHourIncrement.addEventListener("click", function (e) {
  openGateHour.value = getTwoDigit(Number(openGateHour.value) + 1);
  wrapTimeTwo();
  e.preventDefault();
});
openGateMinuteIncrement.addEventListener("click", function (e) {
  openGateMinute.value = getTwoDigit(Number(openGateMinute.value) + 1);
  wrapTimeTwo();
  e.preventDefault();
});
openGateHourDecrement.addEventListener("click", function (e) {
  openGateHour.value = getTwoDigit(Number(openGateHour.value) - 1);
  wrapTimeTwo();
  e.preventDefault();
});
openGateMinuteDecrement.addEventListener("click", function (e) {
  openGateMinute.value = getTwoDigit(Number(openGateMinute.value) - 1);
  wrapTimeTwo();
  e.preventDefault();
});
openGateStartBtn.addEventListener("click", function (e) {
  e.preventDefault();
  openGateConfirmModal.classList.remove("d-none");
  openGateConfirmTime.innerText =
    openGateHour.value + ":" + openGateMinute.value;
});

// OARDING COMMENCED MODAL CONTROL----------------------------

const boardingCommencedUpdateBtn = document.querySelector(
  "#BOARDING_COMMENCED_UPDATE_BTN"
);

const boardingCommencedHourIncrement = document.querySelector(
  "#BOARDING_COMMENCED_HOUR_INCREMENT"
);
const boardingCommencedMinuteIncrement = document.querySelector(
  "#BOARDING_COMMENCED_MINUTE_INCREMENT"
);
const boardingCommencedHourDecrement = document.querySelector(
  "#BOARDING_COMMENCED_HOUR_DECREMENT"
);
const boardingCommencedMinuteDecrement = document.querySelector(
  "#BOARDING_COMMENCED_MINUTE_DECREMENT"
);

let boardingCommencedHour = document.querySelector("#BOARDING_COMMENCED_HOUR");
let boardingCommencedMinute = document.querySelector(
  "#BOARDING_COMMENCED_MINUTE"
);
const boardingCommencedStartBtn = document.querySelector(
  "#BOARDING_COMMENCED_START_BTN"
);
const boardingCommencedConfirmModal = document.querySelector(
  "#BOARDING_COMMENCED_CONFIRM_MODAL"
);

boardingCommencedConfirmTime = document.querySelector(
  "#BOARDING_COMMENCED_CONFIRM_TIME"
);

boardingCommencedUpdateBtn.addEventListener("click", function () {
  boardingCommencedConfirmModal.classList.add("d-none");
  for (let timeZoneDisplay of timeZoneDisplays) {
    timeZoneDisplay.innerText = getTimeZone();
  }
});
const wrapTimeThree = function () {
  if (Number(boardingCommencedHour.value) > 23) {
    boardingCommencedHour.value = "00";
  }
  if (Number(boardingCommencedHour.value) < 00) {
    boardingCommencedHour.value = "23";
  }
  if (Number(boardingCommencedMinute.value) > 59) {
    boardingCommencedMinute.value = "00";
  }
  if (Number(boardingCommencedMinute.value) < 00) {
    boardingCommencedMinute.value = "59";
  }
};
boardingCommencedHourIncrement.addEventListener("click", function (e) {
  boardingCommencedHour.value = getTwoDigit(
    Number(boardingCommencedHour.value) + 1
  );
  wrapTimeThree();
  e.preventDefault();
});
boardingCommencedMinuteIncrement.addEventListener("click", function (e) {
  boardingCommencedMinute.value = getTwoDigit(
    Number(boardingCommencedMinute.value) + 1
  );
  wrapTimeThree();
  e.preventDefault();
});
boardingCommencedHourDecrement.addEventListener("click", function (e) {
  boardingCommencedHour.value = getTwoDigit(
    Number(boardingCommencedHour.value) - 1
  );
  wrapTimeThree();
  e.preventDefault();
});
boardingCommencedMinuteDecrement.addEventListener("click", function (e) {
  boardingCommencedMinute.value = getTwoDigit(
    Number(boardingCommencedMinute.value) - 1
  );
  wrapTimeThree();
  e.preventDefault();
});
boardingCommencedStartBtn.addEventListener("click", function (e) {
  e.preventDefault();
  boardingCommencedConfirmModal.classList.remove("d-none");
  boardingCommencedConfirmTime.innerText =
    boardingCommencedHour.value + ":" + boardingCommencedMinute.value;
});

// BOARDING COMPLETED MODAL CONTROL----------------------------

const boardingCompletedUpdateBtn = document.querySelector(
  "#BOARDING_COMPLETED_UPDATE_BTN"
);
// const boardingCompletedNow = document.querySelector("#BOARDING_COMPLETED_NOW");
const boardingCompletedHourIncrement = document.querySelector(
  "#BOARDING_COMPLETED_HOUR_INCREMENT"
);
const boardingCompletedMinuteIncrement = document.querySelector(
  "#BOARDING_COMPLETED_MINUTE_INCREMENT"
);
const boardingCompletedHourDecrement = document.querySelector(
  "#BOARDING_COMPLETED_HOUR_DECREMENT"
);
const boardingCompletedMinuteDecrement = document.querySelector(
  "#BOARDING_COMPLETED_MINUTE_DECREMENT"
);

let boardingCompletedHour = document.querySelector("#BOARDING_COMPLETED_HOUR");
let boardingCompletedMinute = document.querySelector(
  "#BOARDING_COMPLETED_MINUTE"
);
const boardingCompletedStartBtn = document.querySelector(
  "#BOARDING_COMPLETED_START_BTN"
);
const boardingCompletedConfirmModal = document.querySelector(
  "#BOARDING_COMPLETED_CONFIRM_MODAL"
);

const boardingCompletedConfirmTime = document.querySelector(
  "#BOARDING_COMPLETED_CONFIRM_TIME"
);

boardingCompletedUpdateBtn.addEventListener("click", function () {
  // boardingCompletedNow.innerText = getCurrentTime();
  boardingCompletedHour.value = getCurrentTime().substring(0, 2);
  boardingCompletedMinute.value = getCurrentTime().substring(3, 5);
  boardingCompletedConfirmModal.classList.add("d-none");
  for (let timeZoneDisplay of timeZoneDisplays) {
    timeZoneDisplay.innerText = getTimeZone();
  }
});
const wrapTimeFour = function () {
  if (Number(boardingCompletedHour.value) > 23) {
    boardingCompletedHour.value = "00";
  }
  if (Number(boardingCompletedHour.value) < 00) {
    boardingCompletedHour.value = "23";
  }
  if (Number(boardingCompletedMinute.value) > 59) {
    boardingCompletedMinute.value = "00";
  }
  if (Number(boardingCompletedMinute.value) < 00) {
    boardingCompletedMinute.value = "59";
  }
};
boardingCompletedHourIncrement.addEventListener("click", function (e) {
  boardingCompletedHour.value = getTwoDigit(
    Number(boardingCompletedHour.value) + 1
  );
  wrapTimeFour();
  e.preventDefault();
});
boardingCompletedMinuteIncrement.addEventListener("click", function (e) {
  boardingCompletedMinute.value = getTwoDigit(
    Number(boardingCompletedMinute.value) + 1
  );
  wrapTimeFour();
  e.preventDefault();
});
boardingCompletedHourDecrement.addEventListener("click", function (e) {
  boardingCompletedHour.value = getTwoDigit(
    Number(boardingCompletedHour.value) - 1
  );
  wrapTimeFour();
  e.preventDefault();
});
boardingCompletedMinuteDecrement.addEventListener("click", function (e) {
  boardingCompletedMinute.value = getTwoDigit(
    Number(boardingCompletedMinute.value) - 1
  );
  wrapTimeFour();
  e.preventDefault();
});
boardingCompletedStartBtn.addEventListener("click", function (e) {
  e.preventDefault();
  boardingCompletedConfirmModal.classList.remove("d-none");
  boardingCompletedConfirmTime.innerText =
    boardingCompletedHour.value + ":" + boardingCompletedMinute.value;
});
