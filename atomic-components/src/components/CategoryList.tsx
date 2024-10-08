import { CategoryButton } from "@/components/CategoryButton.tsx";
import { type Categories } from "@/data/categories.ts";

type CategoryListProps = {
  categories: Categories;
  selectedCategories: Record<string, boolean>;
  setSelectedCategories: React.Dispatch<
    React.SetStateAction<Record<string, boolean>>
  >;
};
export function CategoryList({
  categories,
  selectedCategories,
  setSelectedCategories,
}: CategoryListProps) {
  return (
    <div className="mb-1 grid grid-cols-2 gap-x-2 whitespace-nowrap font-semibold leading-[150%] xs:mb-[1.4rem] sm:mb-[1.8rem] sm:gap-x-3 md:gap-x-5">
      {categories.map(({ group, name, key }) => {
        return (
          <CategoryButton
            categoryGroup={group}
            categoryName={name}
            checked={selectedCategories[key] ?? false}
            key={key}
            onClick={() => {
              if (selectedCategories[key]) {
                const { [key]: unusedValue, ...newValue } = {
                  ...selectedCategories,
                };
                setSelectedCategories(newValue);
              } else {
                if (Object.keys(selectedCategories).length === 5) {
                  alert("최대 다섯 개만 선택하실 수 있습니다.");
                  return;
                }
                setSelectedCategories({
                  ...selectedCategories,
                  [key]: true,
                });
              }
            }}
          />
        );
      })}
    </div>
  );
}
