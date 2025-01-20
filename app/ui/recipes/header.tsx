

import Link from "next/link";

export function Header() {
	return (
		<div
			className="h-9 px-2 flex justify-between items-center"
			style={{ backgroundColor: "#58686B" }}
		>
			<p style={{ color: "#ffffff" }} className="font-sans">
				Sort
			</p>
			<p style={{ color: "#ffffff" }} className="font-sans">
				Recipes
			</p>
			<Link href="/add-recipe">
				<button
					style={{
						// borderRadius: '50%', // Makes the button circular
						padding: "6px",
						backgroundColor: "#009d94",
						color: "#ffffff",
						border: "none",
					}}
				>
					+
				</button>
			</Link>
		</div>
	);
}
