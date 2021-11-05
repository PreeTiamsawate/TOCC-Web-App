const timeControl = function() {
    const flightBoxes = $(".flight-box")
    for (let flightBox of flightBoxes) {
        let STD = Date.parse($(flightBox).find(".STD_millisecond").text());
        let currentTime = Date.now()
        let STD0005 = STD - 300000
        let STD0010 = STD - 600000
        let STD0040 = STD - 2.4e+6
        let STD0050 = STD - 3e+6
        let STD0100 = STD - 3.6e+6
        let STD0115 = STD - 4.5e+6
        let STD0120 = STD - 4.8e+6
        let STD0130 = STD - 5.4e+6

        const bar0005 = $(flightBox).find(".bar-0005")
        const bar0010 = $(flightBox).find(".bar-0010")
        const bar0040 = $(flightBox).find(".bar-0040")
        const bar0050 = $(flightBox).find(".bar-0050")
        const bar0100 = $(flightBox).find(".bar-0100")
        const bar0115 = $(flightBox).find(".bar-0115")
        const bar0120 = $(flightBox).find(".bar-0120")
        const bar0130 = $(flightBox).find(".bar-0130")

        // Countdown Bar Controler===================================================
        const countDown = function(countBar, startTime, finishTime) {
            let barWidth = ((finishTime - currentTime) / (finishTime - startTime)) * 100
            let barWidthPercent = barWidth.toString() + "%"
            if (barWidth <= 100 && barWidth >= 0) {

                // console.log(barWidthPercent)
                countBar.css({ "width": barWidthPercent })
            } else if (barWidth <= 0) {
                countBar.css({ "width": "0%" })
            }
        }
        countDown(bar0005, STD0005, STD);
        countDown(bar0010, STD0010, STD0005);
        countDown(bar0040, STD0040, STD0010);
        countDown(bar0050, STD0050, STD0040);
        countDown(bar0100, STD0100, STD0050);
        countDown(bar0115, STD0115, STD0100);
        countDown(bar0120, STD0120, STD0115);
        countDown(bar0130, STD0130, STD0120);

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
        const crewArrInput = $(flightBox).find(".Crew-ARR-field > input")

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
        const tastStatusDisplay = function(taskBar, taskInput, deadLine) {
            const taskTime = Date.parse(taskBar.next().text())
            if (!(!taskTime && deadLine && currentTime <= deadLine)) {
                if (!taskTime && currentTime > deadLine) {
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
                }
            }
        }
        tastStatusDisplay(cargoCompBar, cargoCompInput, STD)
        tastStatusDisplay(boardingCompBar, boardingCompInput, STD0005)
        tastStatusDisplay(pushbackStbyBar, pushbackStbyInput, STD0005)
        tastStatusDisplay(boardingBar, boardingInput, STD0010)
        tastStatusDisplay(cateringCompBar, cateringCompInput, STD0010)
        tastStatusDisplay(cleanerCompBar, cleanerCompInput, STD0040)
        tastStatusDisplay(rampBusBar, rampBusInput, STD0040)
        tastStatusDisplay(paxStepBar, paxStepInput, STD0050)
        tastStatusDisplay(cargoArrBar, cargoArrInput, STD0050)
        tastStatusDisplay(gateOpenBar, gateOpenInput, STD0100)
        tastStatusDisplay(cleanerArrBar, cleanerArrInput, STD0115)
        tastStatusDisplay(cateringArrBar, cateringArrInput, STD0120)
        tastStatusDisplay(crewArrBar, crewArrInput, STD0120)

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
            } else if (taskStatusCollector.includes("green")) {
                $(statusBar).css(greenStatus)
            }
        }




    }
}
timeControl()
setInterval(timeControl, 60000);