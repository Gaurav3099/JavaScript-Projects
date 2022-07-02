console.log('JS Loaded')

var countdownElement=document.getElementById('countdown')
var bgImageElement=document.getElementById('bgimg')

var initialCountVal=countdownElement.innerHTML;

setInterval(function(){
initialCountVal = initialCountVal > 0 ? initialCountVal-1 : 0;

countdownElement.innerHTML=initialCountVal;
var backImgPath = initialCountVal%2 == 0 ? 'background-1.jpg' : 'background-2.jpg'

bgImageElement.src = backImgPath;

backImgPath.className='BackImage';
console.log(bgImageElement)
},1000);
