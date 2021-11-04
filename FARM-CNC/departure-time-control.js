const timeControl = function() {
    const flightBoxes = $(".flight-box")
    for (let flightBox of flightBoxes) {
        let STD = Date.parse($(flightBox).find(".STD_millisecond").text());
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

        const countDown = function(countBar, startTime, finishTime) {
            let barWidth = ((finishTime - Date.now()) / (finishTime - startTime)) * 100
            let barWidthPercent = barWidth.toString() + "%"
            if (barWidth <= 100 && barWidth >= 0) {

                console.log(barWidthPercent)
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
    }
}
timeControl()
setInterval(timeControl, 60000);