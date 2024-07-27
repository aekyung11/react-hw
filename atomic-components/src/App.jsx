import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
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
              <label for="search" className="sr-only">
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
            <div className="mb-1 grid grid-cols-2 gap-x-2 whitespace-nowrap font-semibold leading-[150%] xs:mb-[1.4rem] sm:mb-[1.8rem] sm:gap-x-3 md:gap-x-5">
              <button
                type="button"
                className="category-button my-2 flex h-[3.8125rem] items-center justify-between rounded-lg bg-[#A7A7A7] p-3 xs:my-[0.7rem] xs:h-[5.3375rem] xs:p-[1.05rem] sm:my-[0.45rem] sm:h-[6.8625rem] sm:p-[1.35rem]"
                data-category="front-end"
              >
                <span className="category flex flex-col items-start xs:gap-2 sm:gap-3">
                  <span className="text-[0.65644rem] xs:text-[0.919016rem] sm:text-[1.181592rem]">
                    프로그래밍
                  </span>
                  <span className="text-base-group category-detail">
                    프론트엔드
                  </span>
                </span>
                <img
                  src="/icon/category-plus.svg"
                  className="h-[1.125rem] w-[1.125rem] xs:h-[1.575rem] xs:w-[1.575rem] sm:h-[2.025rem] sm:w-[2.025rem]"
                  alt="선택되지 않음"
                />
              </button>

              <button
                type="button"
                className="category-button my-2 flex h-[3.8125rem] items-center justify-between rounded-lg bg-[#A7A7A7] p-3 xs:my-[0.7rem] xs:h-[5.3375rem] xs:p-[1.05rem] sm:my-[0.45rem] sm:h-[6.8625rem] sm:p-[1.35rem]"
                data-category="back-end"
              >
                <span className="category flex flex-col items-start xs:gap-2 sm:gap-3">
                  <span className="text-[0.65644rem] xs:text-[0.919016rem] sm:text-[1.181592rem]">
                    프로그래밍
                  </span>
                  <span className="text-base-group category-detail">
                    백엔드
                  </span>
                </span>
                <img
                  src="/icon/category-plus.svg"
                  className="h-[1.125rem] w-[1.125rem] xs:h-[1.575rem] xs:w-[1.575rem] sm:h-[2.025rem] sm:w-[2.025rem]"
                  alt="선택되지 않음"
                />
              </button>

              <button
                type="button"
                className="category-button my-2 flex h-[3.8125rem] items-center justify-between rounded-lg bg-[#A7A7A7] p-3 xs:my-[0.7rem] xs:h-[5.3375rem] xs:p-[1.05rem] sm:my-[0.45rem] sm:h-[6.8625rem] sm:p-[1.35rem]"
                data-category="react"
              >
                <span className="category flex flex-col items-start xs:gap-2 sm:gap-3">
                  <span className="text-[0.65644rem] xs:text-[0.919016rem] sm:text-[1.181592rem]">
                    프로그래밍
                  </span>
                  <span className="text-base-group category-detail">
                    리액트
                  </span>
                </span>
                <img
                  src="/icon/category-plus.svg"
                  className="h-[1.125rem] w-[1.125rem] xs:h-[1.575rem] xs:w-[1.575rem] sm:h-[2.025rem] sm:w-[2.025rem]"
                  alt="선택되지 않음"
                />
              </button>

              <button
                type="button"
                className="category-button my-2 flex h-[3.8125rem] items-center justify-between rounded-lg bg-[#A7A7A7] p-3 xs:my-[0.7rem] xs:h-[5.3375rem] xs:p-[1.05rem] sm:my-[0.45rem] sm:h-[6.8625rem] sm:p-[1.35rem]"
                data-category="full-stack"
              >
                <span className="category flex flex-col items-start xs:gap-2 sm:gap-3">
                  <span className="text-[0.65644rem] xs:text-[0.919016rem] sm:text-[1.181592rem]">
                    프로그래밍
                  </span>
                  <span className="text-base-group category-detail">
                    풀스택
                  </span>
                </span>
                <img
                  src="/icon/category-plus.svg"
                  className="h-[1.125rem] w-[1.125rem] xs:h-[1.575rem] xs:w-[1.575rem] sm:h-[2.025rem] sm:w-[2.025rem]"
                  alt="선택되지 않음"
                />
              </button>

              <button
                type="button"
                className="category-button my-2 flex h-[3.8125rem] items-center justify-between rounded-lg bg-[#A7A7A7] p-3 xs:my-[0.7rem] xs:h-[5.3375rem] xs:p-[1.05rem] sm:my-[0.45rem] sm:h-[6.8625rem] sm:p-[1.35rem]"
                data-category="algorithms"
              >
                <span className="category flex flex-col items-start xs:gap-2 sm:gap-3">
                  <span className="text-[0.65644rem] xs:text-[0.919016rem] sm:text-[1.181592rem]">
                    프로그래밍
                  </span>
                  <span className="text-base-group category-detail">
                    알고리즘
                  </span>
                </span>
                <img
                  src="/icon/category-plus.svg"
                  className="h-[1.125rem] w-[1.125rem] xs:h-[1.575rem] xs:w-[1.575rem] sm:h-[2.025rem] sm:w-[2.025rem]"
                  alt="선택되지 않음"
                />
              </button>

              <button
                type="button"
                className="category-button my-2 flex h-[3.8125rem] items-center justify-between rounded-lg bg-[#A7A7A7] p-3 xs:my-[0.7rem] xs:h-[5.3375rem] xs:p-[1.05rem] sm:my-[0.45rem] sm:h-[6.8625rem] sm:p-[1.35rem]"
                data-category="basics"
              >
                <span className="category flex flex-col items-start xs:gap-2 sm:gap-3">
                  <span className="text-[0.65644rem] xs:text-[0.919016rem] sm:text-[1.181592rem]">
                    프로그래밍
                  </span>
                  <span className="text-base-group category-detail">
                    기초지식
                  </span>
                </span>
                <img
                  src="/icon/category-plus.svg"
                  className="h-[1.125rem] w-[1.125rem] xs:h-[1.575rem] xs:w-[1.575rem] sm:h-[2.025rem] sm:w-[2.025rem]"
                  alt="선택되지 않음"
                />
              </button>

              <button
                type="button"
                className="category-button my-2 flex h-[3.8125rem] items-center justify-between rounded-lg bg-[#A7A7A7] p-3 xs:my-[0.7rem] xs:h-[5.3375rem] xs:p-[1.05rem] sm:my-[0.45rem] sm:h-[6.8625rem] sm:p-[1.35rem]"
                data-category="ui"
              >
                <span className="category flex flex-col items-start xs:gap-2 sm:gap-3">
                  <span className="text-[0.65644rem] xs:text-[0.919016rem] sm:text-[1.181592rem]">
                    디자인
                  </span>
                  <span className="text-base-group category-detail">
                    UI디자인
                  </span>
                </span>
                <img
                  src="/icon/category-plus.svg"
                  className="h-[1.125rem] w-[1.125rem] xs:h-[1.575rem] xs:w-[1.575rem] sm:h-[2.025rem] sm:w-[2.025rem]"
                  alt="선택되지 않음"
                />
              </button>

              <button
                type="button"
                className="category-button my-2 flex h-[3.8125rem] items-center justify-between rounded-lg bg-[#A7A7A7] p-3 xs:my-[0.7rem] xs:h-[5.3375rem] xs:p-[1.05rem] sm:my-[0.45rem] sm:h-[6.8625rem] sm:p-[1.35rem]"
                data-category="ux"
              >
                <span className="category flex flex-col items-start xs:gap-2 sm:gap-3">
                  <span className="text-[0.65644rem] xs:text-[0.919016rem] sm:text-[1.181592rem]">
                    디자인
                  </span>
                  <span className="text-base-group category-detail">
                    UX디자인
                  </span>
                </span>
                <img
                  src="/icon/category-plus.svg"
                  className="h-[1.125rem] w-[1.125rem] xs:h-[1.575rem] xs:w-[1.575rem] sm:h-[2.025rem] sm:w-[2.025rem]"
                  alt="선택되지 않음"
                />
              </button>

              <button
                type="button"
                className="category-button my-2 flex h-[3.8125rem] items-center justify-between rounded-lg bg-[#A7A7A7] p-3 xs:my-[0.7rem] xs:h-[5.3375rem] xs:p-[1.05rem] sm:my-[0.45rem] sm:h-[6.8625rem] sm:p-[1.35rem]"
                data-category="ui-ux"
              >
                <span className="category flex flex-col items-start xs:gap-2 sm:gap-3">
                  <span className="text-[0.65644rem] xs:text-[0.919016rem] sm:text-[1.181592rem]">
                    디자인
                  </span>
                  <span className="text-base-group category-detail">
                    UI • UX
                  </span>
                </span>
                <img
                  src="/icon/category-plus.svg"
                  className="h-[1.125rem] w-[1.125rem] xs:h-[1.575rem] xs:w-[1.575rem] sm:h-[2.025rem] sm:w-[2.025rem]"
                  alt="선택되지 않음"
                />
              </button>

              <button
                type="button"
                className="category-button my-2 flex h-[3.8125rem] items-center justify-between rounded-lg bg-[#A7A7A7] p-3 xs:my-[0.7rem] xs:h-[5.3375rem] xs:p-[1.05rem] sm:my-[0.45rem] sm:h-[6.8625rem] sm:p-[1.35rem]"
                data-category="data-analytics"
              >
                <span className="category flex flex-col items-start xs:gap-2 sm:gap-3">
                  <span className="text-[0.65644rem] xs:text-[0.919016rem] sm:text-[1.181592rem]">
                    데이터
                  </span>
                  <span className="text-base-group category-detail">
                    데이터분석
                  </span>
                </span>
                <img
                  src="/icon/category-plus.svg"
                  className="h-[1.125rem] w-[1.125rem] xs:h-[1.575rem] xs:w-[1.575rem] sm:h-[2.025rem] sm:w-[2.025rem]"
                  alt="선택되지 않음"
                />
              </button>

              <button
                type="button"
                className="category-button my-2 flex h-[3.8125rem] items-center justify-between rounded-lg bg-[#A7A7A7] p-3 xs:my-[0.7rem] xs:h-[5.3375rem] xs:p-[1.05rem] sm:my-[0.45rem] sm:h-[6.8625rem] sm:p-[1.35rem]"
                data-category="statistics"
              >
                <span className="category flex flex-col items-start xs:gap-2 sm:gap-3">
                  <span className="text-[0.65644rem] xs:text-[0.919016rem] sm:text-[1.181592rem]">
                    데이터
                  </span>
                  <span className="text-base-group category-detail">
                    통계분석
                  </span>
                </span>
                <img
                  src="/icon/category-plus.svg"
                  className="h-[1.125rem] w-[1.125rem] xs:h-[1.575rem] xs:w-[1.575rem] sm:h-[2.025rem] sm:w-[2.025rem]"
                  alt="선택되지 않음"
                />
              </button>

              <button
                type="button"
                className="category-button my-2 flex h-[3.8125rem] items-center justify-between rounded-lg bg-[#A7A7A7] p-3 xs:my-[0.7rem] xs:h-[5.3375rem] xs:p-[1.05rem] sm:my-[0.45rem] sm:h-[6.8625rem] sm:p-[1.35rem]"
                data-category="visualization"
              >
                <span className="category flex flex-col items-start xs:gap-2 sm:gap-3">
                  <span className="text-[0.65644rem] xs:text-[0.919016rem] sm:text-[1.181592rem]">
                    데이터
                  </span>
                  <span className="text-base-group category-detail">
                    시각화
                  </span>
                </span>
                <img
                  src="/icon/category-plus.svg"
                  className="h-[1.125rem] w-[1.125rem] xs:h-[1.575rem] xs:w-[1.575rem] sm:h-[2.025rem] sm:w-[2.025rem]"
                  alt="선택되지 않음"
                />
              </button>
            </div>
          </main>

          <a
            className="save-button text-base-group flex h-9 w-full items-center justify-center whitespace-nowrap rounded-lg bg-primary text-center font-bold text-white xs:h-[3.15rem] sm:h-[4.05rem]"
            href="/pages/signup/index.html"
          >
            이대로 저장할래요
          </a>
        </div>
      </body>
    </html>
  );
}

export default App;
