import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/Button";
import { CategoryList } from "./components/CategoryList";

const categories = [
  {
    group: "프로그래밍",
    name: "프론트엔드",
    key: "front-end",
  },
  {
    group: "프로그래밍",
    name: "백엔드",
    key: "back-end",
  },
  { group: "프로그래밍", name: "리액트", key: "react" },
  {
    group: "프로그래밍",
    name: "풀스택",
    key: "full-stack",
  },
  {
    group: "프로그래밍",
    name: "알고리즘",
    key: "algorithms",
  },
  {
    group: "프로그래밍",
    name: "기초지식",
    key: "basics",
  },
  { group: "디자인", name: "UI디자인", key: "ui" },
  { group: "디자인", name: "UX디자인", key: "ux" },
  { group: "디자인", name: "UI • UX", key: "ui-ux" },
  {
    group: "데이터",
    name: "데이터분석",
    key: "data-analytics",
  },
  {
    group: "데이터",
    name: "통계분석",
    key: "statistics",
  },
  {
    group: "데이터",
    name: "시각화",
    key: "visualization",
  },
];

function App() {
  const [selectedCategories, setSelectedCategories] = useState({});

  return (
    <html lang="ko">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Enter EUID | 관심분야</title>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <link rel="stylesheet" href="/styles/tailwind.css" />
        <script type="module" src="/pages/category/category.js"></script>
      </head>
      <body>
        <div
          id="app"
          className="px-[0.62rem] xs:px-[0.868rem] sm:px-[1.116rem]"
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
                `당신이 선택한 카테고리는 ${Object.keys(
                  selectedCategories
                ).join(", ")} 입니다.`
              )
            }
          >
            이대로 저장할래요
          </Button>
        </div>
      </body>
    </html>
  );
}

export default App;
