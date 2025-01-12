"use client";

import cn from "classnames";
import { Button } from "flowbite-react";
import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

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
	const [inputValue, setInputValue] = useState(value);
	const [isInputFocused, setIsInputFocused] = useState(false);

	return (
		<div
			className={cn(
				"flex items-center rounded-lg button-outline",
				validationError?.length && "border-red-500 bg-red-100",
				isInputFocused && "primary-outline",
			)}
		>
			<div className="flex-1">
				<input
					className="bg-inherit border-0 w-full focus:ring-0 rounded-lg"
					style={{ color: "rgb(0, 0, 0)" }}
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
			</div>

			{inputValue && (
				<Button
					color="light"
					className="bg-transparent border-0 h-10 p-0"
					onClick={() => setInputValue("")}
				>
					<IoIosCloseCircle
						className="h-5 w-5 self-center"
						style={{ color: "rgb(59 69 67)" }}
					/>
				</Button>
			)}
		</div>
	);
}
