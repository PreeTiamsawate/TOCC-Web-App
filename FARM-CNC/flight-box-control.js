$(document).ready(function() {
    // Collapse Button Control=======================
    $(".collapse-btn > img").click(function() {
        const taskBoxes = $(this).parents(".flight-prep-box").find(".flight-task-status > div > div:nth-of-type(2)")
        const updateTimeBtn = $(this).parents(".flight-prep-box").find(".update-time-btn")
        const flightInfoInputs = $(this).parents(".flight-box").find(".flight-info-inputs")
        const statusBars = $(this).parents(".flight-prep-box").find(".status-bar ")
        const aircraftStatusbox = $(this).parents(".flight-prep-box").find(".aircraft-status");
        const submitBtns = $(this).parents(".flight-box").find(".flight-info-inputs > .form-group > form > button");
        const updateTimeForm = $(this).parents(".flight-box").find(".time-update-form");
        const flightTaskStatusBox = $(this).parents(".flight-prep-box").find(".flight-task-status");
        if (updateTimeBtn.hasClass("closed")) {
            if ($(this).hasClass("closed")) {
                $(this).css("transform", "rotate(0deg)").toggleClass("closed");
                taskBoxes.slideDown(200).css({ "display": "flex", "flex-direction": "column", "justify-content": "space-evenly" })
                updateTimeBtn.slideDown(200)
                flightInfoInputs.slideDown(200).css({ "display": "flex", "justify-content": "space-between" })
                statusBars.slideUp(100)
                aircraftStatusbox.css({ "margin-bottom": "30px" })
            } else if (!$(this).hasClass("closed")) {
                $(this).css("transform", "rotate(180deg)").toggleClass("closed");
                taskBoxes.slideUp(100)
                updateTimeBtn.slideUp(200)
                flightInfoInputs.slideUp(200)
                statusBars.slideDown(200)
                aircraftStatusbox.css({ "margin-bottom": "0px" })
                submitBtns.slideUp(100)
            }
        } else if (!updateTimeBtn.hasClass("closed")) {
            updateTimeBtn.toggleClass("closed")
            $(this).css("transform", "rotate(180deg)").toggleClass("closed");
            updateTimeBtn.slideUp(200)
            updateTimeForm.slideUp(200)
            flightTaskStatusBox.delay(200).slideDown(500)
            taskBoxes.slideUp(100)
            statusBars.slideDown(200)
            aircraftStatusbox.css({ "margin-bottom": "0px" })
            submitBtns.slideUp(100)

        }
    })

    // Aircraft Status Button Control=======================
    $(".airplane-icon-box > div").click(function() {
        const aircraftStatusbox = $(this).parents(".flight-prep-box").find(".aircraft-status");
        const flightTaskStatusBox = $(this).parents(".flight-prep-box").find(".flight-task-status");
        const updateTimeBtn = $(this).parents(".flight-prep-box").find(".update-time-btn")

        if (updateTimeBtn.hasClass("closed")) {
            if ($(this).hasClass("closed")) {
                $(this).toggleClass("closed")
                aircraftStatusbox.fadeIn(500).css({ "display": "flex", "justify-content": "space-between", "align-items": "center" });
                flightTaskStatusBox.hide()
            } else if (!$(this).hasClass("closed")) {
                $(this).toggleClass("closed")
                aircraftStatusbox.hide()
                flightTaskStatusBox.fadeIn(500)
                    // taskBoxes.slideUp(100)
                    // statusBars.slideDown(200)
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

    // Submit Button Control================================
    $(".form-group > form > input").focus(function() {
        $(this).next().css("display", "block");
    });
    $(".form-group > form > .html-duration-picker-wrapper").click(function() {
        $(this).next().css("display", "block");
    });

    //Update Time Button Control===========================
    $(".update-time-btn").click(function() {
        const updateTimeForm = $(this).parents(".flight-prep-box").find(".time-update-form");
        const flightTaskStatusBox = $(this).parents(".flight-prep-box").find(".flight-task-status");
        const flightInfoInputs = $(this).parents(".flight-box").find(".flight-info-inputs")
        const aircraftBtn = $(this).parents(".flight-box").find(".airplane-icon-box > div")
        const confirmBtn = $(this).parents(".flight-box").find(".time-update-buttons > button")
        if (aircraftBtn.hasClass("closed")) {
            if ($(this).hasClass("closed")) {
                $(this).toggleClass("closed")
                $(this).css({ "margin-bottom": "10px" })
                updateTimeForm.slideDown(200);
                flightTaskStatusBox.hide()
                flightInfoInputs.slideUp(200)
                $(this).text("Cancel").css({
                    "background": "#FCC1CA 0% 0% no-repeat padding-box",
                    "border": "1px solid #CA637A"
                })


            } else if (!$(this).hasClass("closed")) {
                $(this).toggleClass("closed")
                updateTimeForm.slideUp(200)
                flightTaskStatusBox.delay(200).slideDown(500)
                $(this).css({ "margin-bottom": "0px" })
                flightInfoInputs.slideDown(200)
                $(this).text("").append("<img src='./FARM-CNC-image/update-time.svg'> Update Time").css({
                    "background": "#CBB1F9  0% 0% no-repeat padding-box",
                    "border": "1px solid #3E075B"
                })
                confirmBtn.css({ "display": "none" })
            }
        }
        $(this).mousedown(function() {
            if (!aircraftBtn.hasClass("closed")) {
                aircraftBtn.css({ "background-color": "orange" })
            }
        });
        $(this).mouseup(function() {
            if (!aircraftBtn.hasClass("closed")) {
                aircraftBtn.css({ "background-color": "#E6E6E6" })
            }
        });
    })

    //Save Time Buttom Control=============================
    $(".time-update-buttons > div:nth-of-type(1)").click(function() {
        $(this).siblings("button").fadeIn(500)
            // $(this).css({ "display": "none" })
    })

    //Cancel Time Button Control===========================
    // $(".time-update-buttons > div:nth-of-type(2)").click(function() {
    //     $(this).siblings("button").css({ "display": "none" })
    //     $(this).siblings(".save").css({ "display": "block" })
    // });
    // Inputs after update=============================
    $(".time-update-inputs > div > div > input").change(function() {
        $(this).css({ "border": "2px solid black", "color": "black" })
    });
});