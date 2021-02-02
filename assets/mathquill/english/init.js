var MQ;
function initQuill(){
    if(typeof(MathQuill) === undefined){
        window.setTimeout(initQuill,500);
        return;
    }
    MQ = MathQuill.getInterface(2);
}
initQuill();
