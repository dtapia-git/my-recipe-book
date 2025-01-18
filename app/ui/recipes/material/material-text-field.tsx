"use client";

import cn from "classnames";
import { useRef, useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdError } from "react-icons/md";

export default function MaterialTextField({
	id,
	label,
	name,
	value,
	supportingText,
	validationError,
}: {
	id: string;
	label: string;
	name: string;
	value: string;
	supportingText?: string;
	validationError?: string[];
}) {
	const [inputValue, setInputValue] = useState(value);
	const inputRef = useRef<HTMLInputElement>(null);

	return (
		<div>
			<div
				className={cn(
					"mat-text-field-outline",
					validationError?.length && "mat-text-field-outline_error",
				)}
			>
				<label
					className={cn(
						"mat-floating-label",
						inputValue && "mat-floating-label_populated",
					)}
					htmlFor="recipeName"
				>
					{label}
				</label>
				<input
					ref={inputRef}
					className="mat-input focus:ring-0 on-surface"
					id={id}
					inputMode="text"
					type="text"
					name={name}
					value={inputValue}
					enterKeyHint="enter"
					onChange={(event) => setInputValue(event.target.value)}
				/>

				{!validationError?.length && (
					<button
						type="button"
						className="bg-transparent border-0 h-full ps-4 pe-3 mat-trailing-icon"
						onClick={() => {
							if (inputRef.current) {
								inputRef.current.focus();
							}

							setInputValue("");
						}}
					>
						<IoMdCloseCircleOutline className="h-6 w-6 self-center on-surface-variant" />
					</button>
				)}

				{validationError?.length && (
					<button
						type="button"
						className="bg-transparent border-0 h-full ps-4 pe-3"
					>
						<MdError className="h-6 w-6 self-center error-color" />
					</button>
				)}
			</div>

			{supportingText && validationError?.length && (
				<p className="mat-supporting-text">{supportingText}</p>
			)}

			{validationError?.length && (
				<p className="mat-error-text">{validationError[0]}</p>
			)}
		</div>
	);
}
