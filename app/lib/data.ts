import { sql } from "@vercel/postgres";
import type { Recipe } from "./definitions";

export async function fetchRecipes() {
  try {
    const data = await sql<Recipe>`
      SELECT
        *
      FROM recipes
      ORDER BY name ASC
    `;

    return data.rows;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch all recipes.");
  }
}

export async function fetchRecipe(id: string) {
  try {
    const data = await sql<Recipe>`
      SELECT
        *
      FROM recipes
      WHERE recipes.id = ${id}
    `;

    return data.rows[0];
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch all recipes.");
  }
}
