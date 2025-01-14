import cn from "classnames";
import { Button } from "flowbite-react";
import { useRef, useState } from "react";

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
				<div
					className={cn(
						"flex items-center rounded-lg button-outline ",
						isInputFocused && "primary-outline",
					)}
				>
					<input
						autoFocus
						ref={inputRef}
						className="bg-inherit border-0 w-full focus:ring-0 rounded-lg"
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

			<div className="flex justify-between px-1 items-center">
				<Button
					size="xs"
					className="bg-inherit tertiary"
					onClick={() => onCancel()}
				>
					Cancel
				</Button>

				<Button
					size="sm"
					className="bg-inherit secondary"
					onClick={(event: any) => {
						setInputValue("");
						inputRef.current?.focus();

						onAddItem(inputValue);
					}}
				>
					Add
				</Button>
			</div>
		</div>
	);
}
