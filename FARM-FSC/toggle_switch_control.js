// Time Toggle Switch Control
const UTC = document.querySelector("#UTC");
const LT = document.querySelector("#LT");
toggleSwitch = document.querySelector("#timezone-switch");

function checkTimezone() {
  if (!toggleSwitch.checked) {
    LT.style.color = "#3D394A";
    UTC.style.color = "#CBC6C6";
  } else {
    UTC.style.color = "#3D394A";
    LT.style.color = "#CBC6C6";
  }
}
checkTimezone();
toggleSwitch.addEventListener("click", checkTimezone);

// Filter Button Control
