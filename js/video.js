var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	x = video.autoplay = false;
	console.log("Autoplay is set to "+ x)
	y = video.loop = false;
	console.log("Loop is set to "+ y)
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	volume = document.querySelector("#slider").value
	console.log("volume is " + volume)
	document.querySelector('span#volume').innerHTML = volume + '%'
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video")
	video.playbackRate -= .10
	console.log("Speed is " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video")
	video.playbackRate += .10
	console.log("Speed is " + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log('Skip ahead')
	if (video.currentTime >= video.duration){
		video.currentTime = 0
		console.log('Video current time is ' + video.currentTime)
	}
	else{
		video.currentTime += 10
		console.log('Video current time is ' + video.currentTime)
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {    
		video.muted = true;
		console.log('Muted')
		document.querySelector("#mute").innerHTML = "Unmute"
 	}
 else {
	 video.muted = false;
	 console.log('Unmuted')
	 document.querySelector("#mute").innerHTML = "Mute"
 	}
});

document.querySelector('#slider').addEventListener("input", function() { 
	console.log('The current volume is ' + video.volume)
	video.volume = this.value / 100 
	console.log('The current volume is ' + video.volume)
	document.querySelector('span#volume').innerHTML = (video.volume *100) + '%'
});

document.querySelector("#vintage").addEventListener("click", function(){
	document.querySelector("#player1").classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function(){
	document.querySelector("#player1").classList.remove("oldSchool")
});
