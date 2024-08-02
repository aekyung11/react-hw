import { useState } from "react";
import "@/App.css";
import { Button } from "@/components/Button.tsx";
import { CategoryList } from "@/components/CategoryList.tsx";
import { categories } from "@/data/categories.ts";

function App() {
  const [selectedCategories, setSelectedCategories] = useState<
    Record<string, boolean>
  >({});

  return (
    <div
      id="app"
      className="p-[0.62rem] xs:p-[0.868rem] sm:p-[1.116rem] min-h-screen m-auto bg-background"
    >
      <header className="flex pt-3 xs:pt-[1.05rem] sm:pt-[1.35rem]">
        <a href="javascript:history.back()">
          <img
            className="mx-2 mb-2 h-5 xs:h-[1.75rem] xs:w-[1.75rem] sm:h-[2.25rem] sm:w-[2.25rem]"
            src="/icon/direction-left.svg"
            alt="이전 페이지로 돌아가기"
          />
        </a>
        <span className="relative inline-block w-full border-b-[0.03125rem] border-contentSecondary">
          <img
            src="/icon/search.svg"
            alt="분야로 검색하기"
            className="pointer-events-none absolute left-1 top-[0.0625rem] h-[1.125rem] w-[1.125rem] xs:h-[1.575rem] xs:w-[1.575rem] sm:h-[2.025rem] sm:w-[2.025rem]"
          />
          <label htmlFor="search" className="sr-only">
            분야 검색하기
          </label>
          <input
            type="text"
            placeholder="분야 (이름)로 검색 ( ex. 프론트)"
            id="search"
            className="text-base-group w-full pl-[1.625rem] placeholder:text-base xs:h-[1.575rem] xs:pl-[2.275rem] xs:placeholder:text-lg sm:h-[2.025rem] sm:pl-[2.925rem] sm:placeholder:text-xl"
          />
        </span>
      </header>

      <main className="mb-[1.12rem] flex-grow xs:mb-[1.568rem] sm:mb-[2.016rem]">
        <h1 className="text-base-group mt-4 font-semibold text-primary xs:mt-[1.568rem] sm:mt-[1.8rem]">
          관심분야를 선택해주세요!
        </h1>
        <CategoryList
          categories={categories}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
      </main>
      <Button
        disabled={Object.keys(selectedCategories).length < 1}
        onClick={() =>
          alert(
            `당신이 선택한 카테고리는 ${Object.keys(selectedCategories).join(
              ", "
            )} 입니다.`
          )
        }
      >
        이대로 저장할래요
      </Button>
    </div>
  );
}

export default App;
