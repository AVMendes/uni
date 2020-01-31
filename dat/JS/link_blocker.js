$('.programa:nth-child(2) a').click(function(event){
	if($('.datasEvento .programa:nth-child(2)').css('opacity') <= 0.70){
		$(event.target).removeAttr("href");
		console.log($('.datasEvento .programa:nth-child(2)').css('opacity'));
	} else{
		$(event.target).attr("href", 'https://www.google.com/maps/place/DEI+-+Departamento+de+Engenharia+Inform%C3%A1tica+-+FCTUC/@40.1863787,-8.4182919,17z/data=!3m1!4b1!4m5!3m4!1s0xd22f9952aaf6517:0xd3822ec1d359eb52!8m2!3d40.1863787!4d-8.4161032');
	}
});

$('.programa:nth-child(4) a').click(function(event){
	if($('.datasEvento .programa:nth-child(4)').css('opacity') <= 0.70){
		$(event.target).removeAttr("href");
	} else{
		$(event.target).attr("href", 'https://www.google.com/maps/place/Museu+da+Ci%C3%AAncia+da+Universidade+de+Coimbra/@40.2102109,-8.4259726,17z/data=!3m1!4b1!4m5!3m4!1s0xd22f90bdfee5f61:0x5005b59f77dbff8b!8m2!3d40.2102109!4d-8.4237839');
	}
});

$('.programa:nth-child(6) a').click(function(event){
	if($('.datasEvento .programa:nth-child(6)').css('opacity') <= 0.70){
		$(event.target).removeAttr("href");
	} else{
		$(event.target).attr("href", 'https://www.google.com/maps/place/Departamento+de+Arquitectura/@40.209508,-8.4254727,17z/data=!3m1!4b1!4m5!3m4!1s0xd22f90bdb46aa95:0xb005070b2bc33a21!8m2!3d40.209508!4d-8.423284');
	}
});