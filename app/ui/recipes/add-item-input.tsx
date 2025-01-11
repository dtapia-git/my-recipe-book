import { Button } from "flowbite-react";
import { useState } from "react";

export function AddItemInput({
	onAddItem,
	onCancel,
}: { onAddItem: CallableFunction; onCancel: CallableFunction }) {
	const [inputValue, setInputValue] = useState<string>("");

	return (
		<div className="sticky bottom-0 pt-2 bg-cyan-700 rounded">
			<div className="flex rounded-lg">
				<div className="flex px-2 w-full">
					<input
						autoFocus
						className="border-0 w-full focus:ring-0 text-black rounded-lg"
						id="add-ingredient"
						type="text"
						inputMode="text"
						enterKeyHint="enter"
						value={inputValue}
						onBlur={() => onCancel()}
						onChange={(event) => setInputValue(event.target.value)}
						onKeyDown={(event) => {
							if (event.key === "Enter") {
								event.preventDefault();

								onAddItem(inputValue);
								setInputValue("");
							}
						}}
					/>
				</div>
			</div>
			<div className="py-2">
				<Button
					size="xs"
					className="bg-inherit text-gray-200"
					onClick={() => onCancel()}
				>
					Cancel
				</Button>
			</div>
		</div>
	);
}
