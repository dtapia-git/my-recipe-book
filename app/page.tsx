// "use client";

import Recipes from "./recipes/page";
import { Header } from "./ui/recipes/header";

export default function Home() {
	// The debounce function receives our function as a parameter
	// const debounce = (fn) => {
	// 	// This holds the requestAnimationFrame reference, so we can cancel it if we wish
	// 	let frame;

	// 	// The debounce function returns a new function that can receive a variable number of arguments
	// 	return (...params) => {
	// 		// If the frame variable has been defined, clear it now, and queue for next frame
	// 		if (frame) {
	// 			cancelAnimationFrame(frame);
	// 		}

	// 		// Queue our function call for the next frame
	// 		frame = requestAnimationFrame(() => {
	// 			// Call our function and pass any params we received
	// 			fn(...params);
	// 		});
	// 	};
	// };

	// Reads out the scroll position and stores it in the data attribute
	// so we can use it in our stylesheets
	// const storeScroll = () => {
	// 	document.documentElement.dataset.scroll = window.scrollY;
	// };

	// // Listen for new scroll events, here we debounce our `storeScroll` function
	// document.addEventListener("scroll", debounce(storeScroll), { passive: true });

	// useEffect(() => {
	// 	// Function to handle the event
	// 	function handlScroll(event) {
	// 		console.log("scroll");
	// 		document.documentElement.dataset.scroll = `${window.scrollY}`;
	// 	}

	// 	// Add event listener
	// 	document.addEventListener("scroll", handlScroll);

	// 	// Cleanup function to remove the listener when the component unmounts
	// 	return () => {
	// 		document.removeEventListener("scroll", handlScroll);
	// 	};
	// }, []); // The empty
	console.log("home init");

	// Update scroll position for first time
	// storeScroll();
	return (
		<main className="flex min-h-screen flex-col">
			<Header></Header>
			<Recipes></Recipes>
		</main>
	);
}
