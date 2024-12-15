import { Recipe } from "@/app/lib/definitions";

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div className="block bg-white p-3 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
      <div className="flex flex-col gap-1 pb-1">
        <h5 className="text-lg">{recipe.name}</h5>
        <p className="text-gray-400 text-xs">
          Calories: {recipe.calories} | Protein: {recipe.protein}g | Carbs:{" "}
          {recipe.carbohydrates}g | Fat: {recipe.fat}g
        </p>
      </div>
    </div>
  );
}
