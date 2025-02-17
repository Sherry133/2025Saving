// Create a new ScrollTimeline

document.addEventListener('DOMContentLoaded', () => {
	const scrollTimeline = new ScrollTimeline({
		scrollSource: document.documentElement,
		timeRange: 1000, // 1 second
		orientation: 'block',
	});

	// Select all elements with the class 'letter-animation'
	const letterAnimations = document.querySelectorAll('.letter-animation');

	// Loop through each letter-animation element
	letterAnimations.forEach((element) => {
		// Select all 'span' elements within the current element
		const letters = Array.from(element.textContent.trim()).map((letter) => {
			const span = document.createElement('span');
			span.textContent = letter;
			return span;
		});

		// Clear the content of the element and append the new span elements
		element.innerHTML = '';
		letters.forEach((letter) => element.appendChild(letter));

		// Apply animation to each letter
		letters.forEach((letter, index) => {
			letter.style.opacity = 0;
			letter.style.animation = `fadeInLetter 0.5s forwards`;
			letter.style.animationDelay = `${index * 100}ms`;
		});
	});

	// Initialize Intersection Observer to trigger animations
	const observer = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target
						.querySelectorAll('span')
						.forEach((letter, index) => {
							setTimeout(() => {
								letter.style.opacity = 1;
							}, index * 100);
						});
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.5 }
	);

	// Observe each .letter-animation element
	document.querySelectorAll('.letter-animation').forEach((element) => {
		observer.observe(element);
	});
});
