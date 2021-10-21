$(document).ready(function () {
  // Collapse Button Control=======================
    $(".collapse-btn > img").click(function(){
      const taskBoxs = $(this).parents(".flight-prep-box").find(".flight-task-status > div > div:nth-of-type(2)")
      const updateBtn = $(this).parents(".flight-prep-box").find(".update-time-btn")
      const flightInfoInputs = $(this).parents(".accordion-body").find(".flight-info-inputs")
      const statusBars = $(this).parents(".flight-prep-box").find(".status-bar ")
      const aircraftStatusbox = $(this).parents(".flight-prep-box").find(".aircraft-status");
      if($(this).hasClass("closed")){
        $(this).css("transform", "rotate(0deg)").toggleClass("closed");
        taskBoxs .slideDown(200).css(
          {"display": "flex", "flex-direction": "column","justify-content":"space-evenly"})
        updateBtn.slideDown(200)
        flightInfoInputs.slideDown(200).css(
          {"display": "flex","justify-content":"space-between"})
        statusBars.slideUp(100)
        aircraftStatusbox.css({"margin-bottom":"30px"})
      }else if(!$(this).hasClass("closed")){
        $(this).css("transform", "rotate(180deg)").toggleClass("closed");
        taskBoxs .slideUp(100)
        updateBtn.slideUp(200)
        flightInfoInputs.slideUp(200)
        statusBars.slideDown(200)
        aircraftStatusbox.css({"margin-bottom":"0px"})
      }
      
    })

    // Aircraft Status Button Control=======================
      $(".airplane-icon-box > div").click(function () {
        const aircraftStatusbox = $(this).parents(".flight-prep-box").find(".aircraft-status");
        const taskBoxs = $(this).parents(".flight-prep-box").find(".flight-task-status");
        if($(this).hasClass("closed")){
          $(this).toggleClass("closed")
          aircraftStatusbox.fadeIn(500).css(
            {"display": "flex","justify-content":"space-between","align-items": "center"}
          );
          taskBoxs.hide()
        } else if(!$(this).hasClass("closed")){
          $(this).toggleClass("closed")
          aircraftStatusbox.hide()
          taskBoxs.fadeIn(500)
        }

      })








  // Submit Button Control================================
    $(".form-group > form > input").focus(function () {
      $(this).next().css( "display", "block" );
    });
    $(".form-group > form > .html-duration-picker-wrapper").click(function () {
        $(this).next().css( "display", "block" );
      });
  });
  