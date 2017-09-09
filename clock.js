/*******************************************************************
Javascript Clock
 *******************************************************************/

window.onload = function updateClock() {
	//setting date variables
	var currentTime = new Date();
	var currentHours = currentTime.getHours();
	var currentMinutes = currentTime.getMinutes();
	var currentSeconds = currentTime.getSeconds();
	//printing date straight from computer
	var theDate = document.createElement("p");
	theDate.textContent = currentTime;
	// digital style clock
	var clock = document.querySelector("p");
	currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
	currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
	var timeofday = (currentHours < 12 ? "AM" : "PM");
	if (timeofday == "PM") {
		currentHours = (currentHours == 12 ? 1 : "") + currentHours - 12;
	}
	clock.textContent = "" + currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeofday;
	setInterval(updateClock, 1000);

} 
