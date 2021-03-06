const buildDepartureList = function(data) {
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

    let pinnedNo = filteredPinned.length;
    let unpinnedNo = filteredUnpinned.length;
    $('#pinnedNo').html(pinnedNo);
    $('#unpinnedNo').html(unpinnedNo);

    const updateOpenBox = function(openBox) {
        openBox.find(".AC_REG").text(i.acReg)
        openBox.find(".STD_millisecond").text(i.STD)
        openBox.find(".ETD_millisecond").text(i.ETD)
        openBox.find(".BOOKING_Str").text(i.bookingStr)
        // ADD HERE
        openBox.find(".ATD_millisecond").text(i.ATD)

        openBox.find(".Crew-ARR-Time_millisecond").text(i.crewArrTime)
        openBox.find(".Catering-ARR-Time_millisecond").text(i.cateringArrTime)
        openBox.find(".Cleaner-ARR-Time_millisecond").text(i.cleanerArrTime)
        openBox.find(".Gate-Open-Time_millisecond").text(i.gateOpenTime)
        openBox.find(".Cargo-ARR-Time_millisecond").text(i.cargoArrTime)
        openBox.find(".PAX-Step-Time_millisecond").text(i.paxStepTime)
        openBox.find(".Ramp-Bus-Time_millisecond").text(i.rampBusTime)
        openBox.find(".Cleaner-COMP-Time_millisecond").text(i.cleanerCompTime)
        openBox.find(".Catering-COMP-Time_millisecond").text(i.cateringCompTime)
        openBox.find(".Boarding-Time_millisecond").text(i.boardingTime)
        openBox.find(".Pushback-STBY-Time_millisecond").text(i.pushbackStbyTime)
        openBox.find(".Boarding-COMP-Time_millisecond").text(i.boardingCompTime)
        openBox.find(".Cargo-COMP-Time_millisecond").text(i.cargoCompTime)

        openBox.find(".bus-status").text(i.noBus)
        openBox.find(".step-status").text(i.noStep)
        openBox.find(".gate_bay").text(i.gateBay)

        openBox.find(".ZFW-FINAL").text(i.zfwFinal)
        openBox.find(".ZFW").text(i.zfw)
        openBox.find(".GROSS_WEIGHT").text(i.grossWeight)
        openBox.find(".BALLAST").text(i.ballast)
        openBox.find(".PLN-FUEL").text(i.planningFuel)
        openBox.find(".STBY-FUEL").text(i.stbyFuel)
        openBox.find(".FLT_TIME").text(i.flightTime)
        openBox.find(".TOBT_millisecond").text(i.TOBT)
        openBox.find(".TSAT_millisecond").text(i.TSAT)
        openBox.find(".CTOT_millisecond").text(i.CTOT)


        //Don't forget to update data from Licence Engineer!
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
                <input type="checkbox" name="flightID" value="${i.carrierCode+i.flightNo}@${i.flightDate}" checked class="d-none">
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
                <span class="STD_millisecond">${i.STD}</span>
                <span class="ETD_millisecond">${i.ETD}</span>
                <!-- ADD HERE -->
                <span class="ATD_millisecond">${i.ATD}</span>
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

                <span class="bus-status">${i.noBus}</span>
                <span class="step-status">${i.noStep}</span>
                <span class="gate_bay">${i.gateBay}</span>

                <span class="ZFW-FINAL">${i.zfwFinal}</span>
                <span class="ZFW">${i.zfw}</span>
                <span class="GROSS_WEIGHT">${i.grossWeight}</span>
                <span class="BALLAST">${i.ballast}</span>
                <span class="PLN-FUEL">${i.planningFuel}</span>
                <span class="STBY-FUEL">${i.stbyFuel}</span>
                <span class="FLT_TIME">${i.flightTime}</span>
                <span class="TOBT_millisecond">${i.TOBT}</span>
                <span class="TSAT_millisecond">${i.TSAT}</span>
                <span class="CTOT_millisecond">${i.CTOT}</span>

              
                <span class="START_TIME_millisecond"></span>
                <span class="ARRIVE_TIME_millisecond"></span>
                <span class="START_GATE_BAY"></span>
                <span class="ARRIVE_GATE_BAY"></span>
                <span class="REPAIR_EST_COMPLETE_TIME_millisecond"></span>
                <span class="REPAIR_STATUS_IMAGE_URL"></span>
                <span class="AIRCRAFT_POWER_UP_TIME_millisecond">${i.ACpowerUpTime}</span>
                <span class="AIRCRAFT_RELEASED_TIME_millisecond">${i.ACReleasedTime}</span>
            </div>
            <div class="flight-data-box">

                <div class="flight-number-box">
                    <div>
                        <span class="carrier_code">##</span>
                        <span class="flight_number">####</span>
                    </div>
                    <div>
                        <span class="departure_airport_iata">###</span> -
                        <span class="destination_airport_iata">###</span><br>
                        <span class="gate_bay">${i.gateBay}</span>
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
                                <div class="Gate-Open-status">Gate Open</div>
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
                                <div class="Cargo-ARR-status">Loading Start</div>
                                <div class="PAX-Step-status">PAX Step</div>
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
                                <div class="Catering-COMP-status">Catering COMP</div>
                                <div class="Cleaner-COMP-status">Cleaner COMP</div>
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
                                <div class="Boarding-status">Boarding</div>
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
                                <div class="Pushback-STBY-status">Pushback STBY</div>
                                <div class="Boarding-COMP-status">Boarding COMP</div>
                                
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
                                <div class="Cargo-COMP-status">Loading COMP</div>
                            </div>
                            <div class="count-down-box">

                                <div>
                                    <div class="bar-0005"></div>
                                </div>
                                <div>00:05</div>
                            </div>
                        </div>
                    
                    </div>
                  
                    <form action=""  class="time-update-form">
                        <div class="time-update-inputs">
                            <div>
                                <div class="Crew-ARR-field">
                                    <label>Crew ARR</label>
                                    <input type="text" name="crewArrTime" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]" value="${i.crewArrTime}">
                                    <input type="hidden" name="crewArrTime_org" value="${i.crewArrTime}">
                                </div>
                                <div class="Catering-ARR-field">
                                    <label>Catering ARR</label>
                                    <input type="text" name="cateringArrTime" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]" value="${i.cateringArrTime}">
                                    <input type="hidden" name="cateringArrTime_org" value="${i.cateringArrTime}">
                                </div>
                            </div>
                            <div>
                                <div class="Gate-Open-field">
                                    <label>Gate Open</label>
                                    <input type="text" name="gateOpenTime" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]" value="${i.gateOpenTime}">
                                    <input type="hidden" name="gateOpenTime_org" value="${i.gateOpenTime}">
                                </div>
                                <div class="Cleaner-ARR-field">
                                    <label>Cleaner ARR</label>
                                    <input type="text" name="cleanerArrTime" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]" value="${i.cleanerArrTime}">
                                    <input type="hidden" name="cleanerArrTime_org" value="${i.cleanerArrTime}">
                                </div>
                            </div>
                            <div>
                                <div class="Cargo-ARR-field">
                                    <label>Loading Start</label>
                                    <input type="text" name="cargoArrTime" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]" value="${i.cargoArrTime}">
                                    <input type="hidden" name="cargoArrTime_org" value="${i.cargoArrTime}">
                                </div>
                                <div class="PAX-Step-field">
                                    <label>PAX Step</label>
                                    <input type="text" name="paxStepTime" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]" value="${i.paxStepTime}">
                                    <input type="hidden" name="paxStepTime_org" value="${i.paxStepTime}">
                                </div>
                            </div>
                            <div>
                                <div class="Catering-COMP-field">
                                    <label>Catering COMP</label>
                                    <input type="text" name="cateringCompTime" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]" value="${i.cateringCompTime}">
                                    <input type="hidden" name="cateringCompTime_org" value="${i.cateringCompTime}">
                                </div>
                                <div class="Cleaner-COMP-field">
                                    <label>Cleaner COMP</label>
                                    <input type="text" name="cleanerCompTime" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]" value="${i.cleanerCompTime}">
                                    <input type="hidden" name="cleanerCompTime_org" value="${i.cleanerCompTime}">
                                </div>
                            </div>
                            <div>
                                <div class="Ramp-Bus-field">
                                    <label>Ramp Bus</label>
                                    <input type="text" name="rampBusTime" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]" value="${i.rampBusTime}">
                                    <input type="hidden" name="rampBusTime_org" value="${i.rampBusTime}">
                                </div>
                                
                                <div class="Boarding-field">
                                    <label>Boarding</label>
                                    <input type="text" name="boardingTime" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]" value="${i.boardingTime}">
                                    <input type="hidden" name="boardingTime_org" value="${i.boardingTime}">
                                </div>
                            </div>
                            <div>
                                <div class="Pushback-STBY-field">
                                    <label>Pushback STBY</label>
                                    <input type="text" name="pushbackStbyTime" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]" value="${i.pushbackStbyTime}">
                                    <input type="hidden" name="pushbackStbyTime_org" value="${i.pushbackStbyTime}">
                                </div>
                                <div class="Boarding-COMP-field">
                                    <label>Boarding COMP</label>
                                    <input type="text" name="boardingCompTime" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]" value="${i.boardingCompTime}">
                                    <input type="hidden" name="boardingCompTime_org" value="${i.boardingCompTime}">
                                </div>
                            </div>
                            <div>
                                <div class="Cargo-COMP-field">
                                    <label>Cargo COMP</label>
                                    <input type="text" name="cargoCompTime" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]" value="${i.cargoCompTime}">
                                    <input type="hidden" name="cargoCompTime_org" value="${i.cargoCompTime}">
                                </div>
                            </div>
                        </div>
                        <div class="time-update-buttons">
                            <button type="submit">Save</button>
                            <input type="hidden" name="carrierCode" value="${i.carrierCode}">
                            <input type="hidden" name="flightNo" value="${i.flightNo}">
                            <input type="hidden" name="flightDate" value="${i.flightDate}">
                            <input type="hidden" name="dataType" value="TIME">
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
                        <!-- ADD HERE -->
                        <div>
                            <span>ATD</span>
                            <span class="ATD">##</span>
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
                    <form action="" class="data-form">
                        <div>
                            <label>ZFW</label>
                            <div>
                                <input type="checkbox" name="zfwIsFinal" value="Y" class="final-zfw-checkbox">
                                <label>Final</label>
                            </div>
                        </div>
                        <input type="number" name="zfw" class="zfw" placeholder="Kg">
                        <button type="submit">Submit</button>
                        <input type="hidden" name="carrierCode" value="${i.carrierCode}">
                        <input type="hidden" name="flightNo" value="${i.flightNo}">
                        <input type="hidden" name="flightDate" value="${i.flightDate}">
                        <input type="hidden" name="dataType" value="OP">
                    </form>
                    <form action=""  class="data-form">
                        <label>Gross Weight</label>
                        <input type="number" name="grossWeight" class="gross-weight" placeholder="Kg">
                        <button type="submit">Submit</button>
                        <input type="hidden" name="carrierCode" value="${i.carrierCode}">
                        <input type="hidden" name="flightNo" value="${i.flightNo}">
                        <input type="hidden" name="flightDate" value="${i.flightDate}">
                        <input type="hidden" name="dataType" value="OP">
                    </form>
                    <form action="" class="data-form">
                        <label>Ballast</label>
                        <input type="number" name="ballast" class="ballast" placeholder="Kg">
                        <button type="submit">Submit</button>
                        <input type="hidden" name="carrierCode" value="${i.carrierCode}">
                        <input type="hidden" name="flightNo" value="${i.flightNo}">
                        <input type="hidden" name="flightDate" value="${i.flightDate}">
                        <input type="hidden" name="dataType" value="OP">
                    </form>
                </div>
                <div class=" form-group">
                    <form action="" class="data-form">
                        <label>Planning Fuel</label>
                        <input type="number" name="planningFuel" class="planning-fuel" placeholder="Kg">
                        <button type="submit">Submit</button>
                        <input type="hidden" name="carrierCode" value="${i.carrierCode}">
                        <input type="hidden" name="flightNo" value="${i.flightNo}">
                        <input type="hidden" name="flightDate" value="${i.flightDate}">
                        <input type="hidden" name="dataType" value="OP">
                    </form>
                    <form action="" class="data-form">
                        <label>Standby Fuel</label>
                        <input type="number" name="standbyFuel" class="standby-fuel" placeholder="Kg">
                        <button type="submit">Submit</button>
                        <input type="hidden" name="carrierCode" value="${i.carrierCode}">
                        <input type="hidden" name="flightNo" value="${i.flightNo}">
                        <input type="hidden" name="flightDate" value="${i.flightDate}">
                        <input type="hidden" name="dataType" value="OP">
                    </form>
                    <form action="" class="data-form">
                        <label>Flight Time</label>
                        <input type="text" name="flightTime" class="flight-time time" pattern="([0-9]|[1-9][0-9]):[0-5][0-9]" placeholder="H:mm">
                        <button type="submit">Submit</button>
                        <input type="hidden" name="carrierCode" value="${i.carrierCode}">
                        <input type="hidden" name="flightNo" value="${i.flightNo}">
                        <input type="hidden" name="flightDate" value="${i.flightDate}">
                        <input type="hidden" name="dataType" value="OP">
                    </form>

                </div>
                <div class="form-group">
                    <form action="" class="data-form">
                        <label>TOBT</label>
                        <input type="text" name="TOBT" class="TOBT time" pattern="([01]?[0-9]|2[0-3])[0-5][0-9]" placeholder="HHmm">
                        <button type="submit">Submit</button>
                        <input type="hidden" name="carrierCode" value="${i.carrierCode}">
                        <input type="hidden" name="flightNo" value="${i.flightNo}">
                        <input type="hidden" name="flightDate" value="${i.flightDate}">
                        <input type="hidden" name="dataType" value="OP">
                    </form>
                    <form action="" class="data-form">
                        <label>TSAT</label>
                        <input type="text" name="TSAT" class="TSAT time" pattern="([01]?[0-9]|2[0-3])[0-5][0-9]" placeholder="HHmm">
                        <button type="submit">Submit</button>
                        <input type="hidden" name="carrierCode" value="${i.carrierCode}">
                        <input type="hidden" name="flightNo" value="${i.flightNo}">
                        <input type="hidden" name="flightDate" value="${i.flightDate}">
                        <input type="hidden" name="dataType" value="OP">
                    </form>
                    <form action="" class="data-form">
                        <label>CTOT</label>
                        <input type="text" name="CTOT" class="CTOT time" pattern="([01]?[0-9]|2[0-3])[0-5][0-9]" placeholder="HHmm">
                        <button type="submit">Submit</button>
                        <input type="hidden" name="carrierCode" value="${i.carrierCode}">
                        <input type="hidden" name="flightNo" value="${i.flightNo}">
                        <input type="hidden" name="flightDate" value="${i.flightDate}">
                        <input type="hidden" name="dataType" value="OP">
                    </form>
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
    //console.log(openUnpinnedCarrierCode + openUnpinnedFlightNo)
    //console.log(openUnpinnedFlightBoxIndex);
    $("#unpinned-list").children(":not(.open-flight-box)").remove();
    for (var i of filteredUnpinned) {
        if (i.carrierCode === openUnpinnedCarrierCode && i.flightNo === openUnpinnedFlightNo) {
            //console.log("The open box, let's update!");
            updateOpenBox(openUnpinnedFlightBox)

        } else {
            var unpinnedFlightbox = `
        <div class="flight-box">
            <form action="" class="pin-mark">
                <input type="checkbox" name="flightID" value="${i.carrierCode+i.flightNo}@${i.flightDate}" class="d-none" checked>
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
                <span class="STD_millisecond">${i.STD}</span>
                <span class="ETD_millisecond">${i.ETD}</span>
                <!-- ADD HERE -->
                <span class="ATD_millisecond">${i.ATD}</span>
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

                <span class="bus-status">${i.noBus}</span>
                <span class="step-status">${i.noStep}</span>
                <span class="gate_bay">${i.gateBay}</span>

                <span class="START_TIME_millisecond"></span>
                <span class="ARRIVE_TIME_millisecond"></span>
                <span class="START_GATE_BAY"></span>
                <span class="ARRIVE_GATE_BAY"></span>
                <span class="REPAIR_EST_COMPLETE_TIME_millisecond"></span>
                <span class="REPAIR_STATUS_IMAGE_URL"></span>
                <span class="AIRCRAFT_POWER_UP_TIME_millisecond">${i.ACpowerUpTime}</span>
                <span class="AIRCRAFT_RELEASED_TIME_millisecond">${i.ACReleasedTime}</span>

                <span class="ZFW-FINAL">${i.zfwFinal}</span>
                <span class="ZFW">${i.zfw}</span>
                <span class="GROSS_WEIGHT">${i.grossWeight}</span>
                <span class="BALLAST">${i.ballast}</span>
                <span class="PLN-FUEL">${i.planningFuel}</span>
                <span class="STBY-FUEL">${i.stbyFuel}</span>
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
                        <span class="destination_airport_iata">###</span><br>
                        <span class="gate_bay">${i.gateBay}</span>
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
                                <div class="Gate-Open-status">Gate Open</div>
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
                                <div class="Cargo-ARR-status">Loading Start</div>
                                <div class="PAX-Step-status">PAX Step</div>
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
                                <div class="Catering-COMP-status">Catering COMP</div>
                                <div class="Cleaner-COMP-status">Cleaner COMP</div>
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
                                <div class="Boarding-status">Boarding</div>
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
                                <div class="Pushback-STBY-status">Pushback STBY</div>
                                <div class="Boarding-COMP-status">Boarding COMP</div>
                                
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
                                <div class="Cargo-COMP-status">Loading COMP</div>
                            </div>
                            <div class="count-down-box">

                                <div>
                                    <div class="bar-0005"></div>
                                </div>
                                <div>00:05</div>
                            </div>
                        </div>
                    </div>
                  
                    <form action=""  class="time-update-form">
                        <div class="time-update-inputs">
                            <div>
                                <div class="Crew-ARR-field">
                                    <label>Crew ARR</label>
                                    <input type="text" name="crewArrTime" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]" value="${i.crewArrTime}">
                                    <input type="hidden" name="crewArrTime_org" value="${i.crewArrTime}">
                                </div>
                                <div class="Catering-ARR-field">
                                    <label>Catering ARR</label>
                                    <input type="text" name="cateringArrTime" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]" value="${i.cateringArrTime}">
                                    <input type="hidden" name="cateringArrTime_org" value="${i.cateringArrTime}">
                                </div>
                            </div>
                            <div>
                                <div class="Gate-Open-field">
                                    <label>Gate Open</label>
                                    <input type="text" name="gateOpenTime" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]" value="${i.gateOpenTime}">
                                    <input type="hidden" name="gateOpenTime_org" value="${i.gateOpenTime}">
                                </div>
                                <div class="Cleaner-ARR-field">
                                    <label>Cleaner ARR</label>
                                    <input type="text" name="cleanerArrTime" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]" value="${i.cleanerArrTime}">
                                    <input type="hidden" name="cleanerArrTime_org" value="${i.cleanerArrTime}">
                                </div>
                            </div>
                            <div>
                                <div class="Cargo-ARR-field">
                                    <label>Loading Start</label>
                                    <input type="text" name="cargoArrTime" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]" value="${i.cargoArrTime}">
                                    <input type="hidden" name="cargoArrTime_org" value="${i.cargoArrTime}">
                                </div>
                                <div class="PAX-Step-field">
                                    <label>PAX Step</label>
                                    <input type="text" name="paxStepTime" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]" value="${i.paxStepTime}">
                                    <input type="hidden" name="paxStepTime_org" value="${i.paxStepTime}">
                                </div>
                            </div>
                            <div>
                                <div class="Catering-COMP-field">
                                    <label>Catering COMP</label>
                                    <input type="text" name="cateringCompTime" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]" value="${i.cateringCompTime}">
                                    <input type="hidden" name="cateringCompTime_org" value="${i.cateringCompTime}">
                                </div>
                                <div class="Cleaner-COMP-field">
                                    <label>Cleaner COMP</label>
                                    <input type="text" name="cleanerCompTime" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]" value="${i.cleanerCompTime}">
                                    <input type="hidden" name="cleanerCompTime_org" value="${i.cleanerCompTime}">
                                </div>
                            </div>
                            <div>
                                <div class="Ramp-Bus-field">
                                    <label>Ramp Bus</label>
                                    <input type="text" name="rampBusTime" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]" value="${i.rampBusTime}">
                                    <input type="hidden" name="rampBusTime_org" value="${i.rampBusTime}">
                                </div>
                                
                                <div class="Boarding-field">
                                    <label>Boarding</label>
                                    <input type="text" name="boardingTime" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]" value="${i.boardingTime}">
                                    <input type="hidden" name="boardingTime_org" value="${i.boardingTime}">
                                </div>
                            </div>
                            <div>
                                <div class="Pushback-STBY-field">
                                    <label>Pushback STBY</label>
                                    <input type="text" name="pushbackStbyTime" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]" value="${i.pushbackStbyTime}">
                                    <input type="hidden" name="pushbackStbyTime_org" value="${i.pushbackStbyTime}">
                                </div>
                                <div class="Boarding-COMP-field">
                                    <label>Boarding COMP</label>
                                    <input type="text" name="boardingCompTime" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]" value="${i.boardingCompTime}">
                                    <input type="hidden" name="boardingCompTime_org" value="${i.boardingCompTime}">
                                </div>
                            </div>
                            <div>
                                <div class="Cargo-COMP-field">
                                    <label>Cargo COMP</label>
                                    <input type="text" name="cargoCompTime" class="time" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]" value="${i.cargoCompTime}">
                                    <input type="hidden" name="cargoCompTime_org" value="${i.cargoCompTime}">
                                </div>
                            </div>
                        </div>
                        <div class="time-update-buttons">
                            <button type="submit">Save</button>
                            <input type="hidden" name="carrierCode" value="${i.carrierCode}">
                            <input type="hidden" name="flightNo" value="${i.flightNo}">
                            <input type="hidden" name="flightDate" value="${i.flightDate}">
                            <input type="hidden" name="dataType" value="TIME">
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
                        <!-- ADD HERE -->
                        <div>
                            <span>ATD</span>
                            <span class="ATD">##</span>
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
                    <form action="" class="data-form">
                        <div>
                            <label>ZFW</label>
                            <div>
                                <input type="checkbox" name="zfwIsFinal" value="Y" class="final-zfw-checkbox">
                                <label>Final</label>
                            </div>
                        </div>
                        <input type="number"  name="zfw" class="zfw" placeholder="Kg">
                        <button type="submit">Submit</button>
                        <input type="hidden" name="carrierCode" value="${i.carrierCode}">
                        <input type="hidden" name="flightNo" value="${i.flightNo}">
                        <input type="hidden" name="flightDate" value="${i.flightDate}">
                        <input type="hidden" name="dataType" value="OP">
                    </form>
                    <form action=""  class="data-form">
                        <label>Gross Weight</label>
                        <input type="number"  name="grossWeight" class="gross-weight" placeholder="Kg">
                        <button type="submit">Submit</button>
                        <input type="hidden" name="carrierCode" value="${i.carrierCode}">
                        <input type="hidden" name="flightNo" value="${i.flightNo}">
                        <input type="hidden" name="flightDate" value="${i.flightDate}">
                        <input type="hidden" name="dataType" value="OP">
                    </form>
                    <form action="" class="data-form">
                        <label>Ballast</label>
                        <input type="number"  name="ballast" class="ballast" placeholder="Kg">
                        <button type="submit">Submit</button>
                        <input type="hidden" name="carrierCode" value="${i.carrierCode}">
                        <input type="hidden" name="flightNo" value="${i.flightNo}">
                        <input type="hidden" name="flightDate" value="${i.flightDate}">
                        <input type="hidden" name="dataType" value="OP">
                    </form>
                </div>
                <div class=" form-group">
                    <form action="" class="data-form">
                        <label>Planning Fuel</label>
                        <input type="number"  name="planningFuel" class="planning-fuel" placeholder="Kg">
                        <button type="submit">Submit</button>
                        <input type="hidden" name="carrierCode" value="${i.carrierCode}">
                        <input type="hidden" name="flightNo" value="${i.flightNo}">
                        <input type="hidden" name="flightDate" value="${i.flightDate}">
                        <input type="hidden" name="dataType" value="OP">
                    </form>
                    <form action="" class="data-form">
                        <label>Standby Fuel</label>
                        <input type="number" name="standbyFuel" class="standby-fuel" placeholder="Kg">
                        <button type="submit">Submit</button>
                        <input type="hidden" name="carrierCode" value="${i.carrierCode}">
                        <input type="hidden" name="flightNo" value="${i.flightNo}">
                        <input type="hidden" name="flightDate" value="${i.flightDate}">
                        <input type="hidden" name="dataType" value="OP">
                    </form>
                    <form action="" class="data-form">
                        <label>Flight Time</label>
                        <input type="text" name="flightTime" class="flight-time time" pattern="([0-9]|[1-9][0-9]):[0-5][0-9]" placeholder="H:mm">
                        <button type="submit">Submit</button>
                        <input type="hidden" name="carrierCode" value="${i.carrierCode}">
                        <input type="hidden" name="flightNo" value="${i.flightNo}">
                        <input type="hidden" name="flightDate" value="${i.flightDate}">
                        <input type="hidden" name="dataType" value="OP">
                    </form>

                </div>
                <div class="form-group">
                    <form action="" class="data-form">
                        <label>TOBT</label>
                        <input type="text" name="TOBT" class="TOBT time" pattern="([01]?[0-9]|2[0-3])[0-5][0-9]" placeholder="HHmm">
                        <button type="submit">Submit</button>
                        <input type="hidden" name="carrierCode" value="${i.carrierCode}">
                        <input type="hidden" name="flightNo" value="${i.flightNo}">
                        <input type="hidden" name="flightDate" value="${i.flightDate}">
                        <input type="hidden" name="dataType" value="OP">
                    </form>
                    <form action="" class="data-form">
                        <label>TSAT</label>
                        <input type="text" name="TSAT" class="TSAT time" pattern="([01]?[0-9]|2[0-3])[0-5][0-9]" placeholder="HHmm">
                        <button type="submit">Submit</button>
                        <input type="hidden" name="carrierCode" value="${i.carrierCode}">
                        <input type="hidden" name="flightNo" value="${i.flightNo}">
                        <input type="hidden" name="flightDate" value="${i.flightDate}">
                        <input type="hidden" name="dataType" value="OP">
                    </form>
                    <form action="" class="data-form">
                        <label>CTOT</label>
                        <input type="text" name="CTOT" class="CTOT time" pattern="([01]?[0-9]|2[0-3])[0-5][0-9]" placeholder="HHmm">
                        <button type="submit">Submit</button>
                        <input type="hidden" name="carrierCode" value="${i.carrierCode}">
                        <input type="hidden" name="flightNo" value="${i.flightNo}">
                        <input type="hidden" name="flightDate" value="${i.flightDate}">
                        <input type="hidden" name="dataType" value="OP">

                    </form>
                </div>
            </div>
        </div>
        `;
            unpinnedList.append(unpinnedFlightbox)

        }
    }
    if (openUnpinnedFlightBoxIndex > 1) {
        $(`#unpinned-list .flight-box:nth-of-type(${1})`).insertAfter(`#unpinned-list .flight-box:nth-of-type(${openUnpinnedFlightBoxIndex})`)
    }

    accrdionControl()
    departureFlightBoxControl()
    timeControl()
    filterDelayFlights()

    $(".data-form").submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: "updatedata.php",
            data: new FormData(this),
            dataType: 'json',
            contentType: false,
            processData: false,
            cache: false,
            success: function(response){
                //console.log(JSON.stringify(response));
                alert(response.message);
            },
            error: function(request, textStatus, errorThrown) {
                alert(errorThrown);
            }
        });
    });
    $(".time-update-form").submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: "updatedata.php",
            data: new FormData(this),
            dataType: 'json',
            contentType: false,
            processData: false,
            cache: false,
            success: function(response){
                //console.log(JSON.stringify(response));
                alert(response.message);
            },
            error: function(request, textStatus, errorThrown) {
                alert(errorThrown);
            }
        });
    });
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