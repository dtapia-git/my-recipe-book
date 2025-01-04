"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const FormSchema = z.object({
	id: z.string(),
	recipeName: z.string().nonempty({ message: "Please enter a recipe name" }),
	calories: z.coerce.number().optional(),
	protein: z.coerce.number().optional(),
	fat: z.coerce.number().optional(),
	ingredients: z.array(z.string()),
	directions: z.array(z.string()),
});

const UpdateRecipe = FormSchema.omit({ id: true });

export type FormState = {
	errors?: {
		recipeName?: string[];
	};
	message?: string | null;
};

export async function updateRecipe(
	id: string,
	currentState: FormState,
	formData: FormData,
) {
	const validatedFields = UpdateRecipe.safeParse({
		recipeName: formData.get("recipeName"),
		ingredients: formData.getAll("ingredient"),
		directions: formData.getAll("direction"),
	});

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			message: "Missing Fields. Failed to update recipe.",
		};
	}

	const { recipeName, ingredients, directions } = validatedFields.data;
	const ingredientsSql = `{${ingredients}}`;
	const directionSql = `{${directions}}`;

	try {
		await sql`
		UPDATE recipes
		SET id = ${id}, name = ${recipeName}, ingredients = ${ingredientsSql}, directions = ${directionSql}
		WHERE id = ${id}`;
	} catch (error) {
		return { message: "Database Error: Failed to update recipe." };
	}

	revalidatePath(`/recipes/${id}/view`);
	redirect(`/recipes/${id}/view`);
}

export async function deleteRecipe(id: string) {
	await sql`DELETE FROM recipes WHERE id = ${id}`;

	revalidatePath("/");
	redirect("/");
}
