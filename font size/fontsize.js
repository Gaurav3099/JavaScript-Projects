var mainheader = document.getElementById('main-heading')
var btnDec = document.getElementById('dec')
var btnInc = document.getElementById('inc')
var initialFontSize = window.getComputedStyle(mainheader).fontSize;
// console.log(initialFontSize)
initialFontSize=parseInt(initialFontSize.substring(0, (initialFontSize.length-2)));

btnInc.onclick=function(){
    initialFontSize += 10;
    mainheader.style.fontSize=initialFontSize+'px';
    // mainheader.style.fontFamily='Calibri';
}

btnDec.onclick=function(){
    initialFontSize -= 10;
    mainheader.style.fontSize=initialFontSize+'px';
    // mainheader.style.fontFamily='Times New Roman'
}