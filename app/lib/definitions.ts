export type Recipe = {
	id: string;
	name: string;
	calories: number;
	protein: number;
	carbohydrates: number;
	fat: number;
	ingredients: string[];
	directions: string[];
};

export type ListItem = {
	id: string;
	value: string;
};

export function exportAddScrollListener() {
	// Listen for new scroll events, here we debounce our `storeScroll` function
	document.addEventListener("scroll", debounce(storeScroll));

	// Update scroll position for first time
	storeScroll();
}

function debounce(fn: CallableFunction) {
	let frame;

	// The debounce function returns a new function that can receive a variable number of arguments
	return (...params) => {
		// If the frame variable has been defined, clear it now, and queue for next frame
		if (frame) {
			cancelAnimationFrame(frame);
		}

		// Queue our function call for the next frame
		frame = requestAnimationFrame(() => {
			// Call our function and pass any params we received
			fn(...params);
		});
	};
}

// Reads out the scroll position and stores it in the data attribute
// so we can use it in our stylesheets
function storeScroll() {
	document.documentElement.dataset.scroll = `${window.scrollY}`;
}
