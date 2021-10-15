$(document).ready(function () {
  $(".custom-accordion-button").click(function () {
    if ($(this).attr("aria-expanded") !== "true") {
      $(this).children("img").css("transform", "rotate(-90deg)");
    } else {
      $(this).children("img").css("transform", "rotate(0deg)");
    }
  });
});
