var inputsIds = {};
$(document).on('shiny:inputchanged', function(event) {
    //console.log("inputChange");
    // console.log(event.name);
    inputsIds[event.name] = inputsIds[event.name] == undefined ? 1:2;
    // console.log(inputsIds[event.name]);
    //$(document).off(\'shiny:inputchanged\');
 });
 displayYellowBulb = window.setTimeout(() => {
    $('#bulbYellow_span').css({
    "visibility": "visible",
    "font-size": "37px",
    "color": "yellow",
    "position": "relative",
    /*"right": "92px",*/
    "z-index": "5",
    "margin-right": "-25px",
    "cursor": "pointer",
    "animation": "MoveUpDown 2s linear infinite"
 });
 $('.btn-view-tutorial2').css({
 "background": "none"
 });
 }, 3000);

 function printfun(){
     clearTimeout(displayYellowBulb)
 }
 function hideYellowBulb(){
    $('#bulbYellow_span').css({
        "visibility": "hidden",
        "font-size": "1px",
        "margin-right": "0px",
     });
     $('.btn-view-tutorial2').css({
     "background-image": "url('deprecated/images/pulp-white.png')",
     "background-repeat": "no-repeat"
     });
 }