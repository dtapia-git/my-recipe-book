import { SmallTopAppBar } from "./material-top-app-bar-small";

export default function MaterialTopAppBar({
	type,
	headline,
	href,
}: {
	type: "center-aligned" | "small" | "medium" | "large";
	headline: string;
	href: string;
}) {
	return <SmallTopAppBar headline={headline} href={href} />;
}
