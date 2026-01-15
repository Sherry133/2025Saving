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

	return true;
}
