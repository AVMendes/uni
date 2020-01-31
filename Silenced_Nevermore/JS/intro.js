$(document).ready(function(){
	var nrclick = 1;
	var inc = 1;
	var previous;

	var anim_map1 = bodymovin.loadAnimation({
		container: document.getElementById('map_1'),
		renderer: 'svg',
		loop: false,
		autoplay: false,
		path: 'map_1.json'
	});

	var anim_map2 = bodymovin.loadAnimation({
		container: document.getElementById('map_2'),
		renderer: 'svg',
		loop: false,
		autoplay: false,
		path: 'map_2.json'
	});

	var anim_map3 = bodymovin.loadAnimation({
		container: document.getElementById('map_3'),
		renderer: 'svg',
		loop: false,
		autoplay: false,
		path: 'map_3.json'
	});

	var anim_map4 = bodymovin.loadAnimation({
		container: document.getElementById('map_4'),
		renderer: 'svg',
		loop: false,
		autoplay: false,
		path: 'map_4.json'
	});

	var anim_map5 = bodymovin.loadAnimation({
		container: document.getElementById('map_5'),
		renderer: 'svg',
		loop: false,
		autoplay: false,
		path: 'map_5.json'
	});

	var anim_map6 = bodymovin.loadAnimation({
		container: document.getElementById('map_6'),
		renderer: 'svg',
		loop: false,
		autoplay: false,
		path: 'map_6.json'
	});

	document.getElementById('start').addEventListener('click', function(){
		if (nrclick == 1) {
			document.getElementById('map_1').style.display= "block";
			anim_map1.play();
			$(".intro_1")[0].play();
		} else if (nrclick == 2) {
			document.getElementById('map_2').style.display = "block";
			anim_map2.play();
			$(".intro_2")[0].play();
		} else if (nrclick == 3) {
			document.getElementById('map_3').style.display = "block";
			anim_map3.play();
			$(".intro_3")[0].play();
		} else if (nrclick == 4) {
			document.getElementById('map_4').style.display = "block";
			anim_map4.play();
			$(".intro_4")[0].play();
		} else if (nrclick == 5) {
			document.getElementById('map_5').style.display = "block";
			anim_map5.play();
			$(".intro_5")[0].play();
		} else if (nrclick == 6) {
			document.getElementById('map_6').style.display = "block";
			anim_map6.play();
			$(".intro_6")[0].play();
		}

		console.log(nrclick);

		if (nrclick < 7) {
			nrclick++;
		}
	});


	$(".start").click(function(){
		if (inc == 6) {
			$(".part_1").removeClass('fadein');
			$(".part_2").removeClass('fadein');
			$(".part_3").removeClass('fadein');
			$(".part_4").removeClass('fadein');
			$(".part_5").removeClass('fadein');
			$(".part_1").addClass('fadeout');
			$(".part_2").addClass('fadeout');
			$(".part_3").addClass('fadeout');
			$(".part_4").addClass('fadeout');
			$(".part_5").addClass('fadeout');
			$(".container").css('display', 'block'); 
			$(".container").addClass('fadein');

		} else {
			previous = inc-1;
			$(".part_" + inc).addClass('fadein');
			$(".part_" + previous).removeClass('fadein');
			$(".part_" + previous).addClass('fadeout');

			inc++;
		}
	});
});