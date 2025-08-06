document.addEventListener('DOMContentLoaded', function () {
	const menuPlaceholder = document.getElementById('menu-placeholder');

	if (!menuPlaceholder) {
		console.error('Menu placeholder not found.');
		return;
	}

	// Define menu items with their respective URLs
	const menuItems = [
		{ label: 'Home', url: 'index.html' },
		{ label: 'Getting Started', url: 'gettingstarted.html' },
		{ label: 'How it Works', url: 'howitworks.html' },
		{ label: 'Security First', url: 'security.html' },
		{ label: 'Instant Payments', url: 'instant-payments.html' },
		{ label: 'Achievements', url: 'achievements.html' },
		{ label: 'Testimonials', url: 'testimonials.html' },
		{ label: 'Blog', url: 'https://saveforamerica.org' },
		{
			label: 'Sign-Up!',
			url: 'https://www.schoolsavings.com/UserProfile/tabid/63/Default.aspx',
		},
		{
			label: 'LOG IN',
			url: 'https://www.schoolsavings.com/UserLogin/tabid/76/Default.aspx?returnurl=%2fUserProfile%2ftabid%2f63%2fDefault.aspx',
		},
		{ label: 'Contact Us', url: 'contact.html' },
	];
	function generateMenu() {
		const currentPage = window.location.pathname;
		//if no connection, add '/' to path beginning
		const relativeCurrentPage = currentPage.split('/').pop();
		// Generate HTML for the menu
		const menuHTML = menuItems
			.map((item) => {
				if (item.dropdown) {
					// Filter out the current page from dropdown menu items
					const filteredDropdownItems = item.dropdown.filter(
						(dropdownItem) =>
							dropdownItem.url !== relativeCurrentPage
					);

					// Generate HTML for filtered dropdown menu items
					const dropdownHTML = filteredDropdownItems
						.map((dropdownItem) => {
							return `<li><a href="${dropdownItem.url}">${dropdownItem.label}</a></li>`;
						})
						.join('');

					// Generate HTML for main menu item with dropdown
					if (filteredDropdownItems.length > 0) {
						return `<li><a href="#">${item.label}</a><ul class="dropdown">${dropdownHTML}</ul></li>`;
					} else {
						return ''; // Empty string if all dropdown items are filtered out
					}
				} else {
					// Filter out the current page from regular menu items
					if (item.url !== relativeCurrentPage) {
						return `<li><a href="${item.url}">${item.label}</a></li>`;
					} else {
						return ''; // Empty string if the current page matches the menu item
					}
				}
			})
			.filter((menuItem) => menuItem !== '') // Remove empty strings
			.join('<hr>'); // Insert <hr> between menu items

		// Insert the generated HTML into the menu placeholder
		menuPlaceholder.innerHTML = `<ul class="links">${menuHTML}</ul>`;
	}

	// Call the generateMenu function to initially populate the menu
	generateMenu();
});
