import { fetchRecipe } from "@/app/lib/data";
import { EditRecipeForm } from "@/app/ui/recipes/edit-form";
import { MaterialButton } from "@/app/ui/recipes/material/material-button";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function RecipeEdit(props: {
	params: Promise<{ id: string }>;
}) {
	const params = await props.params;
	const recipe = await fetchRecipe(params.id);

	if (!recipe) {
		notFound();
	}

	return (
		<div className="min-w-10 max-w-lg mx-auto">
			<div className="flex items-center justify-between px-1 py-2 sticky top-0 z-10 surface-container-high">
				<Link href={"view"}>
					<MaterialButton
						style="text"
						className="mat-tertiary-color"
						label="Cancel"
					/>
				</Link>
			</div>
			<EditRecipeForm recipe={recipe} />
		</div>
	);
}
