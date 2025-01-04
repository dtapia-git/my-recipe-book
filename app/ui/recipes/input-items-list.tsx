"use client";

import type { ListItem } from "@/app/lib/definitions";
import { Button } from "flowbite-react";
import { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { v4 as uuidv4 } from "uuid";
import TextInputListItem from "./text-input-list-item";

export function InputItemsList({
	name,
	items,
}: { name: string; items: string[] }) {
	const [itemsList, setItemsList] = useState<ListItem[]>(initializeItems);

	function handleAddItem() {
		if (itemsList.every((item) => item.value !== "")) {
			setItemsList([...itemsList, { id: uuidv4(), value: "", name: name }]);
		}
	}

	function handleDeleteItem(id: string) {
		setItemsList(itemsList.filter((item: ListItem) => item.id !== id));
	}

	function handleChangeItem(updatedItem: ListItem) {
		setItemsList(
			itemsList.map((item) => {
				if (item.id === updatedItem.id) {
					return updatedItem;
				}
				return item;
			}),
		);
	}

	function initializeItems() {
		return items.map((item) => {
			return {
				id: uuidv4(),
				name: name,
				value: item,
			};
		});
	}

	return (
		<div>
			<ul className="list-none flex flex-col gap-1">
				{itemsList.map((item: ListItem) => (
					<li key={item.id}>
						<TextInputListItem
							item={item}
							onChangeItem={handleChangeItem}
							onDeleteItem={handleDeleteItem}
						/>
					</li>
				))}
			</ul>
			<div className="flex-end mt-2">
				<Button
					type="button"
					size="xs"
					onClick={handleAddItem}
					className="bg-transparent focus:bg-transparent hover:enabled:bg-gray-50  text-cyan-700 p-0 border-gray-300"
				>
					<IoAddCircleOutline className="h-4 w-4 self-center text-cyan-700 mr-1 ps-0" />
					{name === "direction" ? "Add direction" : "Add ingredient"}
				</Button>
			</div>
		</div>
	);
}
