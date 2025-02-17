function validateForm() {
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var category = document.getElementById('category').value;
	var companyName = document.getElementById('company-name').value;
	// var priority = document.querySelector('input[name="priority"]:checked');
	var institutionType = document.querySelector(
		'input[name="priority"]:checked'
	);
	// var human = document.getElementById('demo-human').checked;

	// Basic name validation
	if (name.trim() == '') {
		alert('Please enter your name.');
		return false;
	}
	// Basic company name validation
	if (companyName.trim() == '') {
		alert('Please enter your Company name.');
		return false;
	}

	// Basic email validation
	if (email.trim() == '' || !validateEmail(email)) {
		alert('Please enter a valid email address.');
		return false;
	}

	// Check if a category is selected
	if (category == '') {
		alert('Please select a Preferred Solution.');
		return false;
	}

	//Check if institution type is selected
	if (institutionType == '') {
		alert('Please select an Institution Type.');
		return false;
	}

	function validateEmail(email) {
		var re = /\S+@\S+\.\S+/;
		return re.test(email);
	}
}
// window.addEventListener('DOMContentLoaded', function () {
// 	const inputs = document.querySelectorAll('input, email, select, textarea');
// 	const placeholderOpacity = window.innerWidth < 768 ? 1 : 0.5;

// 	inputs.forEach((input) => {
// 		input.addEventListener('input', function () {
// 			input.style.color = '_palette(fg-bold)';
// 			input.style.fontWeight = '900';
// 			// input.style.backgroundColor = '_palette(border-bg-form)';
// 			input.style.opacity = 0.5;
// 			input.value.trim() === '' ? placeholderOpacity : 1;
// 		});
// 	});
// });

// function validateForm() {
// 	var name = document.getElementById('name').value;
// 	var email = document.getElementById('email').value;
// 	var category = document.getElementById('category').value;
// 	var priority = document.querySelector('input[name="priority"]:checked');
// 	// var human = document.getElementById('demo-human').checked;

// 	// Basic name validation
// 	if (name.trim() == '') {
// 		alert('Please enter your name.');
// 		return false;
// 	}

// 	// Basic email validation
// 	if (email.trim() == '' || !validateEmail(email)) {
// 		alert('Please enter a valid email address.');
// 		return false;
// 	}

// 	// Check if a category is selected
// 	if (category == '') {
// 		alert('Please select a Preferred Solution.');
// 		return false;
// 	}

// 	//Check if institution type is selected
// 	if (!institution - type) {
// 		alert('Please select an Institution Type.');
// 		return false;
// 	}
// 	function validateEmail(email) {
// 		var re = /\S+@\S+\.\S+/;
// 		return re.test(email);
// 	}
// }
