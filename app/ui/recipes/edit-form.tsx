"use client";

import { type FormState, updateRecipe } from "@/app/lib/actions";
import type { Recipe } from "@/app/lib/definitions";
import cn from "classnames";
import { Button, Label } from "flowbite-react";
import Link from "next/link";
import { useActionState } from "react";
import CustomTextInput from "./custom-text-input";
import { InputItemsList } from "./input-items-list";

export function EditRecipeForm({
	recipe,
}: {
	recipe: Recipe;
}) {
	const initialState: FormState = { message: null, errors: {} };
	const updateRecipeWithId = updateRecipe.bind(null, recipe.id);
	const [state, formAction] = useActionState(updateRecipeWithId, initialState);

	console.log(JSON.stringify(state), "state in edit form");

	return (
		<form action={formAction} className="flex max-w-md flex-col gap-4">
			<section>
				<div>
					<div className="block">
						<Label
							htmlFor="recipeName"
							value="Recipe"
							className={cn(
								"text-sm font-medium text-gray-600",
								state?.errors?.recipeName && "text-sm text-red-500",
							)}
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
				<div className="border-b pb-2">
					<fieldset>
						<legend className="text-sm font-medium text-gray-600">
							Ingredients
						</legend>
						<InputItemsList name="ingredient" items={recipe.ingredients} />
					</fieldset>
				</div>
			</section>
			<section>
				<div className="border-b pb-2">
					<fieldset>
						<legend className="text-sm font-medium text-gray-600">
							Directions
						</legend>
						<InputItemsList name="direction" items={recipe.directions} />
					</fieldset>
				</div>
			</section>
			<div className="flex items-center justify-between gap-2">
				<Link href={"view"}>
					<Button size="xs" color="light">
						Cancel
					</Button>
				</Link>

				<Button type="submit">Save</Button>
			</div>
		</form>
	);
}
