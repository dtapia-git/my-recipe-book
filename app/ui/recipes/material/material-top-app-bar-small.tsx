"use client";

import { exportAddScrollListener } from "@/app/lib/definitions";
import { useEffect } from "react";
import { BackButton } from "./material-buttons";

export function SmallTopAppBar({
	headline,
	href,
	className,
}: { headline: string; href: string; className?: string }) {
	useEffect(() => {
		exportAddScrollListener();
	}, []);

	return (
		<div className={`mat-top-app-bar-container_small gap-4 ${className}`}>
			<BackButton href={href} />
			{/* <Link href={href}>
				<BackButton />
			</Link> */}
			<h1 className="headline">{headline}</h1>
		</div>
	);
}
