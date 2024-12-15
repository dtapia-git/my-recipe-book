import { db } from '@vercel/postgres';
import { recipes } from '../lib/placeholder-data';

const client = await db.connect();

async function seedRecipes() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS recipes (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      calories INT NOT NULL,
      protein INT NOT NULL,
      carbohydrates INT NOT NULL,
      fat INT NOT NULL,
      ingredients text ARRAY,
      directions text ARRAY
    );
  `;

  const insertedRecipes = await Promise.all(
    recipes.map(async (recipe) => {
      return client.sql`
        INSERT INTO recipes (id, name, calories, protein, carbohydrates, fat)
        VALUES (${recipe.id}, ${recipe.name}, ${recipe.calories}, ${recipe.protein}, ${recipe.carbohydrates}, ${recipe.fat})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedRecipes;
}

export async function GET() {
    try {
      console.log('Seeding DB')
      await client.sql`BEGIN`;
      await seedRecipes();
      await client.sql`COMMIT`;
  
      return Response.json({ message: 'Database seeded successfully' });
    } catch (error) {
      console.log('Seeding DB FAILED')
      await client.sql`ROLLBACK`;
      return Response.json({ error }, { status: 500 });
    }
  }