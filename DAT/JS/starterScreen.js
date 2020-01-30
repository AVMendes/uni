if (sessionStorage.getItem("first_load")) {
	console.log('User has not finished session');
	document.getElementById('starterScreen').style.display = 'none';
} else {
	var anim = bodymovin.loadAnimation({
		container: document.getElementById('starterScreen'),
		renderer: 'svg',
		loop: false,
		autoplay: false,
		path: 'logo.json'
	});

	var fade = function fadeOut(){
		document.getElementById('starterScreen').classList.add('animate'); 
		setTimeout(function() {
			document.getElementById('starterScreen').style.display = 'none';
		}, 1998);
	};

	document.getElementById('starterScreen').addEventListener('click', function(){ anim.play(); setTimeout(fade, 3000)});
	sessionStorage.setItem("first_load", true);
}