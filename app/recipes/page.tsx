import Link from "next/link";
import { fetchRecipes } from "../lib/data";
import type { Recipe } from "../lib/definitions";
import { RecipeListCard } from "../ui/recipes/list-card";

export default async function Recipes() {
	const recipes = await fetchRecipes();

	return (
		<div>
			<ul>
				{recipes?.map((recipe: Recipe) => (
					<li className="border-b-2" key={recipe.id}>
						<Link href={`recipes/${recipe.id}/view`}>
							<RecipeListCard recipe={recipe} />
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
