import Link from "next/link";
import { Recipe } from "../lib/definitions";
import { recipes } from "../lib/placeholder-data";
import { RecipeCard } from "../ui/recipes/card";

export default function Recipes() {
  const recipeList = recipes;

  return (
    <>
      <ul>
        {recipeList?.map((recipe: Recipe) => (
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
