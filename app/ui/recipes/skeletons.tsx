const shimmer =
	"before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function CardSkeleton() {
	return (
		<div>
			<div className="flex flex-col gap-3 justify-center h-20 border-b">
				<div className="grid grid-cols-3">
					<div className="h-2 bg-slate-200 rounded col-span-1" />
				</div>
				<div className="h-2 bg-slate-200 rounded" />
			</div>

			<div className="flex flex-col justify-center h-16 border-b">
				<div className="h-2 bg-slate-200 rounded" />
			</div>

			<div className="flex flex-col justify-center h-16 border-b">
				<div className="h-2 bg-slate-200 rounded" />
			</div>
		</div>
	);
}
