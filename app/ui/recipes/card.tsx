export function Card() {
  return (
    <div className="block bg-white p-3 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white border-b-2">
      <div className="flex justify-between">
        <div id="header" className="flex flex-col gap-1 pb-1">
          <h5 className="text-lg">Recipe Name</h5>
          <p className="text-gray-400 text-xs">
            Calories: 425 | Protein: 35g | Carbs: 45g | Fat: 25g
          </p>
        </div>
        <button>Expand</button>
      </div>
    </div>
  );
}
