$(document).ready(function() {
    const timeControl = function() {
        const flightBoxes = $(".flight-box")
        for (let flightBox of flightBoxes) {
            let STD = new Date($(flightBox).find(".inputs-from-backend .STD_millisecond").text());
            let ETD = new Date($(flightBox).find(".inputs-from-backend .ETD_millisecond").text());
            let currentTime = new Date()
            let STD0005 = STD - 300000
            let STD0010 = STD - 600000
            let STD0040 = STD - 2.4e+6
            let STD0050 = STD - 3e+6
            let STD0100 = STD - 3.6e+6
            let STD0115 = STD - 4.5e+6
            let STD0120 = STD - 4.8e+6
            let STD0130 = STD - 5.4e+6

            const barSTD = $(flightBox).find(".bar-STD")
            const bar0005 = $(flightBox).find(".bar-0005")
            const bar0010 = $(flightBox).find(".bar-0010")
            const bar0040 = $(flightBox).find(".bar-0040")
            const bar0050 = $(flightBox).find(".bar-0050")
            const bar0100 = $(flightBox).find(".bar-0100")
            const bar0115 = $(flightBox).find(".bar-0115")
            const bar0120 = $(flightBox).find(".bar-0120")


            // Countdown Bar Controler===================================================
            const countDown = function(countBar, startTime, finishTime) {
                let barWidth = ((finishTime - currentTime) / (finishTime - startTime)) * 100
                let barWidthPercent = barWidth.toString() + "%"
                const barDeadline = countBar.parent().next()
                if (barWidth <= 100 && barWidth >= 0) {

                    // console.log(barWidthPercent)
                    countBar.css({ "width": barWidthPercent })
                } else if (barWidth <= 0) {
                    countBar.css({ "width": "0%" })
                    barDeadline.css({ "color": "#707070" })
                        // console.log(barWidthPercent)
                }
            }

            countDown(barSTD, STD0005, STD);
            countDown(bar0005, STD0010, STD0005);
            countDown(bar0010, STD0040, STD0010);
            countDown(bar0040, STD0050, STD0040);
            countDown(bar0050, STD0100, STD0050);
            countDown(bar0100, STD0115, STD0100);
            countDown(bar0115, STD0120, STD0115);
            countDown(bar0120, STD0130, STD0120);


            // Task Status Controller=============================================
            const cargoCompBar = $(flightBox).find(".Cargo-COMP-status")
            const boardingCompBar = $(flightBox).find(".Boarding-COMP-status")
            const pushbackStbyBar = $(flightBox).find(".Pushback-STBY-status")
            const boardingBar = $(flightBox).find(".Boarding-status")
            const cateringCompBar = $(flightBox).find(".Catering-COMP-status")
            const cleanerCompBar = $(flightBox).find(".Cleaner-COMP-status")
            const rampBusBar = $(flightBox).find(".Ramp-Bus-status")
            const paxStepBar = $(flightBox).find(".PAX-Step-status")
            const cargoArrBar = $(flightBox).find(".Cargo-ARR-status")
            const gateOpenBar = $(flightBox).find(".Gate-Open-status")
            const cleanerArrBar = $(flightBox).find(".Cleaner-ARR-status")
            const cateringArrBar = $(flightBox).find(".Catering-ARR-status")
            const crewArrBar = $(flightBox).find(".Crew-ARR-status")

            const cargoCompInput = $(flightBox).find(".Cargo-COMP-field > input")
            const boardingCompInput = $(flightBox).find(".Boarding-COMP-field > input")
            const pushbackStbyInput = $(flightBox).find(".Pushback-STBY-field > input")
            const boardingInput = $(flightBox).find(".Boarding-field > input")
            const cateringCompInput = $(flightBox).find(".Catering-COMP-field > input")
            const cleanerCompInput = $(flightBox).find(".Cleaner-COMP-field > input")
            const rampBusInput = $(flightBox).find(".Ramp-Bus-field > input")
            const paxStepInput = $(flightBox).find(".PAX-Step-field > input")
            const cargoArrInput = $(flightBox).find(".Cargo-ARR-field > input")
            const gateOpenInput = $(flightBox).find(".Gate-Open-field > input")
            const cleanerArrInput = $(flightBox).find(".Cleaner-ARR-field > input")
            const cateringArrInput = $(flightBox).find(".Catering-ARR-field > input")
            const crewArrInput = $(flightBox).find(".Cre-ARR-field > input")

            const cargoCompTime = new Date($(flightBox).find(".inputs-from-backend .Cargo-COMP-Time_millisecond").text())
            const boardingCompTime = new Date($(flightBox).find(".inputs-from-backend .Boarding-COMP-Time_millisecond").text())
            const pushbackStbyTime = new Date($(flightBox).find(".inputs-from-backend .Pushback-STBY-Time_millisecond").text())
            const boardingTime = new Date($(flightBox).find(".inputs-from-backend .Boarding-Time_millisecond").text())
            const cateringCompTime = new Date($(flightBox).find(".inputs-from-backend .Catering-COMP-Time_millisecond").text())
            const cleanerCompTime = new Date($(flightBox).find(".inputs-from-backend .Cleaner-COMP-Time_millisecond").text())
            const rampBusTime = new Date($(flightBox).find(".inputs-from-backend .Ramp-Bus-Time_millisecond").text())
            const paxStepTime = new Date($(flightBox).find(".inputs-from-backend .PAX-Step-Time_millisecond").text())
            const cargoArrTime = new Date($(flightBox).find(".inputs-from-backend .Cargo-ARR-Time_millisecond").text())
            const gateOpenTime = new Date($(flightBox).find(".inputs-from-backend .Gate-Open-Time_millisecond").text())
            const cleanerArrTime = new Date($(flightBox).find(".inputs-from-backend .Cleaner-ARR-Time_millisecond").text())
            const cateringArrTime = new Date($(flightBox).find(".inputs-from-backend .Catering-ARR-Time_millisecond").text())
            const crewArrTime = new Date($(flightBox).find(".inputs-from-backend .Crew-ARR-Time_millisecond").text())


            const pinkStatus = {
                "background": "#FCC1CA 0% 0% no-repeat padding-box",
                "border": "1px solid #CA637A",
                "color": "#CA637A"
            }
            const orangeStatus = {
                "background": "#FFE3AE 0% 0% no-repeat padding-box",
                "border": "1px solid #F9AC39",
                "color": "#F9AC39"
            }
            const greenStatus = {
                "background": "#A2F6CA 0% 0% no-repeat padding-box",
                "border": "1px solid #5FA980",
                "color": "##5FA980"
            }
            const tastStatusDisplay = function(taskBar, taskInput, taskTime, deadLine) {

                // if (!(!taskTime && deadLine && currentTime <= deadLine)) {
                if (taskTime == "Invalid Date" && currentTime > deadLine) {
                    taskBar.css(pinkStatus)
                    taskBar.attr("task-status", "pink")
                    taskInput.css(pinkStatus)
                } else if (taskTime > deadLine) {
                    taskBar.css(orangeStatus)
                    taskBar.attr("task-status", "orange")
                    taskInput.css(orangeStatus)
                } else if (taskTime <= deadLine) {
                    taskBar.css(greenStatus)
                    taskBar.attr("task-status", "green")
                    taskInput.css(greenStatus)
                } else {
                    taskBar.attr("task-status", "grey")
                }
                // }
            }
            tastStatusDisplay(cargoCompBar, cargoCompInput, cargoCompTime, STD)
            tastStatusDisplay(boardingCompBar, boardingCompInput, boardingCompTime, STD0005)
            tastStatusDisplay(pushbackStbyBar, pushbackStbyInput, pushbackStbyTime, STD0005)
            tastStatusDisplay(boardingBar, boardingInput, boardingTime, STD0010)
            tastStatusDisplay(cateringCompBar, cateringCompInput, cateringCompTime, STD0010)
            tastStatusDisplay(cleanerCompBar, cleanerCompInput, cleanerCompTime, STD0040)
            tastStatusDisplay(rampBusBar, rampBusInput, rampBusTime, STD0040)
            tastStatusDisplay(paxStepBar, paxStepInput, paxStepTime, STD0050)
            tastStatusDisplay(cargoArrBar, cargoArrInput, cargoArrTime, STD0050)
            tastStatusDisplay(gateOpenBar, gateOpenInput, gateOpenTime, STD0100)
            tastStatusDisplay(cleanerArrBar, cleanerArrInput, cleanerArrTime, STD0115)
            tastStatusDisplay(cateringArrBar, cateringArrInput, cateringArrTime, STD0120)
            tastStatusDisplay(crewArrBar, crewArrInput, crewArrTime, STD0120)

            // Status Bar Controller=============================================
            const statusBars = $(flightBox).find(".status-bar")
            for (let statusBar of statusBars) {
                const childTasks = $(statusBar).next().find('div');
                const taskStatusCollector = []
                for (let childTask of childTasks) {
                    const taskStatus = $(childTask).attr("task-status")

                    taskStatusCollector.push(taskStatus)
                }
                // console.log(taskStatusCollector)
                if (taskStatusCollector.includes("pink")) {
                    $(statusBar).css(pinkStatus)
                } else if (taskStatusCollector.includes("orange")) {
                    $(statusBar).css(orangeStatus)
                } else if (taskStatusCollector.includes("grey")) {

                } else if (taskStatusCollector.includes("green")) {
                    $(statusBar).css(greenStatus)
                }
            }
            // Departure Time Box status
            if (ETD > STD) {
                $(flightBox).find(".departure-time-box > div:nth-of-type(1)").css(pinkStatus)
                $(flightBox).find(".red-bell").removeClass("d-none")
            } else {
                $(flightBox).find(".departure-time-box > div:nth-of-type(1)").css(greenStatus)
                $(flightBox).find(".red-bell").addClass("d-none")
            }
            // Displaying the data===================================================

            const customGetHours = function(timeStamp) {
                if ($(".time-zone-form #UTC").is(":checked")) {
                    return ("0" + timeStamp.getUTCHours().toString()).slice(-2)
                } else if ($(".time-zone-form #LT").is(":checked")) {
                    return ("0" + timeStamp.getHours().toString()).slice(-2)
                }

            }
            const customGetMinutes = function(timeStamp) {
                if ($(".time-zone-form #UTC").is(":checked")) {
                    return ("0" + timeStamp.getUTCMinutes().toString()).slice(-2)
                } else if ($(".time-zone-form #LT").is(":checked")) {
                    return ("0" + timeStamp.getMinutes().toString()).slice(-2)
                }
            }

            // display STD ETD
            $(flightBox).find(".carrier_code").text($(flightBox).find(".inputs-from-backend .CARRIER_CODE").text())
            $(flightBox).find(".flight_number").text($(flightBox).find(".inputs-from-backend .FLIGHT_NUMBER").text())
            $(flightBox).find(".departure_airport_iata").text($(flightBox).find(".inputs-from-backend .DEPARTURE_AIRPORT_IATA").text())
            $(flightBox).find(".destination_airport_iata").text($(flightBox).find(".inputs-from-backend .DESTINATION_AIRPORT_IATA").text())
            $(flightBox).find(".ac_reg").text($(flightBox).find(".inputs-from-backend .AC_REG").text())
            $(flightBox).find(".STD").text(customGetHours(STD) + customGetMinutes(STD))
            $(flightBox).find(".ETD").text(customGetHours(ETD) + customGetMinutes(ETD))

            // display task times in at their inputs
            cargoCompInput.val(customGetHours(cargoCompTime) + ":" + customGetMinutes(cargoCompTime))
            boardingCompInput.val(customGetHours(boardingCompTime) + ":" + customGetMinutes(boardingCompTime))
            pushbackStbyInput.val(customGetHours(pushbackStbyTime) + ":" + customGetMinutes(pushbackStbyTime))
            boardingInput.val(customGetHours(boardingTime) + ":" + customGetMinutes(boardingTime))
            cateringCompInput.val(customGetHours(cateringCompTime) + ":" + customGetMinutes(cateringCompTime))
            cleanerCompInput.val(customGetHours(cleanerCompTime) + ":" + customGetMinutes(cleanerCompTime))
            rampBusInput.val(customGetHours(rampBusTime) + ":" + customGetMinutes(rampBusTime))
            paxStepInput.val(customGetHours(paxStepTime) + ":" + customGetMinutes(paxStepTime))
            cargoArrInput.val(customGetHours(cargoArrTime) + ":" + customGetMinutes(cargoArrTime))
            gateOpenInput.val(customGetHours(gateOpenTime) + ":" + customGetMinutes(gateOpenTime))
            cleanerArrInput.val(customGetHours(cleanerArrTime) + ":" + customGetMinutes(cleanerArrTime))
            cateringArrInput.val(customGetHours(cateringArrTime) + ":" + customGetMinutes(cateringArrTime))
            crewArrInput.val(customGetHours(crewArrTime) + ":" + customGetMinutes(crewArrTime))

            // display aircraft status
            let aircraftStartTime = new Date($(flightBox).find(".inputs-from-backend .START_TIME_millisecond").text());
            let aircraftArriveTime = new Date($(flightBox).find(".inputs-from-backend .ARRIVE_TIME_millisecond").text());
            let repairEstCompTime = new Date($(flightBox).find(".inputs-from-backend .REPAIR_EST_COMPLETE_TIME_millisecond").text())
            let aircraftPowerUpTime = new Date($(flightBox).find(".inputs-from-backend .AIRCRAFT_POWER_UP_TIME_millisecond").text())
            let aircraftReleasedTime = new Date($(flightBox).find(".inputs-from-backend .AIRCRAFT_RELEASED_TIME_millisecond").text())
            $(flightBox).find(".START_TIME").text(customGetHours(aircraftStartTime) + ":" + customGetMinutes(aircraftStartTime))
            $(flightBox).find(".ARRIVE_TIME").text(customGetHours(aircraftArriveTime) + ":" + customGetMinutes(aircraftArriveTime))
            $(flightBox).find(".REPAIR_EST_COMPLETE_TIME").text(customGetHours(repairEstCompTime) + ":" + customGetMinutes(repairEstCompTime))
            if (aircraftPowerUpTime != "Invalid Date") {
                $(flightBox).find(".power-up-status").css(greenStatus)
            }
            if (aircraftReleasedTime != "Invalid Date") {
                $(flightBox).find(".release-status").css(greenStatus)
                $(flightBox).find(".airplane-icon-box > div").css(greenStatus)
            }
            $(flightBox).find(".start_gate_bay").text($(flightBox).find(".inputs-from-backend .START_GATE_BAY").text())
            $(flightBox).find(".arrive_gate_bay").text($(flightBox).find(".inputs-from-backend .ARRIVE_GATE_BAY").text())
            $(flightBox).find(".repair_status_image").attr("href", $(flightBox).find(".inputs-from-backend .REPAIR_STATUS_IMAGE_URL").text())
        }
    }
    timeControl()
        // setInterval(timeControl, 10000);
    $(".time-zone-form input").change(timeControl);
})