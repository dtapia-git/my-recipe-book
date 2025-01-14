import { fetchRecipe } from "@/app/lib/data";
import { EditRecipeForm } from "@/app/ui/recipes/edit-form";
import { Button } from "flowbite-react";
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
					<Button
						size="xs"
						color="light"
						className="border-none p-0 bg-inherit tertiary"
						pill
					>
						Cancel
					</Button>
				</Link>
			</div>
			<EditRecipeForm recipe={recipe} />
		</div>
	);
}
