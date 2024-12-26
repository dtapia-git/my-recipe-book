import { fetchRecipe } from "@/app/lib/data";
import RecipeDetailCard from "@/app/ui/recipes/detail-card";
import { CardSkeleton } from "@/app/ui/recipes/skeletons";
import { Button } from "flowbite-react";
import Link from "next/link";
import { Suspense } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";

export default async function RecipeDetails(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;

  return (
    <div className="min-w-10 max-w-lg mx-auto">
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
        <Suspense fallback={<CardSkeleton></CardSkeleton>}>
          <RecipeDetailCard recipeId={params.id}></RecipeDetailCard>
        </Suspense>
      </div>
    </div>
  );
}
