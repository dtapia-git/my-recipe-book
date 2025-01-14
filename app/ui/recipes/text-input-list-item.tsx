"use client";

import type { ListItem } from "@/app/lib/definitions";
import { Button } from "flowbite-react";
import { IoRemoveCircle } from "react-icons/io5";

export default function TextInputListItem({
	item,
	onChangeItem,
	onDeleteItem,
}: {
	item: ListItem;
	onChangeItem: CallableFunction;
	onDeleteItem: CallableFunction;
}) {
	return (
		<div className="flex items-center gap-1 bg-gray-50 border rounded-lg">
			<input
				className="bg-gray-50 border-0 w-full focus:ring-0 text-black"
				type="text"
				value={item.value}
				onChange={(event) =>
					onChangeItem({
						...item,
						value: event.target.value,
					})
				}
			/>
			<Button
				pill
				size="xs"
				className="bg-transparent hover:bg-current"
				onClick={() => onDeleteItem(item.id)}
			>
				<IoRemoveCircle className="h-5 w-5 self-center text-red-500" />
			</Button>
		</div>
	);
}
