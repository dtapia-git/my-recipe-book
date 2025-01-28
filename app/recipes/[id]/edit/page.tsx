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
		<div className="max-width_small mx-auto">
			<MaterialTopAppBar
				type="small"
				headline="Recipe"
				href="view"
				className="w-full max-width_small"
			/>
			<div style={{ marginTop: "var(--md-top-app-bar-height)" }}>
				<EditRecipeForm recipe={recipe} />
			</div>
		</div>
	);
}
