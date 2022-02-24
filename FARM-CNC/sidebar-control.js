$(document).ready(function() {
    const sidebarControl = function() {


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

        const setTimePlaceholder = function() {
            if ($(".time-zone-form #UTC").is(":checked")) {
                $("input.time").attr("placeholder", "UTC")
            } else if ($(".time-zone-form #LT").is(":checked")) {
                $("input.time").attr("placeholder", "LT")
            }
            $("input.flight-time").attr("placeholder", "")
        }
        insertCurrentDateTime();
        setTimePlaceholder()
        $(".user-profile > img").attr("src", $(".info-from-backend >.USER_IMAGE_URL").text())
        $(".user-profile > div").text($(".info-from-backend >.USER_FULL_NAME").text())
        $(".time-zone-form input").change(insertCurrentDateTime);
        $(".time-zone-form input").change(setTimePlaceholder);
    }
    sidebarControl()
    setInterval(sidebarControl, 10000);


})