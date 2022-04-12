const timeControl = function() {
    const flightBoxes = $(".flight-box")
    for (let flightBox of flightBoxes) {
        let STA = new Date($(flightBox).find(".inputs-from-backend .STA_millisecond").text());
        let ETA = new Date($(flightBox).find(".inputs-from-backend .ETA_millisecond").text());
        let currentTime = new Date()
        let STD0015 = ETA - 900000
        let STA0010 = ETA - 600000


        // const barSTA = $(flightBox).find(".bar-STA")
        const bar0010 = $(flightBox).find(".bar-0010")



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

        // countDown(barSTA, STA0010, STA);
        countDown(bar0010, STD0015, STA0010);



        // Task Status Controller=============================================
        const GAABar = $(flightBox).find(".GA-A-status")
        const rampBusBar = $(flightBox).find(".Ramp-Bus-status")
        const paxStepBar = $(flightBox).find(".PAX-Step-status")
            // const cargoSTBYBar = $(flightBox).find(".Cargo-STBY-status")
        const ROBar = $(flightBox).find(".RO-status")
            // const cateringBar = $(flightBox).find(".Catering-status")
        const tractorBar = $(flightBox).find(".Tractor-status")
            // const cleanerBar = $(flightBox).find(".Cleaner-status")

        const GAATime = new Date($(flightBox).find(".inputs-from-backend .GA-A-Time_millisecond").text())
        const rampBusTime = new Date($(flightBox).find(".inputs-from-backend .Ramp-Bus-Time_millisecond").text())
        const paxStepTime = new Date($(flightBox).find(".inputs-from-backend .PAX-Step-Time_millisecond").text())
            // const cargoSTBYTime = new Date($(flightBox).find(".inputs-from-backend .Cargo-STBY-Time_millisecond").text())
        const ROTime = new Date($(flightBox).find(".inputs-from-backend .RO-Time_millisecond").text())
            // const cateringTime = new Date($(flightBox).find(".inputs-from-backend .Catering-Time_millisecond").text())
        const tractorTime = new Date($(flightBox).find(".inputs-from-backend .Tractor-Time_millisecond").text())
            // const cleanerTime = new Date($(flightBox).find(".inputs-from-backend .Cleaner-Time_millisecond").text())

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
        const tastStatusDisplay = function(taskBar, taskTime, deadLine) {
            if (taskTime == "Invalid Date" && currentTime > deadLine) {
                taskBar.css(pinkStatus)
                taskBar.attr("task-status", "pink")
            } else if (taskTime > deadLine) {
                taskBar.css(orangeStatus)
                taskBar.attr("task-status", "orange")
            } else if (taskTime <= deadLine) {
                taskBar.css(greenStatus)
                taskBar.attr("task-status", "green")
            } else {
                taskBar.attr("task-status", "grey")
            }
        }
        tastStatusDisplay(GAABar, GAATime, STA0010)
        tastStatusDisplay(rampBusBar, rampBusTime, STA0010)
        tastStatusDisplay(paxStepBar, paxStepTime, STA0010)
            // tastStatusDisplay(cargoSTBYBar, cargoSTBYTime, STA0010)
        tastStatusDisplay(ROBar, ROTime, STA0010)
            // tastStatusDisplay(cateringBar, cateringTime, STA)
        tastStatusDisplay(tractorBar, tractorTime, STA0010)
            // tastStatusDisplay(cleanerBar, cleanerTime, STA)



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
        if (ETA > STA) {
            $(flightBox).find(".arrival-time-box > div:nth-of-type(1)").css(orangeStatus)
            $(flightBox).find(".noti-bell").removeClass("d-none")
        } else {
            $(flightBox).find(".arrival-time-box > div:nth-of-type(1)").css(greenStatus)
            $(flightBox).find(".noti-bell").addClass("d-none")
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
        const customGetFullTime = function(timeStamp) {
            if (timeStamp == "Invalid Date") {
                return ("")
            } else {
                console.log(timeStamp)
                return (customGetHours(timeStamp) + ":" + customGetMinutes(timeStamp))
            }
        }
        if ($(".time-zone-form #UTC").is(":checked")) {
            $(flightBox).find(".LT_UTC").text("UTC")
        } else if ($(".time-zone-form #LT").is(":checked")) {
            $(flightBox).find(".LT_UTC").text("LT")
        }
        const nextFlightSTDDateTime = new Date($(flightBox).find(".inputs-from-backend .NEXT_FLIGHT_STD_millisecond").text())
        const getDate = function(fullDateTime) {
            if ($(".time-zone-form #UTC").is(":checked")) {
                return fullDateTime.toUTCString().slice(0, -13).replace(',', '').slice(4, 15)
            } else if ($(".time-zone-form #LT").is(":checked")) {
                return fullDateTime.toDateString().slice(4, 15)
            }
        }

        // display STD ETD
        $(flightBox).find(".carrier_code").text($(flightBox).find(".inputs-from-backend .CARRIER_CODE").text())
        $(flightBox).find(".flight_number").text($(flightBox).find(".inputs-from-backend .FLIGHT_NUMBER").text())
        $(flightBox).find(".departure_airport_iata").text($(flightBox).find(".inputs-from-backend .DEPARTURE_AIRPORT_IATA").text())
        $(flightBox).find(".destination_airport_iata").text($(flightBox).find(".inputs-from-backend .DESTINATION_AIRPORT_IATA").text())
        $(flightBox).find(".ac_reg").text($(flightBox).find(".inputs-from-backend .AC_REG").text())
        $(flightBox).find(".STA").text(customGetFullTime(STA))
        $(flightBox).find(".ETA").text(customGetFullTime(ETA))
        $(flightBox).find(".arr_gate_bay").text($(flightBox).find(".inputs-from-backend .ARRIVAL_GATE_BAY").text())
        $(flightBox).find(".next_flight_number").text($(flightBox).find(".inputs-from-backend .NEXT_FLIGHT_NUMBER").text())
        $(flightBox).find(".next_flight_STD").text(customGetFullTime(nextFlightSTDDateTime))
        $(flightBox).find(".next_flight_date").text(getDate(nextFlightSTDDateTime))




    }
}

setInterval(timeControl, 300000);
$(".time-zone-form input").change(timeControl);