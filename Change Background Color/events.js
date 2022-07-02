var btn = document.getElementById('clickme')
var mainDiv = document.getElementById('body')
var colorname = document.getElementById('colorname')
var bgcolor;

function onBtnClick(){
    bgcolor="rgb(" + Math.floor(Math.random()*255)+"," + Math.floor(Math.random()*255)+"," + Math.floor(Math.random()*255)+")"
    mainDiv.style.backgroundColor = bgcolor
    var text = `Background Color: ${bgcolor}` 
    colorname.innerHTML = `<div id="colorname">${text}</div>`
}
btn.addEventListener("click", onBtnClick)