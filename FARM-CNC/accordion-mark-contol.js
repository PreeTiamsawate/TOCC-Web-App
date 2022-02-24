const accrdionControl = function() {
    const accordionItems = $(".accordion-item")
    for (let accordionItem of accordionItems) {
        const accordionBtn = $(accordionItem).find(".custom-accordion-button")
        const accordionBody = $(accordionItem).find(".accordion-body")

        if (accordionBody.children(".flight-box").length) {
            accordionBody.parent().addClass("show")
            accordionBtn.attr("aria-expanded", "true")
            accordionBtn.children("img").css("transform", "rotate(0deg)");
        } else {
            accordionBody.parent().removeClass("show")
            accordionBtn.attr("aria-expanded", "false")
            accordionBtn.children("img").css("transform", "rotate(-90deg)");
        }
        if (accordionBtn.attr("aria-expanded") !== "true") {
            accordionBtn.children("img").css("transform", "rotate(-90deg)");
        }
        accordionBtn.click(function() {
            if ($(this).attr("aria-expanded") !== "true") {
                $(this).children("img").css("transform", "rotate(-90deg)");
            } else {
                $(this).children("img").css("transform", "rotate(0deg)");
            }
        });
    }
}
$(document).ready(accrdionControl);