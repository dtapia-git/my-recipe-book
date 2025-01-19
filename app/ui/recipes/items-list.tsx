"use client";

import type { ListItem } from "@/app/lib/definitions";
import { IoIosRemoveCircleOutline } from "react-icons/io";

export function ItemsList({
	items,
	onDeleteListItem,
}: {
	items: ListItem[];
	onDeleteListItem: CallableFunction;
}) {
	return (
		<div className="mat-list-container surface">
			{items.length > 0 && (
				<ul>
					{items.map((item: ListItem) => (
						<li key={item.id} className="mat-list-item surface">
							<p className="flex-1 on-surface">{item.value}</p>
							<button
								type="button"
								className="bg-transparent rounded-full mat-icon-button_standard flex justify-center"
								onClick={() => onDeleteListItem(item.id)}
							>
								<IoIosRemoveCircleOutline className="h-6 w-6 self-center on-surface-variant" />
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
