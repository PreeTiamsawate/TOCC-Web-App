const buildOnblockList = function(data) {
    let { pinned, unpinned } = data;

    let pinnedList = $("#pinned-list");
    let unpinnedList = $("#unpinned-list");

    const airlineFilterInputs = document.querySelectorAll('.airline-filter-form input');
    let checkedAirlineFilters = Array.from(airlineFilterInputs).filter(airlineFilterInput => airlineFilterInput.checked)
    let checkedAirlineValues = checkedAirlineFilters.map(checkedAirlineFilter => checkedAirlineFilter.value)

    let filteredPinned = pinned
    let filteredUnpinned = unpinned

    if (checkedAirlineValues.length !== 0) {
        filteredPinned = pinned.filter(data => checkedAirlineValues.includes(data.carrierCode))
        filteredUnpinned = unpinned.filter(data => checkedAirlineValues.includes(data.carrierCode))
    }

    const searchInput = document.querySelector(".search-flight-form > input")
    let searchValue = searchInput.value

    filteredPinned = filteredPinned.filter(data => data.flightNo.includes(searchValue) || data.carrierCode.toUpperCase().includes(searchValue.toUpperCase()))
    filteredUnpinned = filteredUnpinned.filter(data => data.flightNo.includes(searchValue) || data.carrierCode.toUpperCase().includes(searchValue.toUpperCase()))

    const updateOpenBox = function(openBox) {
        openBox.find(".AC_REG").text(i.acReg)
        openBox.find(".STA_millisecond").text(i.STA)
        openBox.find(".ETA_millisecond").text(i.ETA)
        openBox.find(".NEXT_FLIGHT_NUMBER").text(i.nextFlightNo)
        openBox.find(".NEXT_FLIGHT_STD_millisecond").text(i.nextSTD)
        openBox.find(".ARRIVAL_GATE_BAY").text(i.gateBay)

        openBox.find(".GA-A-Time_millisecond").text(i.gaaTime)
        openBox.find(".Ramp-Bus-Time_millisecond").text(i.rampBusTime)
        openBox.find(".PAX-Step-Time_millisecond").text(i.paxStepTime)
        openBox.find(".RO-Time_millisecond").text(i.roTime)
        openBox.find(".Tractor-Time_millisecond").text(i.tractorTime)
    }

    let openPinnedFlightBox = $('#pinned-list .open-flight-box')
    let openPinnedCarrierCode = openPinnedFlightBox.find(".CARRIER_CODE").text()
    let openPinnedFlightNo = openPinnedFlightBox.find(".FLIGHT_NUMBER").text()
    let openPinnedFlightBoxIndex = openPinnedFlightBox.index() + 1

    $("#pinned-list").children(":not(.open-flight-box)").remove();

    for (var i of filteredPinned) {
        if (i.carrierCode === openPinnedCarrierCode && i.flightNo === openPinnedFlightNo) {
            console.log("The open box, let's update!");
            updateOpenBox(openPinnedFlightBox)
        } else {
            var pinnedFlightbox = `
        <div class="flight-box">
            <form action="" class="pin-mark">
                <input type="checkbox" name="to_unpin" value="${i.carrierCode+i.flightNo}/${i.flightDate}" checked class="d-none">
                <button type="submit"><img src="./FARM-CNC-image/active-pin.svg"></button>
            </form>
            <div class="noti-bell d-none">
                <img src="./FARM-CNC-image/yellow-bell.svg">
            </div>
            <div class="inputs-from-backend d-none">

                <span class="CARRIER_CODE">${i.carrierCode}</span>
                <span class="FLIGHT_NUMBER">${i.flightNo}</span>
                <span class="DEPARTURE_AIRPORT_IATA">${i.fromStn}</span>
                <span class="DESTINATION_AIRPORT_IATA">${i.toStn}</span>
                <span class="AC_REG">${i.acReg}</span>
                <span class="STA_millisecond">${i.STA}</span>
                <span class="ETA_millisecond">${i.ETA}</span>
                <span class="NEXT_FLIGHT_NUMBER">${i.nextFlightNo}</span>
                <span class="NEXT_FLIGHT_STD_millisecond">${i.nextSTD}</span>
                <span class="ARRIVAL_GATE_BAY">${i.gateBay}</span>

                <span class="GA-A-Time_millisecond">${i.gaaTime}</span>
                <span class="Ramp-Bus-Time_millisecond">${i.rampBusTime}</span>
                <span class="PAX-Step-Time_millisecond">${i.paxStepTime}</span>
                <span class="Cargo-STBY-Time_millisecond">${i.cargoStbyTime}</span>
                <span class="RO-Time_millisecond">${i.roTime}</span>
                <span class="Catering-Time_millisecond">${i.cateringArrTime}</span>
                <span class="Tractor-Time_millisecond">${i.tractorTime}</span>
                <span class="Cleaner-Time_millisecond">${i.cleanerArrTime}</span>
            </div>
            <div class="flight-data-box">

                <div class="flight-number-box">
                    <div>
                        <span class="carrier_code">##</span>
                        <span class="flight_number">####</span>
                    </div>
                    <div>
                        <span class="departure_airport_iata">###</span> -
                        <span class="destination_airport_iata">###</span>
                    </div>
                </div>

                <section class="main-box">

                    <div class="flight-task-status">
                        <div>
                            <div class="status-bar  ">
                            </div>
                            <div>
                                <div class="GA-A-status">GA-A Staff</div>

                            </div>

                        </div>
                        <div>
                            <div class="status-bar  ">
                            </div>
                            <div>
                                <div class="Ramp-Bus-status">Ramp Bus</div>

                            </div>

                        </div>
                        <div>
                            <div class="status-bar  ">
                            </div>
                            <div>
                                <div class="PAX-Step-status">PAX Step</div>

                            </div>

                        </div>
                        <div>
                            <div class="status-bar  ">
                            </div>
                            <div>
                                <div class="Tractor-status">Tractor</div>

                            </div>

                        </div>
                        <div>
                            <div class="status-bar  ">
                            </div>
                            <div>
                                <div class="RO-status">RO</div>

                            </div>

                        </div>
                        
                    </div>
                    <div class="count-down-container">
                        <div>
                            <div>
                                <div class="bar-0010"></div>
                            </div>
                            <div>00:10</div>
                        </div>
                        
                    </div>
                    <!-- Update Time Form ==============-->
                    <form action="" class="time-update-form">
                        <div class="time-update-inputs">
                            <div>
                                <div class="GA-A-field">
                                    <label>GA-A Staff</label>
                                    <input type="text" class="time" pattern="[0-9]{2}:[0-9]{2}">
                                </div>
                                

                            </div>
                            <div>
                                <div class="Ramp-Bus-field">
                                    <label>Ramp Bus</label>
                                    <input type="text" class="time" pattern="[0-9]{2}:[0-9]{2}">
                                </div>

                            </div>
                            <div>
                                <div class="PAX-Step-field">
                                    <label>PAX Step</label>
                                    <input type="text" class="time" pattern="[0-9]{2}:[0-9]{2}">
                                </div>

                            </div>
                            <div>
                                <div class="Tractor-field">
                                    <label>Tractor</label>
                                    <input type="text" class="time" pattern="[0-9]{2}:[0-9]{2}">
                                </div>
                               

                            </div>
                            <div>
                                <div class="RO-field">
                                    <label>RO</label>
                                    <input type="text" class="time" pattern="[0-9]{2}:[0-9]{2}">
                                </div>
                                

                            </div>
                            
                        </div>
                        

                    </form>


                </section>

                <div class="arrival-time-box">
                    <div>
                        <div>
                            <span>STA</span>
                            <span class="STA">##</span>
                            <span class="LT_UTC">UTC</span>

                        </div>
                        <div>
                            <span>ETA</span>
                            <span class="ETA">##</span>
                            <span class="LT_UTC">UTC</span>
                        </div>
                    </div>

                    <!-- Update Time Button -->
                    <div class="update-time-btn closed">
                        <img src="./FARM-CNC-image/update-time.svg"> Check Time
                    </div>

                </div>

                <div class="next-flight-time-box">
                    <div>
                        <div>
                            <span class="ac_reg">####</span> at
                            <span class="arr_gate_bay">####</span>
                        </div>
                        <div>
                            <span>Next</span>
                            <span>: </span>
                            <span class="carrier_code">##</span>
                            <span class="next_flight_number">##</span>

                        </div>
                        <div>

                            <span class="next_flight_STD">##</span>,
                            <span class="next_flight_date">## ## ##</span>
                            <span class="LT_UTC">LT</span>
                        </div>
                    </div>

                </div>
                <div class="collapse-btn">
                    <img src="./FARM-CNC-image/dropdown.svg" class="closed">
                </div>
            </div>

        </div>
    `;
            pinnedList.append(pinnedFlightbox)
        }
    }
    if (openPinnedFlightBoxIndex > 1) {
        $(`#pinned-list .flight-box:nth-of-type(${1})`).insertAfter(`#pinned-list .flight-box:nth-of-type(${openPinnedFlightBoxIndex})`)
    }

    let openUnpinnedFlightBox = $('#unpinned-list .open-flight-box')
    let openUnpinnedCarrierCode = openUnpinnedFlightBox.find(".CARRIER_CODE").text()
    let openUnpinnedFlightNo = openUnpinnedFlightBox.find(".FLIGHT_NUMBER").text()
    let openUnpinnedFlightBoxIndex = openUnpinnedFlightBox.index() + 1
    console.log(openUnpinnedCarrierCode + openUnpinnedFlightNo)
    console.log(openUnpinnedFlightBoxIndex);
    $("#unpinned-list").children(":not(.open-flight-box)").remove();
    for (var i of filteredUnpinned) {
        if (i.carrierCode === openUnpinnedCarrierCode && i.flightNo === openUnpinnedFlightNo) {
            console.log("The open box, let's update!");
            updateOpenBox(openUnpinnedFlightBox)

        } else {
            var unpinnedFlightbox = `
        <div class="flight-box">
            <form action="" class="pin-mark">
                <input type="checkbox" name="to_pin" value="${i.carrierCode+i.flightNo}/${i.flightDate}" class="d-none" checked>
                <button type="submit"><img src="./FARM-CNC-image/disable-pin.svg"></button>
            </form>
            <div class="noti-bell d-none">
                <img src="./FARM-CNC-image/yellow-bell.svg">
            </div>
            <div class="inputs-from-backend d-none">

                <span class="CARRIER_CODE">${i.carrierCode}</span>
                <span class="FLIGHT_NUMBER">${i.flightNo}</span>
                <span class="DEPARTURE_AIRPORT_IATA">${i.fromStn}</span>
                <span class="DESTINATION_AIRPORT_IATA">${i.toStn}</span>
                <span class="AC_REG">${i.acReg}</span>
                <span class="STA_millisecond">${i.STA}</span>
                <span class="ETA_millisecond">${i.ETA}</span>
                <span class="NEXT_FLIGHT_NUMBER">${i.nextFlightNo}</span>
                <span class="NEXT_FLIGHT_STD_millisecond">${i.nextSTD}</span>
                <span class="ARRIVAL_GATE_BAY">${i.gateBay}</span>

                <span class="GA-A-Time_millisecond">${i.gaaTime}</span>
                <span class="Ramp-Bus-Time_millisecond">${i.rampBusTime}</span>
                <span class="PAX-Step-Time_millisecond">${i.paxStepTime}</span>
                <span class="RO-Time_millisecond">${i.roTime}</span>
                <span class="Tractor-Time_millisecond">${i.tractorTime}</span>
               
            </div>
            <div class="flight-data-box">

                <div class="flight-number-box">
                    <div>
                        <span class="carrier_code">##</span>
                        <span class="flight_number">####</span>
                    </div>
                    <div>
                        <span class="departure_airport_iata">###</span> -
                        <span class="destination_airport_iata">###</span>
                    </div>
                </div>

                <section class="main-box">

                    <div class="flight-task-status">
                        <div>
                            <div class="status-bar  ">
                            </div>
                            <div>
                                <div class="GA-A-status">GA-A Staff</div>

                            </div>

                        </div>
                        <div>
                            <div class="status-bar  ">
                            </div>
                            <div>
                                <div class="Ramp-Bus-status">Ramp Bus</div>

                            </div>

                        </div>
                        <div>
                            <div class="status-bar  ">
                            </div>
                            <div>
                                <div class="PAX-Step-status">PAX Step</div>

                            </div>

                        </div>
                        <div>
                            <div class="status-bar  ">
                            </div>
                            <div>
                                <div class="Tractor-status">Tractor</div>

                            </div>

                        </div>
                        <div>
                            <div class="status-bar  ">
                            </div>
                            <div>
                                <div class="RO-status">RO</div>

                            </div>

                        </div>
                        
                    </div>
                    <div class="count-down-container">
                        <div>
                            <div>
                                <div class="bar-0010"></div>
                            </div>
                            <div>00:10</div>
                        </div>
                        
                    </div>
                    <!-- Update Time Form ==============-->
                    <form action="" class="time-update-form">
                        <div class="time-update-inputs">
                            <div>
                                <div class="GA-A-field">
                                    <label>GA-A Staff</label>
                                    <input type="text" class="time" pattern="[0-9]{2}:[0-9]{2}">
                                </div>
                                

                            </div>
                            <div>
                                <div class="Ramp-Bus-field">
                                    <label>Ramp Bus</label>
                                    <input type="text" class="time" pattern="[0-9]{2}:[0-9]{2}">
                                </div>

                            </div>
                            <div>
                                <div class="PAX-Step-field">
                                    <label>PAX Step</label>
                                    <input type="text" class="time" pattern="[0-9]{2}:[0-9]{2}">
                                </div>

                            </div>
                            <div>
                                <div class="Tractor-field">
                                    <label>Tractor</label>
                                    <input type="text" class="time" pattern="[0-9]{2}:[0-9]{2}">
                                </div>
                               

                            </div>
                            <div>
                                <div class="RO-field">
                                    <label>RO</label>
                                    <input type="text" class="time" pattern="[0-9]{2}:[0-9]{2}">
                                </div>
                                

                            </div>
                            
                        </div>
                        

                    </form>


                </section>

                <div class="arrival-time-box">
                    <div>
                        <div>
                            <span>STA</span>
                            <span class="STA">##</span>
                            <span class="LT_UTC">UTC</span>

                        </div>
                        <div>
                            <span>ETA</span>
                            <span class="ETA">##</span>
                            <span class="LT_UTC">UTC</span>
                        </div>
                    </div>
                    <!-- Update Time Button -->
                    <div class="update-time-btn closed">
                        <img src="./FARM-CNC-image/update-time.svg"> Check Time
                    </div>

                </div>

                <div class="next-flight-time-box">
                    <div>
                        <div>
                            <span class="ac_reg">####</span> at
                            <span class="arr_gate_bay">####</span>
                        </div>
                        <div>
                            <span>Next</span>
                            <span>: </span>
                            <span class="carrier_code">##</span>
                            <span class="next_flight_number">##</span>

                        </div>
                        <div>

                            <span class="next_flight_STD">##</span>,
                            <span class="next_flight_date">## ## ##</span>
                            <span class="LT_UTC">LT</span>
                        </div>
                    </div>

                </div>
                <div class="collapse-btn">
                    <img src="./FARM-CNC-image/dropdown.svg" class="closed">
                </div>
            </div>

        </div>`;
            unpinnedList.append(unpinnedFlightbox)
        }
    }
    if (openUnpinnedFlightBoxIndex > 1) {
        $(`#unpinned-list .flight-box:nth-of-type(${1})`).insertAfter(`#unpinned-list .flight-box:nth-of-type(${openUnpinnedFlightBoxIndex})`)
    }
    accrdionControl()
    onBlockFlightBoxControl()
    timeControl()
    filterDelayFlights()
}
const filterConfirmBtn = document.querySelector('.airline-filter-form button')
filterConfirmBtn.addEventListener('click', function(e) {
    e.preventDefault()
    buildOnblockList(rawData);
})
const searchInput = document.querySelector(".search-flight-form > input")
searchInput.addEventListener('input', function(e) {
    e.preventDefault()
    buildOnblockList(rawData);
})