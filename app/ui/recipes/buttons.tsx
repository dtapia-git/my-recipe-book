import { deleteRecipe } from "@/app/lib/actions";
import { Button } from "flowbite-react";

export function DeleteRecipe({ id }: { id: string }) {
  const deleteRecipeWithId = deleteRecipe.bind(null, id);

  return (
    <form action={deleteRecipeWithId}>
      <Button type="submit" color="failure" className="w-full">
        Delete Recipe
      </Button>
    </form>
  );
}
