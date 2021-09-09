const prevFlight_ETA = document.querySelector(".prevFlight_ETA");
const prevFlight_ATA = document.querySelector(".prevFlight_ATA");
const prevFlight_Est_Date = document.querySelector(".prevFlight_Est_Date");
const prevFlight_Actual_Date = document.querySelector(
  ".prevFlight_Actual_Date"
);
const checkPreviousFlight = function () {
  if (prevFlight_ATA.innerText) {
    prevFlight_ATA.classList.remove("d-none");
    prevFlight_ETA.classList.add("d-none");
  }
  if (prevFlight_Actual_Date.innerText) {
    prevFlight_Actual_Date.classList.remove("d-none");
    prevFlight_Est_Date.classList.add("d-none");
  }
};
checkPreviousFlight();
setInterval(checkPreviousFlight, 60000);
