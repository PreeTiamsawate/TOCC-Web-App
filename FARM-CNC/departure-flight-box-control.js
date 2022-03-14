// Collapse Button Control=======================
const departureFlightBoxControl = function() {
        $(".collapse-btn > img").click(function() {
            const taskBoxes = $(this).parents(".flight-data-box").find(".flight-task-status > div > div:nth-of-type(2)")
            const updateTimeBtn = $(this).parents(".flight-data-box").find(".update-time-btn")
            const flightInfoInputs = $(this).parents(".flight-box").find(".flight-info-inputs")
            const statusBars = $(this).parents(".flight-data-box").find(".status-bar ")
            const aircraftStatusbox = $(this).parents(".flight-data-box").find(".aircraft-status");
            const submitBtns = $(this).parents(".flight-box").find(".flight-info-inputs > .form-group > form > button");

            if (updateTimeBtn.hasClass("closed")) {
                if ($(this).hasClass("closed")) {
                    $(this).css("transform", "rotate(0deg)").toggleClass("closed");
                    taskBoxes.slideDown(200).css({ "display": "flex", "flex-direction": "column", "justify-content": "space-evenly" })
                    updateTimeBtn.slideDown(200)
                    flightInfoInputs.slideDown(200).css({ "display": "flex" })
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
            }

            // } else if (!updateTimeBtn.hasClass("closed")) {
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

        // Aircraft Status Button Control=======================
        $(".airplane-icon-box > div").click(function() {
            const aircraftStatusbox = $(this).parents(".flight-data-box").find(".aircraft-status");
            const flightTaskStatusBox = $(this).parents(".flight-data-box").find(".flight-task-status");
            const updateTimeBtn = $(this).parents(".flight-data-box").find(".update-time-btn")

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

        // Submit Button Show================================
        $(".form-group > form > input").focus(function() {
            $(this).next().css("display", "block");
        });
        $(".form-group > form > input").keyup(function(e) {
            if (e.code !== 'Enter') {
                $(this).next().css("display", "block");
            }
        });

        //hide submit btn on submit
        $(".form-group > form").submit(function(e) {
            e.preventDefault();
            $(this).children("button").hide();
        });

        // prevent submit with Enter key
        $(".time-update-form").keydown(
            function(e) {
                return e.key != "Enter";
            }
        )

        //force submit parrent form on enter key
        // $(".form-group > form > .time").keyup(function(e) {
        //     if (e.code === 'Enter') {
        //         e.preventDefault();
        //         $(this).parent().submit()
        //     }
        // });

        $(".form-group > form > .html-duration-picker-wrapper").click(function() {
            $(this).next().css("display", "block");
            console.log("I am here!!!")
        });

        //Update Time Button Control===========================
        $(".update-time-btn").click(function() {
            const updateTimeForm = $(this).parents(".flight-data-box").find(".time-update-form");
            const flightTaskStatusBox = $(this).parents(".flight-data-box").find(".flight-task-status");
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
                        "border": "1px solid #CA637A",
                        "margin-bottom": "15px"
                    })


                } else if (!$(this).hasClass("closed")) {
                    $(this).toggleClass("closed")
                    updateTimeForm.slideUp(200)
                    flightTaskStatusBox.delay(200).slideDown(500)
                        // $(this).css({ "margin-bottom": "0px" })
                    flightInfoInputs.slideDown(200)
                    $(this).text("").append("<img src='./FARM-CNC-image/update-time.svg'> Update Time").css({
                        "background": "#CBB1F9  0% 0% no-repeat padding-box",
                        "border": "1px solid #3E075B",
                        "margin-bottom": "0px",
                        "margin-top": "10px"
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


        // Inputs after update=============================
        $(".time-update-inputs > div > div > input").change(function() {
            $(this).css({ "border": "2px solid black", "color": "black" })

        });

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
    // $(document).ready(flightBoxControl)