const filterBtn = document.querySelector(".filter-btn");
const filterMark = document.querySelector(".filter-mark");
const filterTable = document.querySelector("#panelsStayOpen-collapseOne");

filterBtn.addEventListener("click", function () {
  if (filterBtn.getAttribute("aria-expanded") !== "true") {
    filterMark.innerText = "+";
  } else {
    filterMark.innerText = "-";
  }
});
