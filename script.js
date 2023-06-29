// Acees button from the html page
let start_button = document.getElementById('start');
let stop_button = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

// create variable hr = hour, min= minute, sec = seconds
let hr = 00;
let min = 00;
let sec = 00;
let count = 00;


// on click functions
// start button
start_button.addEventListener('click', function () {
	timer = true;
	watch();
});

// stop button
stop_button.addEventListener('click', function () {
	timer = false;
});

// reset button
resetBtn.addEventListener('click', function () {
	timer = false;
	hr = 0;
	min = 0;
	sec = 0;
	count = 0;
	document.getElementById('hr').innerHTML = "00";
	document.getElementById('min').innerHTML = "00";
	document.getElementById('sec').innerHTML = "00";
	document.getElementById('count').innerHTML = "00";
});


// stop watch functionality
function watch() {
	if (timer) {
		count++;

		if (count == 100) {
			sec++;
			count = 0;
		}

		if (sec == 60) {
			min++;
			sec = 0;
		}

		if (min == 60) {
			hr++;
			min = 0;
			sec = 0;
		}

		let hrString = hr;
		let minString = min;
		let secString = sec;
		let countString = count;

		if (hr < 10) {
			hrString = "0" + hrString;
		}

		if (min < 10) {
			minString = "0" + minString;
		}

		if (sec < 10) {
			secString = "0" + secString;
		}

		if (count < 10) {
			countString = "0" + countString;
		}

		document.getElementById('hr').innerHTML = hrString;
		document.getElementById('min').innerHTML = minString;
		document.getElementById('sec').innerHTML = secString;
		document.getElementById('count').innerHTML = countString;
		setTimeout(watch, 10);
	}
}
