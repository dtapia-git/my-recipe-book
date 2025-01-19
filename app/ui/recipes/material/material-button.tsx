import type { MouseEventHandler } from "react";

export interface MatButtonProps {
	label: string;
	style: MatButtonStyle;
	className?: string;
	onClick?: MouseEventHandler | undefined;
}

export type MatButtonStyle = "text" | "outlined";

export function MaterialButton({
	label,
	style,
	className,
	onClick: clickHandler,
}: {
	label: string;
	style: MatButtonStyle;
	className?: string;
	onClick?: MouseEventHandler | undefined;
}) {
	if (style === "outlined") {
		return OutlinedButton({ label, style, className, onClick: clickHandler });
	}

	return TextButton({ label, style, className, onClick: clickHandler });

	function TextButton(props: MatButtonProps) {
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

	function OutlinedButton(props: MatButtonProps) {
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
}
