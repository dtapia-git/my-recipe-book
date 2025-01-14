"use client";

import cn from "classnames";
import { Button } from "flowbite-react";
import { useRef, useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function CustomTextInput({
	id,
	name,
	value,
	validationError,
}: {
	id: string;
	name: string;
	value: string;
	validationError?: string[];
}) {
	const inputRef = useRef<HTMLInputElement>(null);
	const [inputValue, setInputValue] = useState(value);
	const [isInputFocused, setIsInputFocused] = useState(false);

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
					Recipe
				</label>
				<input
					ref={inputRef}
					className="bg-inherit border-0 p-0 w-full focus:ring-0 rounded on-surface"
					id={id}
					name={name}
					inputMode="text"
					type="text"
					onFocus={() => setIsInputFocused(true)}
					onBlur={() => setIsInputFocused(false)}
					enterKeyHint="enter"
					value={inputValue}
					onChange={(event) => setInputValue(event.target.value)}
				/>

				{true && inputValue && (
					<Button
						color="light"
						className="bg-transparent border-0 h-10 p-0"
						onClick={() => {
							setInputValue("");

							if (inputRef.current) {
								inputRef.current.focus();
								setIsInputFocused(true);
							}
						}}
					>
						<IoMdCloseCircleOutline className="h-5 w-5 self-center on-surface-variant" />
					</Button>
				)}
			</div>
		</>
	);
}
