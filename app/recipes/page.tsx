import Link from "next/link";
import { Recipe } from "../lib/definitions";
import { RecipeCard } from "../ui/recipes/card";
import { fetchRecipes } from "../lib/data";

export default async function Recipes() {
  const recipes = await fetchRecipes();

  return (
    <>
      <ul>
        {recipes?.map((recipe: Recipe) => (
          <li className="border-b-2" key={recipe.id}>
            <Link href={`recipes/${recipe.id}`}>
              <RecipeCard recipe={recipe}></RecipeCard>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
