document.addEventListener('DOMContentLoaded', function () {
	const carouselElement = document.getElementById('mobClientSlider');
	let items = document.querySelectorAll('.client-carousel .carousel-item');

	const bootstrapCarousel = new bootstrap.Carousel(carouselElement, {
		interval: false, // Start with no interval
	});
	function adjustCarouselAutoplay() {
		if (window.innerWidth >= 992) {
			items.forEach((el) => {
				const minPerSlide = 7;
				let next = el.nextElementSibling;
				for (let i = 1; i < minPerSlide; i++) {
					if (!next) {
						next = items[0];
					}
					let cloneChild = next.cloneNode(true);
					el.appendChild(cloneChild.children[0]);
					next = next.nextElementSibling;
				}
			});
			// Disable autoplay and pause the carousel on desktop
			bootstrapCarousel.pause();
		} else {
			items.forEach((el) => {
				const minPerSlide = 4;
				let next = el.nextElementSibling;
				for (let i = 1; i < minPerSlide; i++) {
					if (!next) {
						next = items[0];
					}
					let cloneChild = next.cloneNode(true);
					el.appendChild(cloneChild.children[0]);
					next = next.nextElementSibling;
				}
			});
			// Enable autoplay on mobile
			bootstrapCarousel.cycle(); // Start the carousel sliding
			bootstrapCarousel._config.interval = 5000; // Set interval for mobile screens
		}
	}
	// Run the function on page load
	adjustCarouselAutoplay();

	// Re-run the function if the window is resized
	window.addEventListener('resize', adjustCarouselAutoplay);

	//Card height
	if (window.matchMedia('(min-width: 768px) and (max-width: 1200px)').matches) {
		const contentElements = document.querySelectorAll(
			'.community-type .card-text'
		);
		console.log(contentElements);
		let maxHeight = 0;

		// Calculate the max height
		contentElements.forEach((element) => {
			const elementHeight = element.offsetHeight;
			if (elementHeight > maxHeight) {
				maxHeight = elementHeight;
			}
		});

		// Set the max height to all .content elements
		contentElements.forEach((element) => {
			element.style.height = `${maxHeight}px`;
		});
	}
});
