"use client";

import { type FormState, updateRecipe } from "@/app/lib/actions";
import type { ListItem, Recipe } from "@/app/lib/definitions";
import cn from "classnames";
import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { AiOutlineLoading } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import { AddItemInput } from "./add-item-input";
import { ItemsList } from "./items-list";
import { MaterialButton } from "./material/material-button";
import MaterialTextField from "./material/material-text-field";

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
	const initialState: FormState = { message: null, errors: {} };
	const [state, formAction] = useActionState(updateRecipeWithId, initialState);
	const [isAddIngredientEnabled, setIsAddIngredientEnabled] =
		useState<boolean>(false);
	const [isAddDirectionEnabled, setIsAddDirectionEnabled] =
		useState<boolean>(false);

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

	function Submit() {
		const { pending } = useFormStatus();
		return (
			<button type="submit" className="primary-container on">
				{pending && (
					<AiOutlineLoading
						className="h-6 w-6 animate-spin absolute"
						style={{ top: "8px", left: "41px" }}
					/>
				)}

				<span className={cn(pending && "invisible")}>Save Recipe</span>
			</button>
		);
	}

	console.log(JSON.stringify(state), "state in edit form");

	return (
		<form action={formAction} className="flex flex-col h-full gap-4 p-3 pt-7">
			<section>
				<MaterialTextField
					id="recipeName"
					label="Recipe name"
					name="recipeName"
					value={recipe.name}
					validationError={state?.errors?.recipeName}
				/>
			</section>
			<section className="flex flex-col">
				<h2 className="on-surface-variant">Ingredients</h2>
				{ingredientsList.length > 0 && (
					<ItemsList
						items={ingredientsList}
						onDeleteListItem={handleDeleteIngredient}
					/>
				)}

				{isAddIngredientEnabled ? (
					<AddItemInput
						onAddItem={(value: string) => handleAddIngredient(value)}
						onCancel={() => setIsAddIngredientEnabled(false)}
					/>
				) : (
					<MaterialButton
						style="outlined"
						className="w-full"
						label="Add Ingredient"
						onClick={() => setIsAddIngredientEnabled(true)}
					/>
				)}
			</section>

			<section className="rounded flex flex-col">
				<h2 className="on-surface-variant">Directions</h2>
				{directionsList.length > 0 && (
					<ItemsList
						items={directionsList}
						onDeleteListItem={handleDeleteDirection}
					/>
				)}

				{isAddDirectionEnabled ? (
					<AddItemInput
						onAddItem={(value: string) => handleAddDirection(value)}
						onCancel={() => setIsAddDirectionEnabled(false)}
					/>
				) : (
					<div className="flex p-2">
						<MaterialButton
							style="outlined"
							className="w-full"
							label="Add Direction"
							onClick={() => setIsAddDirectionEnabled(true)}
						/>
					</div>
				)}
			</section>
			<div className="fixed bottom-4 right-3">
				<Submit />
			</div>
		</form>
	);
}
