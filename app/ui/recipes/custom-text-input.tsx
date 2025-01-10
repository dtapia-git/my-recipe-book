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

	return (
		<div
			className={cn(
				"flex items-center bg-gray-50 border rounded-lg",
				validationError?.length && "border-red-500 bg-red-100",
			)}
			style={{ backgroundColor: "rgb(239 245 242)" }}
		>
			<div className="flex-1">
				<input
					className="bg-inherit border-0 w-full focus:ring-0 rounded-lg"
					style={{ color: "rgb(0, 0, 0)" }}
					id={id}
					name={name}
					inputMode="text"
					type="text"
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
						className="h-5 w-5 self-center fill-slate-500"
						style={{ fill: "rgb(28 38 36)" }}
					/>
				</Button>
			)}
		</div>
	);
}
