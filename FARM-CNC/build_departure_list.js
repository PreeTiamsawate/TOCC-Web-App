const buildDepartureList = function(data) {
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
                <img src="./FARM-CNC-image/red-bell.png">
            </div>
            <div class="inputs-from-backend d-none">
                
                <span class="CARRIER_CODE">${i.carrierCode}</span>
                <span class="FLIGHT_NUMBER">${i.flightNo}</span>
                <span class="DEPARTURE_AIRPORT_IATA">${i.fromStn}</span>
                <span class="DESTINATION_AIRPORT_IATA">${i.toStn}</span>
                <span class="AC_REG">${i.acReg}</span>
                <span class="STD_millisecond">${i.STD}</span>
                <span class="ETD_millisecond">${i.ETD}</span>
                <span class="BOOKING_Str">${i.bookingStr}</span>

                <span class="Crew-ARR-Time_millisecond">${i.crewArrTime}</span>
                <span class="Catering-ARR-Time_millisecond">${i.cateringArrTime}</span>
                <span class="Cleaner-ARR-Time_millisecond">${i.cleanerArrTime}</span>
                <span class="Gate-Open-Time_millisecond">${i.gateOpenTime}</span>
                <span class="Cargo-ARR-Time_millisecond">${i.cargoArrTime}</span>
                <span class="PAX-Step-Time_millisecond">${i.paxStepTime}</span>
                <span class="Ramp-Bus-Time_millisecond">${i.rampBusTime}</span>
                <span class="Cleaner-COMP-Time_millisecond">${i.cleanerCompTime}</span>
                <span class="Catering-COMP-Time_millisecond">${i.cateringCompTime}</span>
                <span class="Boarding-Time_millisecond">${i.boardingTime}</span>
                <span class="Pushback-STBY-Time_millisecond">${i.pushbackStbyTime}</span>
                <span class="Boarding-COMP-Time_millisecond">${i.boardingCompTime}</span>
                <span class="Cargo-COMP-Time_millisecond">${i.cargoCompTime}</span>

                <span class="START_TIME_millisecond"></span>
                <span class="ARRIVE_TIME_millisecond"></span>
                <span class="START_GATE_BAY"></span>
                <span class="ARRIVE_GATE_BAY"></span>
                <span class="REPAIR_EST_COMPLETE_TIME_millisecond"></span>
                <span class="REPAIR_STATUS_IMAGE_URL"></span>
                <span class="AIRCRAFT_POWER_UP_TIME_millisecond"></span>
                <span class="AIRCRAFT_RELEASED_TIME_millisecond"></span>

                <span class="ZFW-FINAL">${i.zfwFinal}</span>
                <span class="ZFW">${i.zfw}</span>
                <span class="GROSS_WEIGHT">${i.grossWeight}</span>
                <span class="BALLAST">${i.ballast}</span>
                <span class="PLN-FUEL">${i.planningFuel}</span>
                <span class="FLT_TIME">${i.flightTime}</span>
                <span class="TOBT_millisecond">${i.TOBT}</span>
                <span class="TSAT_millisecond">${i.TSAT}</span>
                <span class="CTOT_millisecond">${i.CTOT}</span>
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
                <div class="airplane-icon-box">
                    <div class="closed">
                        <img src="./FARM-CNC-image/Icon_airplane_grey.svg">
                    </div>
                </div>

                <section class="main-box">

                    <div class="flight-task-status">
                        <div>
                            <div class="status-bar  ">
                            </div>
                            <div>
                                <div class="Crew-ARR-status">Crew ARR</div>
                                <div class="Catering-ARR-status">Catering ARR</div>
                            </div>
                            <div class="count-down-box">
                                <div>
                                    <div class="bar-0120"></div>
                                </div>
                                <div>01:20</div>
                            </div>
                        </div>
                        <div>
                            <div class="status-bar  ">
                            </div>
                            <div>
                                <div class="Cleaner-ARR-status">Cleaner ARR</div>

                            </div>
                            <div class="count-down-box">

                                <div>
                                    <div class="bar-0115"></div>
                                </div>
                                <div>01:15</div>
                            </div>
                        </div>
                        <div>
                            <div class="status-bar  ">
                            </div>
                            <div>
                                <div class="Gate-Open-status">Gate Open</div>

                            </div>
                            <div class="count-down-box">
                                <div>
                                    <div class="bar-0100"></div>
                                </div>
                                <div>01:00</div>
                            </div>
                        </div>
                        <div>
                            <div class="status-bar  ">
                            </div>
                            <div>
                                <div class="Cargo-ARR-status">Cargo ARR</div>
                                <div class="PAX-Step-status">PAX Step</div>
                            </div>
                            <div class="count-down-box">
                                <div>
                                    <div class="bar-0050"></div>
                                </div>
                                <div>00:50</div>
                            </div>
                        </div>
                        <div>
                            <div class="status-bar  ">
                            </div>
                            <div>
                                <div class="Ramp-Bus-status">Ramp Bus</div>
                                <div class="Cleaner-COMP-status">Cleaner COMP</div>
                            </div>
                            <div class="count-down-box">
                                <div>
                                    <div class="bar-0040"></div>
                                </div>
                                <div>00:40</div>

                            </div>
                        </div>
                        <div>
                            <div class="status-bar  ">
                            </div>
                            <div>
                                <div class="Catering-COMP-status">Catering COMP</div>
                                <div class="Boarding-status">Boarding</div>
                            </div>
                            <div class="count-down-box">

                                <div>
                                    <div class="bar-0010"></div>
                                </div>
                                <div>00:10</div>
                            </div>
                        </div>
                        <div>
                            <div class="status-bar  ">
                            </div>
                            <div>
                                <div class="Pushback-STBY-status">Pushback STBY</div>
                                <div class="Boarding-COMP-status">Boarding COMP</div>
                            </div>
                            <div class="count-down-box">

                                <div>
                                    <div class="bar-0005"></div>
                                </div>
                                <div>00:05</div>
                            </div>
                        </div>
                        <div>
                            <div class="status-bar  ">
                            </div>
                            <div>
                                <div class="Cargo-COMP-status">Cargo COMP</div>

                            </div>
                            <div class="count-down-box">

                                <div>
                                    <div class="bar-STD"></div>
                                </div>
                                <div>STD</div>
                            </div>
                        </div>
                    </div>
                  
                    <form action=""  class="time-update-form">
                        <div class="time-update-inputs">
                            <div>
                                <div class="Crew-ARR-field">
                                    <label>Crew ARR</label>
                                    <input type="text" name="crewArrTime[${i.carrierCode+i.flightNo}]" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]">
                                </div>
                                <div class="Catering-ARR-field">
                                    <label>Catering ARR</label>
                                    <input type="text" name="cateringArrTime[${i.carrierCode+i.flightNo}]"  class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]">
                                </div>

                            </div>
                            <div>
                                <div class="Cleaner-ARR-field">
                                    <label>Cleaner ARR</label>
                                    <input type="text" name="cleanerArrTime[${i.carrierCode+i.flightNo}]" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]">
                                </div>

                            </div>
                            <div>
                                <div class="Gate-Open-field">
                                    <label>Gate Open</label>
                                    <input type="text" name="gateOpenTime[${i.carrierCode+i.flightNo}]" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]">
                                </div>

                            </div>
                            <div>
                                <div class="Cargo-ARR-field">
                                    <label>Cargo ARR</label>
                                    <input type="text" name="cargoArrTime[${i.carrierCode+i.flightNo}]" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]">
                                </div>
                                <div class="PAX-Step-field">
                                    <label>PAX Step</label>
                                    <input type="text" name="paxStepTime[${i.carrierCode+i.flightNo}]" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]">
                                </div>

                            </div>
                            <div>
                                <div class="Ramp-Bus-field">
                                    <label>Ramp Bus</label>
                                    <input type="text" name="rampBusTime[${i.carrierCode+i.flightNo}]" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]">
                                </div>
                                <div class="Cleaner-COMP-field">
                                    <label>Cleaner COMP</label>
                                    <input type="text" name="cleanerCompTime[${i.carrierCode+i.flightNo}]" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]">
                                </div>

                            </div>
                            <div>
                                <div class="Catering-COMP-field">
                                    <label>Catering COMP</label>
                                    <input type="text" name="cateringCompTime[${i.carrierCode+i.flightNo}]" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]">
                                </div>
                                <div class="Boarding-field">
                                    <label>Boarding</label>
                                    <input type="text" name="boardingTime[${i.carrierCode+i.flightNo}]" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]">
                                </div>

                            </div>
                            <div>
                                <div class="Pushback-STBY-field">
                                    <label>Pushback STBY</label>
                                    <input type="text" name="pushbackStby[${i.carrierCode+i.flightNo}]" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]">
                                </div>
                                <div class="Boarding-COMP-field">
                                    <label>Boarding COMP</label>
                                    <input type="text" name="boardingCompTime[${i.carrierCode+i.flightNo}]" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]">
                                </div>

                            </div>
                            <div>
                                <div class="Cargo-COMP-field">
                                    <label>Cargo COMP</label>
                                    <input type="text" name="cargoCompTime[${i.carrierCode+i.flightNo}]" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]">
                                </div>

                            </div>

                        </div>
                        <div class="time-update-buttons">
                            <div class="save">Save</div>
                            <button type="submit">Confirm</button>

                        </div>

                    </form>
              
                    <div class="aircraft-status">
                        <div class="aircraft-registration">

                            <span class="ac_reg">##-####</span>

                        </div>
                        <div class="aircraft-movement">
                            <div>
                                <div>START</div>
                                <div>
                                    <span class="START_TIME">##:##</span>
                                    <span class="start_gate_bay">####</span>
                                </div>
                            </div>
                            <div>
                                <div>ARRIVE</div>
                                <div>
                                    <span class="ARRIVE_TIME">##:##</span>
                                    <span class="arrive_gate_bay">####</span>
                                </div>
                            </div>
                        </div>
                        <div class="aircraft-repair">
                            <div>
                                <div>Repair Status</div>
                                <div>
                                    <a href="#" target="_blank" class="repair_status_image"><img src="./FARM-CNC-image/photo-icon.svg"></a>
                                </div>
                            </div>
                            <div>
                                <div>Est. Complete</div>
                                <div>
                                    <span class="REPAIR_EST_COMPLETE_TIME">##:##</span>

                                </div>
                            </div>
                        </div>
                        <div class="power-up-status">Power Up</div>
                        <div class="release-status">A/C Released</div>

                    </div>
                </section>
            
                <div class="departure-time-box">
                    <div>
                        <div>
                            <span>STD</span>
                            <span class="STD">##</span>
                            <span class="LT_UTC">LT</span>

                        </div>
                        <div>
                            <span>ETD</span>
                            <span class="ETD">##</span>
                            <span class="LT_UTC">LT</span>
                        </div>
                    </div>
                    <!-- Update Time Button -->
                    <div class="update-time-btn closed">
                        <img src="./FARM-CNC-image/update-time.svg"> Update Time
                    </div>
                </div>
                <div class="collapse-btn">
                    <img src="./FARM-CNC-image/dropdown.svg" class="closed">
                </div>
            </div>
          
            <div class="flight-info-inputs">
                <div class="passenger-numbers">
                    <img src="./FARM-CNC-image/passenger-icon.svg">
                    <div>
                        C <span class="C-CLASS">00</span> / Y <span class="Y-CLASS">000</span>
                    </div>
                </div>
                <div class="form-group">
                    <form action="" class="zfw-form">
                        <div>
                            <label>ZFW</label>
                            <div>
                                <input type="checkbox" name="zfwIsFinal[${i.carrierCode+i.flightNo}]" value="" class="final-zfw-checkbox">
                                <label>Final</label>
                            </div>

                        </div>
                        <input type="number" step=".1"  name="zfw[${i.carrierCode+i.flightNo}]" class="zfw">
                        <button type="submit">Submit</button>
                    </form>
                    <form action=""  class="gross-weight-form">
                        <label>Gross Weight</label>
                        <input type="number" step=".1"  name="grossWeight[${i.carrierCode+i.flightNo}]" class="gross-weight">
                        <button type="submit">Submit</button>
                    </form>
                    <form action="" class="ballast-form">
                        <label>Ballast</label>
                        <input type="number" step=".1"  name="ballast[${i.carrierCode+i.flightNo}]" class="ballast">
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div class=" form-group">
                    <form action="" class="planning-fuel-form">
                        <label>Planning Fuel</label>
                        <input type="number" step=".1"  name="planningFuel[${i.carrierCode+i.flightNo}]" class="planning-fuel">
                        <button type="submit">Submit</button>
                    </form>
                    <form action="" class="flight-time-form">
                        <label>Flight Time</label>
                        <input type="text" name="flightTime[${i.carrierCode+i.flightNo}]" class="flight-time time" pattern="([0-9]|[1-9][0-9]):[0-5][0-9]">
                        <button type="submit">Submit</button>
                    </form>

                </div>
                <div class="form-group">
                    <form action="" class="TOBT-form">
                        <label>TOBT</label>
                        <input type="text" name="TOBT[${i.carrierCode+i.flightNo}]" class="TOBT time" pattern="([01]?[0-9]|2[0-3])[0-5][0-9]">
                        <button type="submit">Submit</button>
                    </form>
                    <form action="" class="TSAT-form">
                        <label>TSAT</label>
                        <input type="text" name="TSAT[${i.carrierCode+i.flightNo}]" class="TSAT time" pattern="([01]?[0-9]|2[0-3])[0-5][0-9]">
                        <button type="submit">Submit</button>
                    </form>
                    <form action="" class="CTOT-form">
                        <label>CTOT</label>
                        <input type="text" name="CTOT[${i.carrierCode+i.flightNo}]" class="CTOT time" pattern="([01]?[0-9]|2[0-3])[0-5][0-9]">
                        <button type="submit">Submit</button>
                    </form>
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
                <img src="./FARM-CNC-image/red-bell.png">
            </div>
            <div class="inputs-from-backend d-none">
                
                <span class="CARRIER_CODE">${i.carrierCode}</span>
                <span class="FLIGHT_NUMBER">${i.flightNo}</span>
                <span class="DEPARTURE_AIRPORT_IATA">${i.fromStn}</span>
                <span class="DESTINATION_AIRPORT_IATA">${i.toStn}</span>
                <span class="AC_REG">${i.acReg}</span>
                <span class="STD_millisecond">${i.STD}</span>
                <span class="ETD_millisecond">${i.ETD}</span>
                <span class="BOOKING_Str">${i.bookingStr}</span>

                <span class="Crew-ARR-Time_millisecond">${i.crewArrTime}</span>
                <span class="Catering-ARR-Time_millisecond">${i.cateringArrTime}</span>
                <span class="Cleaner-ARR-Time_millisecond">${i.cleanerArrTime}</span>
                <span class="Gate-Open-Time_millisecond">${i.gateOpenTime}</span>
                <span class="Cargo-ARR-Time_millisecond">${i.cargoArrTime}</span>
                <span class="PAX-Step-Time_millisecond">${i.paxStepTime}</span>
                <span class="Ramp-Bus-Time_millisecond">${i.rampBusTime}</span>
                <span class="Cleaner-COMP-Time_millisecond">${i.cleanerCompTime}</span>
                <span class="Catering-COMP-Time_millisecond">${i.cateringCompTime}</span>
                <span class="Boarding-Time_millisecond">${i.boardingTime}</span>
                <span class="Pushback-STBY-Time_millisecond">${i.pushbackStbyTime}</span>
                <span class="Boarding-COMP-Time_millisecond">${i.boardingCompTime}</span>
                <span class="Cargo-COMP-Time_millisecond">${i.cargoCompTime}</span>

                <span class="START_TIME_millisecond"></span>
                <span class="ARRIVE_TIME_millisecond"></span>
                <span class="START_GATE_BAY"></span>
                <span class="ARRIVE_GATE_BAY"></span>
                <span class="REPAIR_EST_COMPLETE_TIME_millisecond"></span>
                <span class="REPAIR_STATUS_IMAGE_URL"></span>
                <span class="AIRCRAFT_POWER_UP_TIME_millisecond"></span>
                <span class="AIRCRAFT_RELEASED_TIME_millisecond"></span>

                <span class="ZFW-FINAL">${i.zfwFinal}</span>
                <span class="ZFW">${i.zfw}</span>
                <span class="GROSS_WEIGHT">${i.grossWeight}</span>
                <span class="BALLAST">${i.ballast}</span>
                <span class="PLN-FUEL">${i.planningFuel}</span>
                <span class="FLT_TIME">${i.flightTime}</span>
                <span class="TOBT_millisecond">${i.TOBT}</span>
                <span class="TSAT_millisecond">${i.TSAT}</span>
                <span class="CTOT_millisecond">${i.CTOT}</span>
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
                <div class="airplane-icon-box">
                    <div class="closed">
                        <img src="./FARM-CNC-image/Icon_airplane_grey.svg">
                    </div>
                </div>

                <section class="main-box">

                    <div class="flight-task-status">
                        <div>
                            <div class="status-bar  ">
                            </div>
                            <div>
                                <div class="Crew-ARR-status">Crew ARR</div>
                                <div class="Catering-ARR-status">Catering ARR</div>
                            </div>
                            <div class="count-down-box">
                                <div>
                                    <div class="bar-0120"></div>
                                </div>
                                <div>01:20</div>
                            </div>
                        </div>
                        <div>
                            <div class="status-bar  ">
                            </div>
                            <div>
                                <div class="Cleaner-ARR-status">Cleaner ARR</div>

                            </div>
                            <div class="count-down-box">

                                <div>
                                    <div class="bar-0115"></div>
                                </div>
                                <div>01:15</div>
                            </div>
                        </div>
                        <div>
                            <div class="status-bar  ">
                            </div>
                            <div>
                                <div class="Gate-Open-status">Gate Open</div>

                            </div>
                            <div class="count-down-box">
                                <div>
                                    <div class="bar-0100"></div>
                                </div>
                                <div>01:00</div>
                            </div>
                        </div>
                        <div>
                            <div class="status-bar  ">
                            </div>
                            <div>
                                <div class="Cargo-ARR-status">Cargo ARR</div>
                                <div class="PAX-Step-status">PAX Step</div>
                            </div>
                            <div class="count-down-box">
                                <div>
                                    <div class="bar-0050"></div>
                                </div>
                                <div>00:50</div>
                            </div>
                        </div>
                        <div>
                            <div class="status-bar  ">
                            </div>
                            <div>
                                <div class="Ramp-Bus-status">Ramp Bus</div>
                                <div class="Cleaner-COMP-status">Cleaner COMP</div>
                            </div>
                            <div class="count-down-box">
                                <div>
                                    <div class="bar-0040"></div>
                                </div>
                                <div>00:40</div>

                            </div>
                        </div>
                        <div>
                            <div class="status-bar  ">
                            </div>
                            <div>
                                <div class="Catering-COMP-status">Catering COMP</div>
                                <div class="Boarding-status">Boarding</div>
                            </div>
                            <div class="count-down-box">

                                <div>
                                    <div class="bar-0010"></div>
                                </div>
                                <div>00:10</div>
                            </div>
                        </div>
                        <div>
                            <div class="status-bar  ">
                            </div>
                            <div>
                                <div class="Pushback-STBY-status">Pushback STBY</div>
                                <div class="Boarding-COMP-status">Boarding COMP</div>
                            </div>
                            <div class="count-down-box">

                                <div>
                                    <div class="bar-0005"></div>
                                </div>
                                <div>00:05</div>
                            </div>
                        </div>
                        <div>
                            <div class="status-bar  ">
                            </div>
                            <div>
                                <div class="Cargo-COMP-status">Cargo COMP</div>

                            </div>
                            <div class="count-down-box">

                                <div>
                                    <div class="bar-STD"></div>
                                </div>
                                <div>STD</div>
                            </div>
                        </div>
                    </div>
                  
                    <form action=""  class="time-update-form">
                        <div class="time-update-inputs">
                            <div>
                                <div class="Crew-ARR-field">
                                    <label>Crew ARR</label>
                                    <input type="text" name="crewArrTime[${i.carrierCode+i.flightNo}]" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]">
                                </div>
                                <div class="Catering-ARR-field">
                                    <label>Catering ARR</label>
                                    <input type="text" name="cateringArrTime[${i.carrierCode+i.flightNo}]" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]" >
                                </div>

                            </div>
                            <div>
                                <div class="Cleaner-ARR-field">
                                    <label>Cleaner ARR</label>
                                    <input type="text" name="cleanerArrTime[${i.carrierCode+i.flightNo}]" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]">
                                </div>

                            </div>
                            <div>
                                <div class="Gate-Open-field">
                                    <label>Gate Open</label>
                                    <input type="text" name="gateOpenTime[${i.carrierCode+i.flightNo}]" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]">
                                </div>

                            </div>
                            <div>
                                <div class="Cargo-ARR-field">
                                    <label>Cargo ARR</label>
                                    <input type="text" name="cargoArrTime[${i.carrierCode+i.flightNo}]" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]">
                                </div>
                                <div class="PAX-Step-field">
                                    <label>PAX Step</label>
                                    <input type="text" name="paxStepTime[${i.carrierCode+i.flightNo}]" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]">
                                </div>

                            </div>
                            <div>
                                <div class="Ramp-Bus-field">
                                    <label>Ramp Bus</label>
                                    <input type="text" name="rampBusTime[${i.carrierCode+i.flightNo}]" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]">
                                </div>
                                <div class="Cleaner-COMP-field">
                                    <label>Cleaner COMP</label>
                                    <input type="text" name="cleanerCompTime[${i.carrierCode+i.flightNo}]" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]">
                                </div>

                            </div>
                            <div>
                                <div class="Catering-COMP-field">
                                    <label>Catering COMP</label>
                                    <input type="text" name="cateringCompTime[${i.carrierCode+i.flightNo}]" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]">
                                </div>
                                <div class="Boarding-field">
                                    <label>Boarding</label>
                                    <input type="text" name="boardingTime[${i.carrierCode+i.flightNo}]" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]">
                                </div>

                            </div>
                            <div>
                                <div class="Pushback-STBY-field">
                                    <label>Pushback STBY</label>
                                    <input type="text" name="pushbackStby[${i.carrierCode+i.flightNo}]" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]">
                                </div>
                                <div class="Boarding-COMP-field">
                                    <label>Boarding COMP</label>
                                    <input type="text" name="boardingCompTime[${i.carrierCode+i.flightNo}]" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]">
                                </div>

                            </div>
                            <div>
                                <div class="Cargo-COMP-field">
                                    <label>Cargo COMP</label>
                                    <input type="text" name="cargoCompTime[${i.carrierCode+i.flightNo}]" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]">
                                </div>

                            </div>

                        </div>
                        <div class="time-update-buttons">
                            <div class="save">Save</div>
                            <button type="submit">Confirm</button>

                        </div>

                    </form>
              
                    <div class="aircraft-status">
                        <div class="aircraft-registration">

                            <span class="ac_reg">##-####</span>

                        </div>
                        <div class="aircraft-movement">
                            <div>
                                <div>START</div>
                                <div>
                                    <span class="START_TIME">##:##</span>
                                    <span class="start_gate_bay">####</span>
                                </div>
                            </div>
                            <div>
                                <div>ARRIVE</div>
                                <div>
                                    <span class="ARRIVE_TIME">##:##</span>
                                    <span class="arrive_gate_bay">####</span>
                                </div>
                            </div>
                        </div>
                        <div class="aircraft-repair">
                            <div>
                                <div>Repair Status</div>
                                <div>
                                    <a href="#" target="_blank" class="repair_status_image"><img src="./FARM-CNC-image/photo-icon.svg"></a>
                                </div>
                            </div>
                            <div>
                                <div>Est. Complete</div>
                                <div>
                                    <span class="REPAIR_EST_COMPLETE_TIME">##:##</span>

                                </div>
                            </div>
                        </div>
                        <div class="power-up-status">Power Up</div>
                        <div class="release-status">A/C Released</div>

                    </div>
                </section>
            
                <div class="departure-time-box">
                    <div>
                        <div>
                            <span>STD</span>
                            <span class="STD">##</span>
                            <span class="LT_UTC">LT</span>

                        </div>
                        <div>
                            <span>ETD</span>
                            <span class="ETD">##</span>
                            <span class="LT_UTC">LT</span>
                        </div>
                    </div>
                    <!-- Update Time Button -->
                    <div class="update-time-btn closed">
                        <img src="./FARM-CNC-image/update-time.svg"> Update Time
                    </div>
                </div>
                <div class="collapse-btn">
                    <img src="./FARM-CNC-image/dropdown.svg" class="closed">
                </div>
            </div>
          
            <div class="flight-info-inputs">
                <div class="passenger-numbers">
                    <img src="./FARM-CNC-image/passenger-icon.svg">
                    <div>
                        C <span class="C-CLASS">00</span> / Y <span class="Y-CLASS">000</span>
                    </div>
                </div>
                <div class="form-group">
                    <form action="" class="zfw-form">
                        <div>
                            <label>ZFW</label>
                            <div>
                                <input type="checkbox" name="zfwIsFinal[${i.carrierCode+i.flightNo}]" value="" class="final-zfw-checkbox">
                                <label>Final</label>
                            </div>

                        </div>
                        <input type="number" step=".1"   name="zfw[${i.carrierCode+i.flightNo}]" class="zfw">
                        <button type="submit">Submit</button>
                    </form>
                    <form action=""  class="gross-weight-form">
                        <label>Gross Weight</label>
                        <input type="number" step=".1"   name="grossWeight[${i.carrierCode+i.flightNo}]" class="gross-weight">
                        <button type="submit">Submit</button>
                    </form>
                    <form action="" class="ballast-form">
                        <label>Ballast</label>
                        <input type="number" step=".1"   name="ballast[${i.carrierCode+i.flightNo}]" class="ballast">
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div class=" form-group">
                    <form action="" class="planning-fuel-form">
                        <label>Planning Fuel</label>
                        <input type="number" step=".1"   name="planningFuel[${i.carrierCode+i.flightNo}]" class="planning-fuel">
                        <button type="submit">Submit</button>
                    </form>
                    <form action="" class="flight-time-form">
                        <label>Flight Time</label>
                        <input type="text" name="flightTime[${i.carrierCode+i.flightNo}]" class="flight-time time" pattern="([0-9]|[1-9][0-9]):[0-5][0-9]">
                        <button type="submit">Submit</button>
                    </form>

                </div>
                <div class="form-group">
                    <form action="" class="TOBT-form">
                        <label>TOBT</label>
                        <input type="text" name="TOBT[${i.carrierCode+i.flightNo}]" class="TOBT time" pattern="([01]?[0-9]|2[0-3])[0-5][0-9]">
                        <button type="submit">Submit</button>
                    </form>
                    <form action="" class="TSAT-form">
                        <label>TSAT</label>
                        <input type="text" name="TSAT[${i.carrierCode+i.flightNo}]" class="TSAT time" pattern="([01]?[0-9]|2[0-3])[0-5][0-9]">
                        <button type="submit">Submit</button>
                    </form>
                    <form action="" class="CTOT-form">
                        <label>CTOT</label>
                        <input type="text" name="CTOT[${i.carrierCode+i.flightNo}]" class="CTOT time" pattern="([01]?[0-9]|2[0-3])[0-5][0-9]">
                        <button type="submit">Submit</button>
                    </form>
                </div>

            </div>
        </div>
        `;
        unpinnedList.innerHTML = unpinnedList.innerHTML + unpinnedFlightbox;
    }

    accrdionControl()
    departureFlightBoxControl()
    timeControl()
    filterDelayFlights()
}
const filterConfirmBtn = document.querySelector('.airline-filter-form button')
filterConfirmBtn.addEventListener('click', function(e) {
    e.preventDefault()
    buildDepartureList(rawData);
})
const searchInput = document.querySelector(".search-flight-form > input")
searchInput.addEventListener('input', function(e) {
    e.preventDefault()
    buildDepartureList(rawData);
})