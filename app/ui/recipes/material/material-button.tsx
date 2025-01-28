import type { MouseEventHandler } from "react";
import { OutlinedButton, TextButton } from "./material-buttons";

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
}
