"use client";

import { type FormState, updateRecipe } from "@/app/lib/actions";
import type { ListItem, Recipe } from "@/app/lib/definitions";
import cn from "classnames";
import { Button, Label } from "flowbite-react";
import { useActionState, useState } from "react";
import { IoAdd } from "react-icons/io5";
import { v4 as uuidv4 } from "uuid";
import { AddItemInput } from "./add-item-input";
import CustomTextInput from "./custom-text-input";
import { ItemsList } from "./items-list";

export function EditRecipeForm({
	recipe,
}: {
	recipe: Recipe;
}) {
	const [ingredientInputValue, setIngredientInputValue] = useState<string>("");
	const [isAddIngredientEnabled, setIsAddIngredientEnabled] =
		useState<boolean>(false);
	const [directionInputValue, setDirectionInputValue] = useState<string>("");
	const [ingredientsList, setIngredientsList] = useState(initializeIngredients);
	const [directionsList, setDirectionsList] = useState(initializeDirections);

	const updateRecipeWithId = updateRecipe.bind(
		null,
		recipe.id,
		ingredientsList.map((item: ListItem) => item.value),
		directionsList.map((item: ListItem) => item.value),
	);
	const initialState: FormState = { message: null, errors: {} };
	const [state, formAction] = useActionState(updateRecipeWithId, initialState);

	function initializeIngredients() {
		return recipe.ingredients.map((ingredient) => {
			return {
				id: uuidv4(),
				value: ingredient,
			};
		});
	}

	function handleClickAddIngredient() {}

	// function handleAddIngredient() {
	// 	if (ingredientInputValue) {
	// 		setIngredientsList([
	// 			...ingredientsList,
	// 			{ id: uuidv4(), value: ingredientInputValue },
	// 		]);
	// 	}
	// }

	function handleAddIngredient(value: string) {
		if (value) {
			setIngredientsList([...ingredientsList, { id: uuidv4(), value: value }]);
		}
	}

	function handleDeleteIngredient(id: string) {
		setIngredientsList(
			ingredientsList.filter((item: ListItem) => item.id !== id),
		);
	}

	function initializeDirections() {
		return recipe.directions.map((direction) => {
			return {
				id: uuidv4(),
				value: direction,
			};
		});
	}

	function handleAddDirection() {
		if (directionInputValue) {
			setDirectionsList([
				...directionsList,
				{ id: uuidv4(), value: directionInputValue },
			]);
		}
	}

	function handleDeleteDirection(id: string) {
		setDirectionsList(
			directionsList.filter((item: ListItem) => item.id !== id),
		);
	}

	console.log(JSON.stringify(state), "state in edit form");

	return (
		<form
			action={formAction}
			className="flex flex-col h-full gap-4 p-3"
			style={{ backgroundColor: "rgb(244 251 248)" }}
		>
			<section>
				<div>
					<div className="block">
						<Label
							htmlFor="recipeName"
							value="Recipe"
							className={cn(
								"text-xs font-mediu",
								state?.errors?.recipeName && "text-sm text-red-500",
							)}
							style={{ color: "rgb(28 38 36)" }}
						/>
					</div>
					<CustomTextInput
						id="recipeName"
						name="recipeName"
						value={recipe.name}
						validationError={state?.errors?.recipeName}
					/>
				</div>
			</section>
			<section>
				<div className="max-h-72 overflow-scroll">
					<ItemsList
						items={ingredientsList}
						onDeleteListItem={handleDeleteIngredient}
					/>
				</div>

				{isAddIngredientEnabled ? (
					<AddItemInput
						onAddItem={(value: string) => handleAddIngredient(value)}
						onCancel={() => setIsAddIngredientEnabled(false)}
					/>
				) : (
					<Button
						size="xs"
						className="bg-transparent text-cyan-700 px-0"
						onClick={() => setIsAddIngredientEnabled(true)}
					>
						<IoAdd className="h-4 w-5" />
						Add Ingredient
					</Button>
				)}
			</section>
			<section>
				<div className="flex items-end gap-1">
					<div className="flex-1">
						<Label
							htmlFor="add-direction"
							value="Add Directions"
							className="text-xs font-medium text-gray-600"
						/>
						<div className="flex bg-gray-50 border rounded-lg">
							<input
								className="bg-inherit border-0 w-full focus:ring-0 text-black rounded-lg"
								id="add-direction"
								type="text"
								inputMode="text"
								enterKeyHint="enter"
								value={directionInputValue}
								onChange={(event) => setDirectionInputValue(event.target.value)}
								onKeyDown={(event) => {
									if (event.key === "Enter") {
										event.preventDefault();
										setDirectionInputValue("");
										handleAddDirection();
									}
								}}
							/>
						</div>
					</div>

					{/* <div className="flex-end">
						<Button
							type="button"
							className="bg-transparent focus:bg-transparent hover:enabled:bg-gray-50  text-cyan-700 p-0 border-gray-300"
							onClick={handleAddDirection}
						>
							Add
						</Button>
					</div> */}
				</div>
				<ItemsList
					items={directionsList}
					onDeleteListItem={handleDeleteDirection}
				/>
			</section>
			<div className="fixed bottom-4 right-3">
				<Button type="submit" pill>
					Save Recipe
				</Button>
			</div>
		</form>
	);
}
