"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteRecipe(id: string) {
  await sql`DELETE FROM recipes WHERE id = ${id}`;

  revalidatePath("/");
  redirect("/");
}
