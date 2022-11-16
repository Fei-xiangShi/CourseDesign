function delayRun(code,time) {

    var t=setTimeout(code,time);

}

var buttom = document.getElementByClassName('aplayer-button aplayer-play');

function click(buttom){
    $(buttom).trigger("click");
}

οnmοuseοver=delayRun(click(buttom),500)