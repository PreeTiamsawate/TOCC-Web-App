// Get CURRENT TIME--------------------------------------------
const timeZoneSwitch = document.querySelector("#timezone-switch");
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

// CREW ARRIVED MODAL CONTROL----------------------------

const crewArrivedUpdateBtn = document.querySelector("#crew-arrived-update-btn");
const crewArrivedStartNow = document.querySelector("#crew-arrived-start-now");
const crewArrivedHourIncrement = document.querySelector(
  "#crew-arrived-hour-increment"
);
const crewArrivedMinuteIncrement = document.querySelector(
  "#crew-arrived-minute-increment"
);
const crewArrivedHourDecrement = document.querySelector(
  "#crew-arrived-hour-decrement"
);
const crewArrivedMinuteDecrement = document.querySelector(
  "#crew-arrived-minute-decrement"
);

let crewArrivedHourActual = document.querySelector("#crew-arrived-hour-actual");
let crewArrivedMinuteActual = document.querySelector(
  "#crew-arrived-minute-actual"
);
const crewArrivedStartBtn = document.querySelector("#crew-arrived-start-btn");
const crewArrivedConfirmModal = document.querySelector(
  "#crew-arrived-confirm-modal"
);
const crewArrivedConfirmBtn = document.querySelector(
  "#crew-arrived-confirm-btn"
);
crewArrivedConfirmTime = document.querySelector("#crew-arrived-confirm-time");

crewArrivedUpdateBtn.addEventListener("click", function () {
  crewArrivedStartNow.innerText = getCurrentTime();
  crewArrivedHourActual.value = getCurrentTime().substring(0, 2);
  crewArrivedMinuteActual.value = getCurrentTime().substring(3, 5);
  crewArrivedConfirmModal.classList.add("d-none");
});
const wrapTime = function () {
  if (Number(crewArrivedHourActual.value) > 23) {
    crewArrivedHourActual.value = "00";
  }
  if (Number(crewArrivedHourActual.value) < 00) {
    crewArrivedHourActual.value = "23";
  }
  if (Number(crewArrivedMinuteActual.value) > 59) {
    crewArrivedMinuteActual.value = "00";
  }
  if (Number(crewArrivedMinuteActual.value) < 00) {
    crewArrivedMinuteActual.value = "59";
  }
};
crewArrivedHourIncrement.addEventListener("click", function (e) {
  crewArrivedHourActual.value = getTwoDigit(
    Number(crewArrivedHourActual.value) + 1
  );
  wrapTime();
  e.preventDefault();
});
crewArrivedMinuteIncrement.addEventListener("click", function (e) {
  crewArrivedMinuteActual.value = getTwoDigit(
    Number(crewArrivedMinuteActual.value) + 1
  );
  wrapTime();
  e.preventDefault();
});
crewArrivedHourDecrement.addEventListener("click", function (e) {
  crewArrivedHourActual.value = getTwoDigit(
    Number(crewArrivedHourActual.value) - 1
  );
  wrapTime();
  e.preventDefault();
});
crewArrivedMinuteDecrement.addEventListener("click", function (e) {
  crewArrivedMinuteActual.value = getTwoDigit(
    Number(crewArrivedMinuteActual.value) - 1
  );
  wrapTime();
  e.preventDefault();
});
crewArrivedStartBtn.addEventListener("click", function (e) {
  e.preventDefault();
  crewArrivedConfirmModal.classList.remove("d-none");
  crewArrivedConfirmTime.innerText =
    crewArrivedHourActual.value + ":" + crewArrivedMinuteActual.value;
});
