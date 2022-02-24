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


}