import { fetchRecipe } from "@/app/lib/data";
import { EditRecipeForm } from "@/app/ui/recipes/edit-form";
import MaterialTopAppBar from "@/app/ui/recipes/material/material-top-app-bar";
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
			<MaterialTopAppBar type="small" headline="Recipe" href="view" />
			<EditRecipeForm recipe={recipe} />
		</div>
	);
}
