import Recipes from "./recipes/page";
import { Header } from "./ui/recipes/header";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col">
			<Header></Header>
			<Recipes></Recipes>
		</main>
	);
}
