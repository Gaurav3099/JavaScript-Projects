var btn = document.getElementById('button-top')

btn.addEventListener('mousedown', function(){
    console.log('mouse downevent')
})

btn.addEventListener('mouseup', function(){
    console.log('mouse up event')
})

btn.addEventListener('click', function(){
    console.log('Click event')
})

btn.addEventListener('dblclick', function(){
    console.log('Double click event')
})

var over = document.getElementById('over')
var overCount = 0

over.addEventListener('mouseover', function(){ // count cursor in and out
    var countElement = document.querySelector('#over > p')
    overCount += 1;
    countElement.innerHTML = overCount;
})

var enter = document.getElementById('enter')
var enterCount = 0;
enter.addEventListener('mouseenter', function(){ // count cursor in 
    var countElement = document.querySelector('#enter > p');
    enterCount += 1;
    countElement.innerHTML = enterCount;
})

var moveElement = document.getElementById('move') // count curson movement inside 
var moverCount = 0;
moveElement.addEventListener('mousemove', function(){
    var countElement = document.querySelector('#move > p')
    moverCount += 1;
    countElement.innerHTML = moverCount;
})