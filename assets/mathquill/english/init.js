function initQuill(){
    if(typeof(MathQuill) === undefined){
        window.setTimeout(initQuill,500);
        return;
    }
    var MQ = MathQuill.getInterface(2);
}
initQuill();
