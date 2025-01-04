import { fetchRecipe } from "@/app/lib/data";
import { EditRecipeForm } from "@/app/ui/recipes/edit-form";
import { Card } from "flowbite-react";
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
		<div className="min-w-10 max-w-lg mx-auto p-3">
			<Card>
				<EditRecipeForm recipe={recipe} />
			</Card>
		</div>
	);
}
