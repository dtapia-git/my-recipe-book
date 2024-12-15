import { fetchRecipe } from "@/app/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

export default async function RecipeDetails(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const recipe = await fetchRecipe(params.id);

  return (
    <div>
      {recipe && (
        <div>
          <div id="header" className="flex flex-col border-b gap-1 px-5 py-3">
            <h1 className="text-black text-lg">{recipe.name}</h1>
            <p className="text-gray-400 text-xs">
              {`Calories: ${recipe.calories} | Protein: ${recipe.protein}g | Carbs:${recipe.carbohydrates}g | Fat: ${recipe.fat}g`}
            </p>
          </div>

          <Accordion collapseAll flush={true} alwaysOpen={true}>
            <AccordionPanel>
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
        </div>
      )}
    </div>
  );
}
