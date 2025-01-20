"use client";

import { exportAddScrollListener } from "@/app/lib/definitions";
import Link from "next/link";
import { useEffect } from "react";
import { IoArrowBackSharp } from "react-icons/io5";

export function SmallTopAppBar({
	headline,
	href,
}: { headline: string; href: string }) {
	useEffect(() => {
		exportAddScrollListener();
	}, []);

	return (
		<div className="mat-top-app-bar-container_small">
			<Link href={href} className="flex">
				<button type="button" className="bg-transparent border-0 h-full px-4">
					<IoArrowBackSharp className="h-6 w-6 self-center on-surface" />
				</button>
			</Link>
			<h1 className="headline">{headline}</h1>
		</div>
	);
}
