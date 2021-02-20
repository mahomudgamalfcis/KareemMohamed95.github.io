var inputsIds = {};
$(document).on('shiny:inputchanged', function (event) {
    inputsIds[event.name] = inputsIds[event.name] == undefined ? 1 : 2;
    if (inputsIds[event.name] == 2) {
        stopYellowBulb();
        $(document).off('shiny:inputchanged');
    }
});

displayYellowBulb = window.setTimeout(() => {
    $('#bulb-yellow-span').css({
        "visibility": "visible",
        "font-size": "36px",
        "color": "yellow",
        "position": "relative",
        "z-index": "5",
        "margin-right": "-25px",
        "cursor": "pointer",
        "animation": "MoveUpDown 2s linear infinite"
    });
    $('.btn-view-tutorial').css({
        "background": "none"
    });
}, 180000);

function stopYellowBulb() {
    clearTimeout(displayYellowBulb)
}
function hideYellowBulb() {
    $(document).off('shiny:inputchanged');
    $('#bulb-yellow-span').css({
        "font-size": "1px",
        "margin-right": "0px",
        "visibility": "hidden"
    });
    $('.btn-view-tutorial').css({
        "background-image": "url('deprecated/images/pulp-white.png')",
        "background-repeat": "no-repeat"
    });
}