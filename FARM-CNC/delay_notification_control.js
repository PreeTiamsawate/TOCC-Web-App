$(".icon-bar > img").click(function() {
    $(this).toggleClass("getNoti");
    if ($(this).hasClass("getNoti")) {
        $(".noti-bell.d-none").parents(".flight-box").fadeOut();
        $(this).css({
            "border-color": "#C1E0FF",
            "border-width": "2px",
            "border-style": "solid"
        });

    } else {
        $(".noti-bell.d-none").parents(".flight-box").fadeIn();
        $(this).css({
            "border": "none",
        });
    }

});
const filterDelayFlights = function() {
    if ($(".icon-bar > img").hasClass("getNoti")) {
        $(".noti-bell.d-none").parents(".flight-box").hide();
    } else {
        $(".noti-bell.d-none").parents(".flight-box").show();
    }

}