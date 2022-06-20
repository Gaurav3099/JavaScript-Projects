var mainheading = document.getElementById('main-heading')
var sidebar = document.getElementById('sidebar')
var btn = document.getElementById('clickme')
var togglebtn = document.getElementById('toggle')

mainheading.classList.add('big')

togglebtn.addEventListener('click',function(){
    // console.log(sidebar.classList)
    if(sidebar.classList.contains('show')) {
        sidebar.classList.remove('show');
        sidebar.classList.add('hide');
        // console.log(sidebar.classList);
    } else {
        sidebar.classList.remove('hide');
        sidebar.classList.add('show');
    }
});

btn.addEventListener('click',function(){
    sidebar.style.backgroundColor = "rgb(" + Math.floor(Math.random()*255)+"," + Math.floor(Math.random()*255)+"," + Math.floor(Math.random()*255)+")"
});