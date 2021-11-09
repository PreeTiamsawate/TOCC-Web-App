// notification button control===============
$(".icon-bar > img").click(function() {
    $(this).toggleClass("getNoti");
    if ($(this).hasClass("getNoti")) {
        $(".red-bell.d-none").parents(".flight-box").fadeOut(200);
    } else {
        $(".red-bell.d-none").parents(".flight-box").fadeIn();
    }
});
const filterDelayFlights = function() {
    if ($(".icon-bar > img").hasClass("getNoti")) {
        $(".red-bell.d-none").parents(".flight-box").fadeOut();
    } else {
        $(".red-bell.d-none").parents(".flight-box").fadeIn();
    }
}
setInterval(filterDelayFlights, 30000);
const currentTime = new Date(Date.now())
const getCurrentTime = function() {
    if ($(".time-zone-form #UTC").is(":checked")) {
        return ("0" + currentTime.getUTCHours().toString()).slice(-2) + ":" + ("0" + currentTime.getUTCMinutes().toString()).slice(-2)
    } else if ($(".time-zone-form #LT").is(":checked")) {
        return ("0" + currentTime.getHours().toString()).slice(-2) + ":" + ("0" + currentTime.getMinutes().toString()).slice(-2)
    }
}
const getCurrentDate = function() {
    if ($(".time-zone-form #UTC").is(":checked")) {
        return currentTime.toUTCString().slice(0, -13).replace(',', '')
    } else if ($(".time-zone-form #LT").is(":checked")) {
        return currentTime.toDateString()
    }
}

const insertCurrentDateTime = function() {
    $(".current-time-box > .current-time").text(getCurrentTime());
    $(".full-date").text(getCurrentDate());
}
insertCurrentDateTime();
$(".time-zone-form input").change(insertCurrentDateTime);

$(".user-profile > img").attr("src", $(".info-from-backend >.USER_IMAGE_URL").text())
$(".user-profile > div").text($(".info-from-backend >.USER_FULL_NAME").text())