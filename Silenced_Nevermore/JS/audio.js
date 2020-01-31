//PLAY SOUND CONTINUOUSLY
//CODE FROM user2193789 (modified) IN https://stackoverflow.com/questions/15612120/how-do-i-make-an-audio-file-play-continuously-on-all-pages

function setCookie(c_name,value,exdays){
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value;
}

function getCookie(c_name){
    var i,x,y,ARRcookies=document.cookie.split(";");
    for (i=0;i<ARRcookies.length;i++){
        x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
        y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
        x=x.replace(/^\s+|\s+$/g,"");

        if (x==c_name){
            return unescape(y);
        }
    }
}

var song = $(".ambience")[0];
var played = false;
var interact = false;
var tillPlayed = getCookie('timePlayed');

function update(){
    if(!played){
        if(tillPlayed){
            song.currentTime = tillPlayed;
            song.play();
            played = true;
        } else{
            song.play();
            played = true;
        }
    } else{
        setCookie('timePlayed', song.currentTime);
    }
}

if ($(".ambience").hasClass("start_sound") && interact == false) {
    $(".start").click(function(){
        interact = true;
        song.play();
        played = true;
    });
} else{
    setInterval(update,1000);
}

//END OF user2193789's CODE


//BUTTON SOUNDS

$(".vertical-options .mute").click(function(){
    $(".button-sound")[0].play();
});

//END OF BUTTON SOUNDS


//NAV SOUNDS

$("header").hover(function(){
    $(".homepage-sound")[0].play();
});

$("nav .data").hover(function(){
    $(".data-sound")[0].play();
});

$("nav .context").hover(function(){
    $(".context-sound")[0].play();
});

$("nav .testimonies").hover(function(){
    $(".testimonies-sound")[0].play();
});

$("nav .take-action").hover(function(){
    $(".take-action-sound")[0].play();
});

$("nav .about").hover(function(){
    $(".about-sound")[0].play();
});

//END OF NAV SOUNDS


//VOLUME BAR

$(".volume-bar input").click(function(){
    console.log($(".volume-bar input").val());
    song.volume = $(".volume-bar input").val()/100;
});

//END OF VOLUME BAR


//MUTED ICON

$(".sound img").click(function(){

    if ($(".sound img").hasClass("not_muted")) {
        if ($(".sound img").attr('src') == 'https://avmendes.github.io/uni/Silenced_Nevermore/assets/icons/volume_w.svg') {
            $(".sound img").attr('src','https://avmendes.github.io/uni/Silenced_Nevermore/assets/icons/volume_off_w.svg');
        } else{
            $(".sound img").attr('src','https://avmendes.github.io/uni/Silenced_Nevermore/assets/icons/volume_off.svg');
        }

        $(".sound img").removeClass("not_muted");
        $(".sound img").addClass("muted");
        song.muted = true;

    } else{
        if ($(".sound img").attr('src') == 'https://avmendes.github.io/uni/Silenced_Nevermore/assets/icons/volume_off_w.svg') {
            $(".sound img").attr('src','https://avmendes.github.io/uni/Silenced_Nevermore/assets/icons/volume_w.svg');
        } else{
            $(".sound img").attr('src','https://avmendes.github.io/uni/Silenced_Nevermore/assets/icons/volume.svg');
        }

        $(".sound img").removeClass("muted");
        $(".sound img").addClass("not_muted");
        song.muted = false;
    }
});

//END OF MUTED ICON


//TAKE ACTION PROMPTS

$(".action.one").hover(function(){
    $(".take-action-1-sound")[0].play();
});

$(".action.two").hover(function(){
    $(".take-action-2-sound")[0].play();
});

$(".action.three").hover(function(){
    $(".take-action-3-sound")[0].play();
});

$(".action.four").hover(function(){
    $(".take-action-4-sound")[0].play();
});

$(".action.five").hover(function(){
    $(".take-action-5-sound")[0].play();
});

$(".action.six").hover(function(){
    $(".take-action-6-sound")[0].play();
});

//END OF TAKE ACTION PROMPTS