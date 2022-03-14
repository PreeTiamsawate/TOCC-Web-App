// Collapse Button Control=======================
const arrivalFlightBoxControl = function() {
    $(".collapse-btn > img").click(function() {
            const taskBoxes = $(this).parents(".flight-data-box").find(".flight-task-status > div > div:nth-of-type(2)")


            const statusBars = $(this).parents(".flight-data-box").find(".status-bar ")



            if ($(this).hasClass("closed")) {
                $(this).css("transform", "rotate(0deg)").toggleClass("closed");
                taskBoxes.slideDown(200).css({ "display": "flex", "flex-direction": "column", "justify-content": "space-evenly" })

                statusBars.slideUp(100)

            } else if (!$(this).hasClass("closed")) {
                $(this).css("transform", "rotate(180deg)").toggleClass("closed");
                taskBoxes.slideUp(100)

                statusBars.slideDown(200)


            }



        })
        //move pin - unpin
    $(".pin-mark > button[type=submit]").click(function(e) {
        e.preventDefault()
        if ($(this).siblings("input.d-none").attr("name") === "to_pin") {
            $(this).parents(".flight-box").prependTo('#pinned-list');
            $(this).children("img").attr("src", "./FARM-CNC-image/active-pin.svg");
            $(this).siblings("input.d-none").attr("name", "to_unpin");
            accrdionControl()
        } else if ($(this).siblings("input.d-none").attr("name") === "to_unpin") {
            $(this).parents(".flight-box").prependTo('#unpinned-list');
            $(this).children("img").attr("src", "./FARM-CNC-image/disable-pin.svg");
            $(this).siblings("input.d-none").attr("name", "to_pin");
            accrdionControl()
        }
    })


}