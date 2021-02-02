var MQ;
function initQuill(){
    //console.log("MathQUILL = " + MathQuill);
    if(typeof MathQuill === "undefined"){
        window.setTimeout(initQuill,500);
        return;
    }
    MQ = MathQuill.getInterface(2);
}
initQuill();
