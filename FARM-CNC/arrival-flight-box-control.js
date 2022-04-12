// Collapse Button Control=======================
const arrivalFlightBoxControl = function() {
    const flightBoxes = $(".flight-box:not(.open-flight-box)")
    for (let flightBox of flightBoxes) {
        $(flightBox).find(".collapse-btn > img").click(function() {
                const taskBoxes = $(flightBox).find(".flight-task-status > div > div:nth-of-type(2)")
                const updateTimeBtn = $(flightBox).find(".update-time-btn")
                const statusBars = $(flightBox).find(".status-bar ")
                const siblingsflightBox = $(flightBox).siblings()
                const submitBtns = $(flightBox).find(".flight-info-inputs > .form-group > form > button");



                if (updateTimeBtn.hasClass("closed")) {
                    if ($(this).hasClass("closed")) {
                        $(this).css("transform", "rotate(0deg)").removeClass("closed");
                        taskBoxes.slideDown(200).css({ "display": "flex", "flex-direction": "column", "justify-content": "space-evenly" })
                        updateTimeBtn.slideDown(200)
                        statusBars.slideUp(100)
                        $(flightBox).addClass("open-flight-box")

                        // Close siblings' components
                        siblingsflightBox.removeClass("open-flight-box")
                        siblingsflightBox.find(".collapse-btn > img").css("transform", "rotate(180deg)").addClass("closed")
                        siblingsflightBox.find(".flight-task-status > div > div:nth-of-type(2)").slideUp(100)
                        siblingsflightBox.find(".time-update-form").hide()
                        siblingsflightBox.find(".flight-task-status").fadeIn(200)
                        siblingsflightBox.find(".count-down-container").fadeIn(200)
                        siblingsflightBox.find(".flight-task-status > div > div:nth-of-type(1)").fadeIn(200)
                        siblingsflightBox.find(".update-time-btn").slideUp(200)
                        siblingsflightBox.find(".update-time-btn").addClass("closed");
                        siblingsflightBox.find(".update-time-btn").text("").append("<img src='./FARM-CNC-image/update-time.svg'> Update Time").css({
                            "background": "#CBB1F9  0% 0% no-repeat padding-box",
                            "border": "1px solid #3E075B",
                            "margin-bottom": "0px",
                            "margin-top": "10px"
                        })

                    } else if (!$(this).hasClass("closed")) {
                        $(this).css("transform", "rotate(180deg)").addClass("closed");
                        taskBoxes.slideUp(100)
                        updateTimeBtn.slideUp(200)
                        statusBars.slideDown(200)
                        submitBtns.slideUp(100)
                        $(flightBox).removeClass("open-flight-box")


                    }
                }
                $(this).mousedown(function() {
                    if (!updateTimeBtn.hasClass("closed")) {
                        updateTimeBtn.css({ "background-color": "orange" })
                    }
                });
                $(this).mouseup(function() {
                    if (!updateTimeBtn.hasClass("closed")) {
                        updateTimeBtn.css({ "background-color": "#FCC1CA " })
                    }
                });



            })
            //Update Time Button Control===========================
        $(flightBox).find(".update-time-btn").click(function() {
                const updateTimeForm = $(flightBox).find(".time-update-form");
                const flightTaskStatusBox = $(flightBox).find(".flight-task-status");
                const flightInfoInputs = $(flightBox).find(".flight-info-inputs")
                const confirmBtn = $(flightBox).find(".time-update-buttons > button")
                const countDownContainer = $(flightBox).find(".count-down-container")

                if ($(this).hasClass("closed")) {
                    $(this).removeClass("closed")
                    $(this).css({ "margin-bottom": "10px" })
                    updateTimeForm.slideDown(200);
                    flightTaskStatusBox.hide()
                    countDownContainer.hide()
                    flightInfoInputs.slideUp(200)
                    $(this).text("Cancel").css({
                        "background": "#FCC1CA 0% 0% no-repeat padding-box",
                        "border": "1px solid #CA637A",
                        "margin-bottom": "15px"
                    })


                } else if (!$(this).hasClass("closed")) {
                    $(this).addClass("closed")
                    updateTimeForm.slideUp(200)
                    flightTaskStatusBox.delay(200).slideDown(500)
                    countDownContainer.slideDown(500)
                        // $(this).css({ "margin-bottom": "0px" })
                    flightInfoInputs.slideDown(200).css({ "display": "flex" });
                    $(this).text("").append("<img src='./FARM-CNC-image/update-time.svg'> Update Time").css({
                        "background": "#CBB1F9  0% 0% no-repeat padding-box",
                        "border": "1px solid #3E075B",
                        "margin-bottom": "0px",
                        "margin-top": "10px"
                    })
                    confirmBtn.css({ "display": "none" })
                }


            })
            //Save Time Buttom Control=============================
        $(flightBox).find(".time-update-buttons > div:nth-of-type(1)").click(function() {
            $(this).siblings("button").fadeIn(500)
                // $(this).css({ "display": "none" })
        })


        // Inputs after update=============================
        $(flightBox).find(".time-update-inputs > div > div > input").change(function() {
            $(this).css({ "border": "2px solid black", "color": "black" })

        });
        $(flightBox).find(".time-update-form").keydown(
            function(e) {
                return e.key != "Enter";
            }
        )

        //move pin - unpin
        $(flightBox).find(".pin-mark > button[type=submit]").click(function(e) {
            e.preventDefault()
            if ($(this).children("img").attr("src") === "./FARM-CNC-image/disable-pin.svg") {
                $(this).parents(".flight-box").prependTo('#pinned-list');
                $(this).children("img").attr("src", "./FARM-CNC-image/active-pin.svg");
                accrdionControl()
            } else if ($(this).children("img").attr("src") === "./FARM-CNC-image/active-pin.svg") {
                $(this).parents(".flight-box").prependTo('#unpinned-list');
                $(this).children("img").attr("src", "./FARM-CNC-image/disable-pin.svg");
                accrdionControl()
            }
        })

    }
}