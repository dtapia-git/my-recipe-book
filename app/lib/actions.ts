"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteRecipe(id: string) {
  //   throw new Error("Failed to Delete Recipe");

  try {
    await sql`DELETE FROM recipes WHERE id = ${id}`;
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Recipe.",
    };
  }

  revalidatePath("/");
  redirect("/");
}
