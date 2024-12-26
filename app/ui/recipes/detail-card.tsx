import { Recipe } from "@/app/lib/definitions";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
  Card,
} from "flowbite-react";
import { DeleteRecipe } from "./buttons";
import { CardSkeleton } from "./skeletons";

export function RecipeDetailCard({ recipe }: { recipe: Recipe }) {
  return (
    <Card className="max-w-lg">
      <div id="header" className="flex flex-col border-b gap-1 px-5 py-3">
        <h1 className="text-black text-lg">{recipe.name}</h1>
        <p className="text-gray-400 text-xs">
          {`Calories: ${recipe.calories} | Protein: ${recipe.protein}g | Carbs:${recipe.carbohydrates}g | Fat: ${recipe.fat}g`}
        </p>
      </div>
      <Accordion collapseAll flush={true} alwaysOpen={true}>
        <AccordionPanel className="p-4">
          <AccordionTitle>Ingredients</AccordionTitle>
          <AccordionContent>
            <ul className="list-disc text-black">
              {recipe.ingredients.map((ingredient: string) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel>
          <AccordionTitle>Directions</AccordionTitle>
          <AccordionContent>
            <ol className="list-decimal text-black">
              {recipe.directions.map((direction: string) => (
                <li key={direction}>{direction}</li>
              ))}
            </ol>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>

      <DeleteRecipe id={recipe.id}></DeleteRecipe>
    </Card>
  );
}
