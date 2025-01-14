"use client";

import type { ListItem } from "@/app/lib/definitions";
import { Button } from "flowbite-react";
import { IoIosRemoveCircleOutline } from "react-icons/io";

export function ItemsList({
	items,
	onDeleteListItem,
}: {
	items: ListItem[];
	onDeleteListItem: CallableFunction;
}) {
	return (
		<div>
			{items.length > 0 && (
				<ul className="list-none text-sm">
					{items.map((item: ListItem) => (
						<li key={item.id}>
							<div className="flex items-center">
								<div className="flex-1" style={{ color: "rgb(28 38 36)" }}>
									{item.value}
								</div>
								<Button
									pill
									size="xs"
									className="bg-transparent p-0 hover:enabled:bg-gray-100 "
									onClick={() => onDeleteListItem(item.id)}
								>
									{/* <IoIosRemoveCircle
										className="h-5 w-5"
										style={{ fill: "rgb(96 122 117)" }}
									/> */}

									<IoIosRemoveCircleOutline
										className="h-5 w-5"
										style={{ fill: "rgb(96 122 117)" }}
									/>
								</Button>
							</div>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
