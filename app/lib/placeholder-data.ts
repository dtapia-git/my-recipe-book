import { Recipe } from "./definitions";

const recipes: Recipe[] = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: "Burgers",
    calories: 650,
    protein: 30,
    carbohydrates: 40,
    fat: 20,
    ingredients: ['1lb ground beef', 'pickles', 'buns'],
    directions: ['cook beef patties', 'toast buns', 'assemble']
  },
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: "Spaghetti",
    calories: 800,
    protein: 30,
    carbohydrates: 45,
    fat: 15,
    ingredients: ['1lb ground beef', 'pickles', 'buns'],
    directions: ['cook beef patties', 'toast buns', 'assemble']
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: "Enchilads",
    calories: 960,
    protein: 27,
    carbohydrates: 45,
    fat: 25,
    ingredients: ['1lb ground beef', 'pickles', 'buns'],
    directions: ['cook beef patties', 'toast buns', 'assemble']
  },
];

export { recipes };
