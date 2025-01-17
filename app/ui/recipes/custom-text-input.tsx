"use client";

import cn from "classnames";
import { Button } from "flowbite-react";
import { useRef, useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function CustomTextInput({
	id,
	label,
	name,
	value,
	validationError,
}: {
	id: string;
	label: string;
	name: string;
	value: string;
	validationError?: string[];
}) {
	const [inputValue, setInputValue] = useState(value);
	const [isInputFocused, setIsInputFocused] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);

	return (
		<>
			<div
				className={cn(
					"input-container-outline rounded",
					validationError?.length && "border-red-500 bg-red-100",
					isInputFocused && "primary-outline",
				)}
			>
				<label
					className={cn(
						"floating-input-label color-on-surface-variant",
						(isInputFocused || inputValue) &&
							"floating-input-label-focused primary",
					)}
					htmlFor="recipeName"
				>
					{label}
				</label>
				<input
					ref={inputRef}
					className="bg-inherit border-0 p-0 w-full focus:ring-0 rounded on-surface"
					id={id}
					inputMode="text"
					type="text"
					name={name}
					value={inputValue}
					enterKeyHint="enter"
					onFocus={() => setIsInputFocused(true)}
					onBlur={() => setIsInputFocused(false)}
					onChange={(event) => setInputValue(event.target.value)}
				/>

				<Button
					tabIndex={0}
					color="light"
					className={cn(
						"bg-transparent border-0 h-11 p-0",
						isInputFocused && "visible",
						!isInputFocused && "invisible",
					)}
					onClick={() => {
						if (inputRef.current) {
							inputRef.current.focus();
							setIsInputFocused(true);
						}

						setInputValue("");
					}}
				>
					<IoMdCloseCircleOutline className="h-5 w-5 self-center on-surface-variant" />
				</Button>
			</div>
		</>
	);
}
