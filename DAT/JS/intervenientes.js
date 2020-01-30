
/*-------------------WEB-------------------*/
$('.main-carousel').flickity({
	wrapAround: true,
	pageDots: false
});

$('.flickity-prev-next-button').click(function() {
	$('body,html').animate({
		scrollTop: 0
	}, 400);
});

/*-----------------------------------------*/

/*-----------------MOBILE------------------*/
$(document).ready(function(){
	$(".plus.one").click(function(){
		$(".plus.one").addClass('animated');
		$(".biografia.one").slideDown();
		$(".minus.one").addClass('animated');
		console.log("clicked one");
	});

	$(".plus.two").click(function(){
		$(".plus.two").addClass('animated');
		$(".biografia.two").slideDown();
		$(".minus.two").addClass('animated');
	});

	$(".plus.three").click(function(){
		$(".plus.three").addClass('animated');
		$(".biografia.three").slideDown();
		$(".minus.three").addClass('animated');
	});


	$(".minus.one").click(function(){
		$(".plus.one").removeClass('animated');
		$(".biografia.one").slideUp();
		$(".minus.one").removeClass('animated');
		console.log("clicked one");
	});

	$(".minus.two").click(function(){
		$(".plus.two").removeClass('animated');
		$(".biografia.two").slideUp();
		$(".minus.two").removeClass('animated');
	});

	$(".minus.three").click(function(){
		$(".plus.three").removeClass('animated');
		$(".biografia.three").slideUp();
		$(".minus.three").removeClass('animated');
	});
});

/*-----------------------------------------*/
