// Collapse Button Control=======================
const departureFlightBoxControl = function() {
        const flightBoxes = $(".flight-box:not(.open-flight-box)")
        for (let flightBox of flightBoxes) {
            $(flightBox).find(".collapse-btn > img").click(function() {

                const taskBoxes = $(flightBox).find(".flight-task-status > div > div:nth-of-type(2)")
                const updateTimeBtn = $(flightBox).find(".update-time-btn")
                const flightInfoInputs = $(flightBox).find(".flight-info-inputs")
                const statusBars = $(flightBox).find(".status-bar ")
                const aircraftStatusbox = $(flightBox).find(".aircraft-status");
                const submitBtns = $(flightBox).find(".flight-info-inputs > .form-group > form > button");
                const siblingsflightBox = $(flightBox).siblings()



                if (updateTimeBtn.hasClass("closed")) {
                    if ($(this).hasClass("closed")) {
                        $(this).css("transform", "rotate(0deg)").removeClass("closed");
                        taskBoxes.slideDown(200).css({ "display": "flex", "flex-direction": "column", "justify-content": "space-evenly" })
                        updateTimeBtn.slideDown(200)
                        flightInfoInputs.slideDown(200).css({ "display": "flex", "flex-direction": "row" })
                        statusBars.slideUp(100)
                        aircraftStatusbox.css({ "margin-bottom": "30px" })
                        $(flightBox).addClass("open-flight-box")
                            // Close siblings' components
                        siblingsflightBox.removeClass("open-flight-box")
                        siblingsflightBox.find(".collapse-btn > img").css("transform", "rotate(180deg)").addClass("closed")
                        siblingsflightBox.find(".flight-task-status > div > div:nth-of-type(2)").slideUp(100)
                        siblingsflightBox.find(".time-update-form").hide()
                        siblingsflightBox.find(".flight-task-status").fadeIn(200)
                        siblingsflightBox.find(".update-time-btn").slideUp(200)
                        siblingsflightBox.find(".update-time-btn").addClass("closed");
                        siblingsflightBox.find(".update-time-btn").text("").append("<img src='./FARM-CNC-image/update-time.svg'> Update Time").css({
                            "background": "#CBB1F9  0% 0% no-repeat padding-box",
                            "border": "1px solid #3E075B",
                            "margin-bottom": "0px",
                            "margin-top": "10px"
                        })
                        siblingsflightBox.find(".flight-info-inputs").slideUp(200)
                        siblingsflightBox.find(".airplane-icon-box > div").addClass("closed")
                        siblingsflightBox.find(".aircraft-status").hide()
                        siblingsflightBox.find(".status-bar ").slideDown(200)
                        siblingsflightBox.find(".aircraft-status").css({ "margin-bottom": "0px" })
                        siblingsflightBox.find(".flight-info-inputs > .form-group > form > button").slideUp(100)


                    } else if (!$(this).hasClass("closed")) {
                        $(this).css("transform", "rotate(180deg)").addClass("closed");
                        taskBoxes.slideUp(100)
                        updateTimeBtn.slideUp(200)
                        flightInfoInputs.slideUp(200)
                        statusBars.slideDown(200)
                        aircraftStatusbox.css({ "margin-bottom": "0px" })
                        submitBtns.slideUp(100)
                        $(flightBox).removeClass("open-flight-box")
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
            $(flightBox).find(".airplane-icon-box > div").click(function() {
                const aircraftStatusbox = $(flightBox).find(".aircraft-status");
                const flightTaskStatusBox = $(flightBox).find(".flight-task-status");
                const updateTimeBtn = $(flightBox).find(".update-time-btn")

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
            $(flightBox).find(".form-group > form > input").focus(function() {
                $(this).next().css("display", "block");
            });
            $(flightBox).find(".form-group > form > input").keyup(function(e) {
                if (e.code !== 'Enter') {
                    $(this).next().css("display", "block");
                }
            });

            //hide submit btn on submit
            $(flightBox).find(".form-group > form").submit(function(e) {
                e.preventDefault();
                $(this).children("button").hide();

            });

            // prevent submit with Enter key
            $(flightBox).find(".time-update-form").keydown(
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

            // $(".form-group > form > .html-duration-picker-wrapper").click(function() {
            //     $(this).next().css("display", "block");
            //     console.log("I am here!!!")
            // });

            //Update Time Button Control===========================
            $(flightBox).find(".update-time-btn").click(function() {
                const updateTimeForm = $(flightBox).find(".time-update-form");
                const flightTaskStatusBox = $(flightBox).find(".flight-task-status");
                const flightInfoInputs = $(flightBox).find(".flight-info-inputs")
                const aircraftBtn = $(flightBox).find(".airplane-icon-box > div")
                const confirmBtn = $(flightBox).find(".time-update-buttons > button")
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
                        flightInfoInputs.slideDown(200).css({ "display": "flex" });
                        $(this).text("").append("<img src='./FARM-CNC-image/update-time.svg'> Update Time").css({
                                "background": "#CBB1F9  0% 0% no-repeat padding-box",
                                "border": "1px solid #3E075B",
                                "margin-bottom": "0px",
                                "margin-top": "10px"
                            })
                            // confirmBtn.css({ "display": "none" })
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



            // Inputs after update=============================
            $(flightBox).find(".time-update-inputs > div > div > input").change(function() {
                $(this).css({ "border": "2px solid black", "color": "black" })

            });

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
    // $(document).ready(flightBoxControl)