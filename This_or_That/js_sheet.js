var rightA = ["blue", "lightblue", "blue", "lightblue", "lightblue", "blue", "lightblue", "blue", "lightblue", "lightblue", "blue", "lightblue", "lightblue", "blue"];
var wrongA = ["lightblue", "blue", "lightblue", "blue", "blue", "lightblue", "blue", "lightblue", "blue", "blue", "lightblue", "blue", "blue", "lightblue"];
var aRight = 0;
var aWrong = 0;
var levels = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen"];
var cLevel = 0;
var uClick = "";
var score = 0;
var main = document.querySelector('.main');

var optionS = new sound("../This_or_That/data/option.mp3");
var fadeS = new sound("../This_or_That/data/fade.mp3");
var fadeSMedium = new sound("../This_or_That/data/fade_medium.mp3");
var fadeSShorter = new sound("../This_or_That/data/fade_shorter2.mp3");

function sound(src) {
	this.sound = document.createElement("audio");
	this.sound.src = src;
	this.sound.setAttribute("preload", "auto");
	this.sound.setAttribute("controls", "none");
	this.sound.style.display = "none";
	document.body.appendChild(this.sound);
	this.play = function(){
		this.sound.play();
	}
	this.stop = function(){
		this.sound.pause();
	}
}

if (main) {
	main.addEventListener("click", mainDown);
}

function mainDown(){
	document.querySelector('.main').classList.add('animate');
	fadeS.play();
	setTimeout(function() {		
		main.style.display = "none";
	}, 2900);
	transitionF();
}

function transitionF(){
	document.querySelector('.first').classList.add('animate');
	setTimeout(function() {
		document.querySelector('.first').style.display = "none";
	}, 5900);
	levelListener();
}

function levelListener(){
	document.querySelector('.' + levels[cLevel] + ' ' + '.' + rightA[cLevel]).addEventListener('click', green);
	document.querySelector('.' + levels[cLevel] + ' ' + '.' + wrongA[cLevel]).addEventListener('click', red);
}

function green() {
	optionS.play();
	document.querySelector('.' + levels[cLevel] + ' ' + '.' + rightA[cLevel]).classList.add('green');
	setTimeout(showExplanation, 1500);
	aRight++;
}

function red() {
	optionS.play();
	document.querySelector('.' + levels[cLevel] + ' ' + '.' + wrongA[cLevel]).classList.add('red');
	setTimeout(showExplanation, 1500);
	aWrong++;
}

function showExplanation(){
	fadeSShorter.play();
	document.querySelector('.' + levels[cLevel] + ' .white').classList.add('up');
	document.querySelector('.' + levels[cLevel] + ' .bg-white').classList.add('up');
	setTimeout(hidePreviousLvl, 1500);
	document.querySelector('.' + levels[cLevel] + ' .bg-white img').addEventListener('click', hideExplanation);
}

function hidePreviousLvl(){
	document.querySelector('.' + levels[cLevel] + ' .lightblue').style.display = "none";
	document.querySelector('.' + levels[cLevel] + ' .blue').style.display = "none";
}

function hideExplanation() {
	fadeSMedium.play();
	document.querySelector('.' + levels[cLevel] + ' .white h3').style.display = "none";
	document.querySelector('.' + levels[cLevel] + ' .white').classList.remove('up');
	document.querySelector('.' + levels[cLevel] + ' .white').classList.add('down');
	document.querySelector('.' + levels[cLevel] + ' .bg-white').classList.remove('up');
	document.querySelector('.' + levels[cLevel] + ' .bg-white').classList.add('down');
	setTimeout(function() {	document.querySelector('.' + levels[cLevel-1]).style.display = "none";}, 2000);
	if (cLevel != 13){
		cLevel++;
		levelListener();
	} else{
		scoreAttribution();
		transitionS();
	}
}

function scoreAttribution(){
	document.querySelector('#review .lightblue h3').innerHTML = 'Correct answers: ' + aRight;
	document.querySelector('#review .blue h3').innerHTML = 'Wrong answers: ' + aWrong;

	score = Math.floor((aRight * 100)/14);
	document.querySelector('#review .white h3').innerHTML = 'Score: ' + score;
}

function transitionS(){
	document.querySelector('.second').classList.add('animate');
	setTimeout(function() {
		document.querySelector('.second').style.display = "none";
	}, 6900);
}