import Link from "next/dist/client/link";
import type { MouseEventHandler } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import type { MatButtonStyle } from "./material-button";

export interface MatButtonProps {
	label: string;
	style: MatButtonStyle;
	className?: string;
	onClick?: MouseEventHandler | undefined;
}

export function TextButton(props: MatButtonProps) {
	return (
		<button
			type="button"
			className={`mat-button_text ${props.className}`}
			onClick={props?.onClick}
		>
			{props.label}
		</button>
	);
}

export function OutlinedButton(props: MatButtonProps) {
	return (
		<button
			type="button"
			className={`mat-button_outlined ${props.className}`}
			onClick={(event) => {
				if (props.onClick) {
					props.onClick(event);
				}
			}}
		>
			{props.label}
		</button>
	);
}

export function BackButton({ href }: { href: string }) {
	return (
		<Link
			href={href}
			className="bg-transparent mat-icon-button_standard flex items-center relative"
		>
			<span className="mat-icon-button-state-layer" />
			<IoArrowBackSharp className="h-6 w-6 mx-auto on-surface-variant" />
		</Link>

		// <button
		// 	type="button"
		// 	className="bg-transparent mat-icon-button_standard flex items-center relative"
		// >
		// 	<span className="mat-icon-button-state-layer"/>
		// 	<IoArrowBackSharp className="h-6 w-6 mx-auto on-surface-variant" />
		// </button>
	);
}
