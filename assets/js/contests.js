document.addEventListener('DOMContentLoaded', function () {
	console.log('Contest script loaded');

	var btn = document.getElementById('contest-btn');
	var popup = document.getElementById('contest-popup');
	var span = document.getElementsByClassName('close-contests')[0];

	if (!btn) console.error('Button not found');
	if (!popup) console.error('Popup not found');
	if (!span) console.error('Close span not found');

	if (btn && popup && span) {
		btn.onclick = function () {
			popup.style.display = 'block';
		};

		span.onclick = function () {
			popup.style.display = 'none';
		};

		window.onclick = function (event) {
			if (event.target == popup) {
				popup.style.display = 'none';
			}
		};
	} else {
		console.error('One or more elements not found');
	}
});
