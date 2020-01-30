if (sessionStorage.getItem("nav_interact")) {
    console.log('User has not finished session');
} else {
    $mouseEntered = false;
    $(document).ready(() => {
        window.setInterval(function(){
            if($mouseEntered===false){
                $('#sobre').animate({
                    left:'-70px'
                }).animate({
                    left:'0'
                });

                setTimeout(function (){
                    $('#intervenientes').animate({
                        left:'-70px'
                    }).animate({
                        left:'0'
                    });
                },120);

                setTimeout(function (){
                    $('#contactos').animate({
                        left:'-70px'
                    }).animate({
                        left:'0'
                    });
                },240);
            }
        },5000);
    });
}


var sobre = lottie.loadAnimation({
    container:document.getElementById('sobre'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'nav-bola.json'
});

var intervenientes = lottie.loadAnimation({
    container:document.getElementById('intervenientes'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'nav-rectangulo.json'
});

var contactos = lottie.loadAnimation({
    container:document.getElementById('contactos'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'nav-quadrado.json'
});

$('#sobre').children('.link-container').hide();
$('#intervenientes').children('.link-container').hide();
$('#contactos').children('.link-container').hide();

$('.sobre.trigger').on('mouseenter', () =>{
    $mouseEntered=true;
    sessionStorage.setItem("nav_interact", true);
    sobre.setDirection(1);
    sobre.play();
    $('#sobre').children('.link-container').stop().fadeIn(1000);
});
$('#sobre').on('mouseleave', () =>{
    sobre.setDirection(-1);
    sobre.play();
    $('#sobre').children('.link-container').stop().fadeOut(1000);
});

$('.intervenientes.trigger').on('mouseenter', () =>{
    $mouseEntered=true;
    sessionStorage.setItem("nav_interact", true);
    intervenientes.setDirection(1);
    intervenientes.play();
    $('#intervenientes').children('.link-container').stop().fadeIn(1500);
});
$('#intervenientes').on('mouseleave', () =>{
    intervenientes.setDirection(-1);
    intervenientes.play();
    $('#intervenientes').children('.link-container').stop().fadeOut(1500);
});

$('.contactos.trigger').on('mouseenter', () =>{
    $mouseEntered=true;
    sessionStorage.setItem("nav_interact", true);
    contactos.setDirection(1);
    contactos.play();
    $('#contactos').children('.link-container').stop().fadeIn(750);
});
$('#contactos').on('mouseleave', () =>{
    contactos.setDirection(-1);
    contactos.play();
    $('#contactos').children('.link-container').stop().fadeOut(750);
});