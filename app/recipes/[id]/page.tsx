import { fetchRecipe } from "@/app/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";
import { Button, Card } from "flowbite-react";
import Link from "next/link";
import { HiOutlineArrowLeft } from "react-icons/hi2";

export default async function RecipeDetails(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const recipe = await fetchRecipe(params.id);

  return (
    <div className="min-w-10 max-w-lg mx-auto">
      {recipe && (
        <div>
          <div className="grid grid-cols-3 items-center py-2 px-3">
            <div className="justify-self-start">
              <Link href={"/"}>
                <Button outline pill>
                  <HiOutlineArrowLeft className="h-3 w-3" />
                </Button>
              </Link>
            </div>

            <h1 className="justify-self-center text-black">Recipe</h1>
          </div>
          <div className="px-3">
            <Card className="max-w-lg">
              <div
                id="header"
                className="flex flex-col border-b gap-1 px-5 py-3">
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

              {/* <Button color="failure">Delete</Button> */}
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
