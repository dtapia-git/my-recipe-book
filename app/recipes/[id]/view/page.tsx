import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";
import { HiOutlineArrowLeft } from "react-icons/hi";

export default async function RecipeDetails(props: {
	params: Promise<{ id: string }>;
}) {
	const params = await props.params;

	return (
		<div className="min-w-10 max-w-lg mx-auto">
			<div className="grid grid-cols-3 items-center py-2 px-2">
				<div className="justify-self-start">
					<Link href={"/"}>
						<HiOutlineArrowLeft className="h-3 w-3" />
					</Link>
				</div>

				<h1 className="justify-self-center text-black">Recipe</h1>

				<Link href={"edit"} className="justify-self-end">
					<FaRegEdit className="h-5 w-5 text-gray-600" />
				</Link>
			</div>
		</div>
	);
}
