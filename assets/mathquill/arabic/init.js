var MQ;
function initQuill(){
    // if(typeof MathQuill === "undefined"){
    //     window.setTimeout(initQuill,500);
    //     return;
    // }
    MQ = MathQuill.getInterface(2);
}
window.setTimeout(initQuill,1500);
