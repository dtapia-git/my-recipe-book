import { useRef, useState } from "react";
import { MaterialButton } from "./material/material-button";

export function AddItemInput({
	onAddItem,
	onCancel,
}: { onAddItem: CallableFunction; onCancel: CallableFunction }) {
	const inputRef = useRef<HTMLInputElement>(null);
	const [inputValue, setInputValue] = useState<string>("");
	const [isInputFocused, setIsInputFocused] = useState(true);

	function handleFocus() {
		if (inputRef.current) {
			inputRef.current.scrollIntoView({
				behavior: "smooth",
				block: "nearest",
			});

			setIsInputFocused(true);
		}
	}

	return (
		<div className="sticky bottom-0 pt-2 rounded surface-container-high">
			<div className="px-2">
				<div className="mat-text-field-outline">
					<input
						// biome-ignore lint/a11y/noAutofocus: <explanation>
						autoFocus
						ref={inputRef}
						className="mat-input focus:ring-0 on-surface-variant"
						id="add-ingredient"
						type="text"
						inputMode="text"
						enterKeyHint="enter"
						value={inputValue}
						onFocus={handleFocus}
						onBlur={() => setIsInputFocused(false)}
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

			<div className="flex justify-between px-2 items-center">
				<MaterialButton
					style="text"
					className="mat-tertiary-color"
					label="Cancel"
					onClick={() => onCancel()}
				/>

				<MaterialButton
					style="text"
					className="mat-secondary-color"
					label="Add"
					onClick={() => {
						setInputValue("");
						inputRef.current?.focus();

						onAddItem(inputValue);
					}}
				/>
			</div>
		</div>
	);
}
