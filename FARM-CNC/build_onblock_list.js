const buildOnblockList = function(data) {
    let { pinned, unpinned } = data;
    let pinnedList = document.querySelector("#pinned-list");
    let unpinnedList = document.querySelector("#unpinned-list");

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



    pinnedList.innerHTML = ``;
    unpinnedList.innerHTML = ``;

    for (var i of filteredPinned) {
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
        pinnedList.innerHTML = pinnedList.innerHTML + pinnedFlightbox;
    }
    for (var i of filteredUnpinned) {
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
        unpinnedList.innerHTML = unpinnedList.innerHTML + unpinnedFlightbox;
    }
    accrdionControl()
    arrivalFlightBoxControl()
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