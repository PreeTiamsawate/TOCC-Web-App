$(document).ready(function () {
  let standard_time_ms = $(".standard_time").children()[1].innerText;
  let estimated_time_ms = $(".estimated_time").children()[1].innerText;
  const checkDelay = function () {
    if (Number(estimated_time_ms) - Number(standard_time_ms) > 0) {
      $(".standard_time").css("background-color", "#F99292");
      $(".standard_time").prev().css("background-color", "#F99292");
      $(".estimated_time").css("background-color", "#F99292");
      $(".estimated_time").prev().css("background-color", "#F99292");
    }
  };
  checkDelay();
  setInterval(checkDelay, 60000);
});
