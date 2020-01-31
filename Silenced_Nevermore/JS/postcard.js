$(document).ready(function(){
	$("body").click(function(){
		if ($(".postcard").hasClass('animated')) {
			$(".postcard").removeClass('animated');
			$(".postcard").removeClass('unclickable');
			$(".flip-back-sound")[0].play();
		}
	})

	$(".postcard").click(function(){
		$clicked = $(this);

		if ($clicked.hasClass('animated')) {
			$clicked.removeClass('animated');
			$(".postcard").removeClass('unclickable');
			$(".flip-back-sound")[0].play();
		} else {
			setTimeout(function() {
				$clicked.addClass('animated');
				$(".postcard").not(".animated").addClass('unclickable');
				$(".flip-sound")[0].play();
			}, 200);
		}
	});
});

$("#sound_icon").attr("src","https://avmendes.github.io/uni/Silenced_Nevermore/assets/icons/volume_w.svg");
$("#fs_icon").attr("src","https://avmendes.github.io/uni/Silenced_Nevermore/assets/icons/fullscreen_w.svg");