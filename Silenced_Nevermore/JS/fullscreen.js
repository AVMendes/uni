$(".fullscreen").click(openFullscreen('$("body")'));

function openFullscreen(fs) {
	console.log(fs);
	if (fs.requestFullscreen) {
		fs.requestFullscreen();
	} else if (fs.mozRequestFullScreen) { /* Firefox */
		fs.mozRequestFullScreen();
	} else if (fs.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
		fs.webkitRequestFullscreen();
	} else if (fs.msRequestFullscreen) { /* IE/Edge */
		fs.msRequestFullscreen();
	}
}