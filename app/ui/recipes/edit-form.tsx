"use client";

import { type FormState, updateRecipe } from "@/app/lib/actions";
import type { ListItem, Recipe } from "@/app/lib/definitions";
import cn from "classnames";
import { Button, Label } from "flowbite-react";
import { useActionState, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CustomTextInput from "./custom-text-input";
import { ItemsList } from "./items-list";

export function EditRecipeForm({
	recipe,
}: {
	recipe: Recipe;
}) {
	const [ingredientInputValue, setIngredientInputValue] = useState<string>("");
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

	function handleAddIngredient() {
		if (ingredientInputValue) {
			setIngredientsList([
				...ingredientsList,
				{ id: uuidv4(), value: ingredientInputValue },
			]);
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
				<div className="flex items-end gap-1">
					<div className="flex-1">
						<Label
							htmlFor="add-ingredient"
							value="Add Ingredients"
							className="text-xs font-medium text-gray-600"
						/>
						<div className="flex bg-gray-50 border rounded-lg">
							<input
								className="bg-inherit border-0 w-full focus:ring-0 text-black rounded-lg"
								id="add-ingredient"
								type="text"
								inputMode="numeric"
								value={ingredientInputValue}
								onChange={(event) =>
									setIngredientInputValue(event.target.value)
								}
								onKeyDown={(event) => {
									if (event.key === "Enter") {
										event.preventDefault();
										setIngredientInputValue("");
										handleAddIngredient();
									}
								}}
							/>
						</div>
					</div>

					{/* <div className="flex-end">
						<Button
							style={{ backgroundColor: "rgb(227 234 231)", color: "rgb(0 106 97)" }}
							type="button"
							className="bg-transparent focus:bg-transparent hover:enabled:bg-gray-50   p-0 border-gray-300"
							onClick={handleAddIngredient}
						>
							Add
						</Button>
					</div> */}
				</div>
				<ItemsList
					items={ingredientsList}
					onDeleteListItem={handleDeleteIngredient}
				/>
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
