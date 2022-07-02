$(document).ready(function(){
    function showSkinCard(){
        $("#colour").css("display","block");
        $("#eyes").css("display","none");
        $("#mouth").css("display","none");
    }

    function showEyesCard(){
        $("#colour").css("display","none");
        $("#eyes").css("display","block");
        $("#mouth").css("display","none");
        // document.getElementById("colour").style.display='none';
        // document.getElementById("eyes").style.display='block';
        // document.getElementById("mouth").style.display='none';
    }

    function showMouthCard(){
        $("#colour").css("display","none");
        $("#eyes").css("display","none"); 
        $("#mouth").css("display","block");
    }

    $("#eyes").click(function(){
        // showEyesCard();
        showMouthCard();
    })

    $("#colour").click(function(){
        // showSkinCard();
        showEyesCard();
    })

    $("#mouth").click(function(){
        showMouthCard();
    })

    $('#yellow').click(function(){
        $("#skin").attr('src','./assets/skin/yellow.png');
        showEyesCard();
    })
    $('#green').click(function(){
        $("#skin").attr('src','./assets/skin/green.png');
        showEyesCard();
    })
    $('#red').click(function(){
        $("#skin").attr('src','./assets/skin/red.png');
        showEyesCard();
    })

    //EYES

    $('#closed').click(function(){
        $("#eye").attr('src','./assets/eyes/closed.png');
        showMouthCard();
    })
    $('#laughing').click(function(){
        $("#eye").attr('src','./assets/eyes/laughing.png');
        showMouthCard();
    })
    $('#long').click(function(){
        $("#eye").attr('src','./assets/eyes/long.png');
        showMouthCard();
    })
    $('#normal').click(function(){
        $("#eye").attr('src','./assets/eyes/normal.png');
        showMouthCard();
    })
    $('#rolling').click(function(){
        $("#eye").attr('src','./assets/eyes/rolling.png');
        showMouthCard();
    })
    $('#winking').click(function(){
        $("#eye").attr('src','./assets/eyes/winking.png');
        showMouthCard();
    })

    //MOUTH
    $('#open').click(function(){
        $("#mouths").attr('src','./assets/mouth/open.png');
        showMouthCard();
    })
    $('#sad').click(function(){
        $("#mouths").attr('src','./assets/mouth/sad.png');
        showMouthCard();
    })
    $('#smiling').click(function(){
        $("#mouths").attr('src','./assets/mouth/smiling.png');
        showMouthCard();
    })
    $('#straight').click(function(){
        $("#mouths").attr('src','./assets/mouth/straight.png');
        showMouthCard();
    })
    $('#teeth').click(function(){
        $("#mouths").attr('src','./assets/mouth/teeth.png');
        showMouthCard();
    })


})