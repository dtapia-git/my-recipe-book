"use client";

import { type FormState, updateRecipe } from "@/app/lib/actions";
import type { ListItem, Recipe } from "@/app/lib/definitions";
import cn from "classnames";
import { Button, Label } from "flowbite-react";
import { useActionState, useRef, useState } from "react";
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
	const [ingredientsList, setIngredientsList] = useState(initializeIngredients);
	const [directionsList, setDirectionsList] = useState(initializeDirections);

	const updateRecipeWithId = updateRecipe.bind(
		null,
		recipe.id,
		ingredientsList.map((item: ListItem) => item.value),
		directionsList.map((item: ListItem) => item.value),
	);
	const ingredientInputRef = useRef<HTMLInputElement>(null);
	const directionInputRef = useRef<HTMLInputElement>(null);
	const initialState: FormState = { message: null, errors: {} };
	const [state, formAction] = useActionState(updateRecipeWithId, initialState);
	const [isAddIngredientEnabled, setIsAddIngredientEnabled] =
		useState<boolean>(false);
	const [isAddDirectionEnabled, setIsAddDirectionEnabled] =
		useState<boolean>(false);
	// useEffect(() => {
	// 	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	// 	const handleClickOutside = (event: any) => {
	// 		if (
	// 			ingredientInputRef.current &&
	// 			!ingredientInputRef.current.contains(event.target)
	// 		) {
	// 			setIsAddIngredientEnabled(false);
	// 		}
	// 	};

	// 	document.addEventListener("mousedown", handleClickOutside);
	// 	return () => document.removeEventListener("mousedown", handleClickOutside);
	// }, []);

	function initializeIngredients() {
		return recipe.ingredients.map((ingredient) => {
			return {
				id: uuidv4(),
				value: ingredient,
			};
		});
	}

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

	function handleAddDirection(value: string) {
		if (value) {
			setDirectionsList([...directionsList, { id: uuidv4(), value: value }]);
		}
	}

	function handleDeleteDirection(id: string) {
		setDirectionsList(
			directionsList.filter((item: ListItem) => item.id !== id),
		);
	}

	// console.log(JSON.stringify(state), "state in edit form");

	return (
		<form action={formAction} className="flex flex-col h-full gap-4 p-3">
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
			<section className="rounded flex flex-col surface-container-low">
				<div className="max-h-52 overflow-scroll p-2">
					<ItemsList
						items={ingredientsList}
						onDeleteListItem={handleDeleteIngredient}
					/>
				</div>

				{isAddIngredientEnabled ? (
					<div ref={ingredientInputRef}>
						<AddItemInput
							onAddItem={(value: string) => handleAddIngredient(value)}
							onCancel={() => {
								console.log("click Cancel");
								setIsAddIngredientEnabled(false);
							}}
						/>
					</div>
				) : (
					<div className="flex p-2">
						<Button
							size="xs"
							className="secondary-container secondary-container-on w-full p-0 button-outline"
							onClick={() => setIsAddIngredientEnabled(true)}
						>
							<IoAdd className="h-4" />
							Add Ingredient
						</Button>
					</div>
				)}
			</section>

			<section className="rounded flex flex-col surface-container-low">
				<div className="max-h-52 overflow-scroll p-2">
					<ItemsList
						items={directionsList}
						onDeleteListItem={handleDeleteDirection}
					/>
				</div>

				{isAddDirectionEnabled ? (
					<div ref={ingredientInputRef}>
						<AddItemInput
							onAddItem={(value: string) => handleAddDirection(value)}
							onCancel={() => {
								console.log("click Cancel");
								setIsAddDirectionEnabled(false);
							}}
						/>
					</div>
				) : (
					<div className="flex p-2">
						{/* <Button
							size="xs"
							className="secondary-container secondary-container-on w-full p-0 button-outline"
							onClick={() => setIsAddDirectionEnabled(true)}
						>
							<IoAdd className="h-4 w-5" />
							Add Direction
						</Button> */}
						<Button
							size="xs"
							className="bg-inherit button-outline primary w-full p-0 button-outline"
							onClick={() => setIsAddDirectionEnabled(true)}
						>
							<IoAdd className="h-4 w-5" />
							Add Direction
						</Button>
					</div>
				)}
			</section>
			<div className="fixed bottom-4 right-3">
				<Button type="submit" className="primary-container" pill>
					Save Recipe
				</Button>
			</div>
		</form>
	);
}
