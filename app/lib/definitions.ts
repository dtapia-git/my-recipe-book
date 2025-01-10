export type Recipe = {
	id: string;
	name: string;
	calories: number;
	protein: number;
	carbohydrates: number;
	fat: number;
	ingredients: string[];
	directions: string[];
};

export type ListItem = {
	id: string;
	value: string;
};
