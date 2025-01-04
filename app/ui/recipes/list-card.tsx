import type { Recipe } from "@/app/lib/definitions";
import { Button } from "flowbite-react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export function RecipeListCard({ recipe }: { recipe: Recipe }) {
	return (
		<div className="flex items-center justify-between bg-white p-3 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
			<div className="flex flex-col gap-1 pb-1">
				<h5 className="text-black text-lg">{recipe.name}</h5>
				<p className="text-gray-400 text-xs">
					Calories: {recipe.calories} | Protein: {recipe.protein}g | Carbs:{" "}
					{recipe.carbohydrates}g | Fat: {recipe.fat}g
				</p>
			</div>
			<Link href={`recipes/${recipe.id}/view`}>
				<Button className="ml-auto bg-transparent h-full [&>span]:p-0">
					<IoIosArrowForward className="h-5 w-5 text-gray-600" />
				</Button>
			</Link>
		</div>
	);
}
