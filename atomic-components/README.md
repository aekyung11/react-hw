# Atomic Component

## Figma

- 바닐라 프로젝트 중 선택한 시안
  **Enter EUID(엔터이듬)** 中 category 페이지<br><br>
- **Figma 시안** 바로가기(버튼 클릭)<br>[![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/design/tz3rClA9x8FMncf6oFMkpE/atomic-components?node-id=1-170&t=aYvC7zVs4ele371M-1)<br><br>

## Code

### Step 1. React, Vite, TailwindCSS 셋업

- React, Vite → [Creating React App using Vite and PNPM](https://medium.com/@sahu.jyotirmaya26/creating-react-app-using-vite-and-pnpm-746bb0f9a0c2)
- TailwindCSS → [Install Tailwind CSS with Vite](https://tailwindcss.com/docs/guides/vite)
  <br><br>

### Step 2. Coding13-euid 에서 마크업 가져오기

- tailwind.config.js에서 기존 coding13-euid에서 사용한 설정을 가져옴
- App.jsx에 셋업 시 생성되는 기존 코드를 지우고, coding13-euid의 category.html을 가져옴
- index.css에 있는 기존 코드를 삭제 후, coding13-euid의 tailwind.css 코드를 가져옴
  <br><br>

### Step 3. Category, Button components 만들기

- 기존 코드에서는 category 페이지에 열두개의 `<button>`을 사용함. 이 버튼은 동일한 버튼으로 재사용이 가능하기에 컴포넌트로 만들고자 했음. 또한 맨 아래 있는 '이대로 저장할래요' 버튼 또한 여러 페이지에서 재사용 될 것을 생각하고 그 또한 컴포넌트로 만들기로 결정함<br><br>
- **Button.jsx**

  ```jsx
  import React from "react";

  export function Button({ children, ...props }) {
    return (
      <button
        className="text-base-group flex h-9 w-full items-center justify-center whitespace-nowrap rounded-lg bg-primary text-center font-bold text-white xs:h-[3.15rem] sm:h-[4.05rem] disabled:bg-[#A7A7A7] disabled:text-contentPrimary"
        {...props}
      >
        {children}
      </button>
    );
  }
  ```

  <br>

- **Category.jsx**

  ```jsx
  import React from "react";

  export function Category({ categoryGroup, categoryName, checked, onClick }) {
    return (
      <button
        type="button"
        className={`my-2 flex h-[3.8125rem] items-center justify-between rounded-lg ${
          checked
            ? "bg-primary text-background"
            : "bg-[#A7A7A7] text-contentPrimary"
        } p-3 xs:my-[0.7rem] xs:h-[5.3375rem] xs:p-[1.05rem] sm:my-[0.45rem] sm:h-[6.8625rem] sm:p-[1.35rem]`}
        onClick={onClick}
      >
        <span className="category flex flex-col items-start xs:gap-2 sm:gap-3">
          <span className="text-[0.65644rem] xs:text-[0.919016rem] sm:text-[1.181592rem]">
            {categoryGroup}
          </span>
          <span className="text-base-group">{categoryName}</span>
        </span>
        <img
          src={`/icon/${checked ? "check.svg" : "category-plus.svg"}`}
          className="h-[1.125rem] w-[1.125rem] xs:h-[1.575rem] xs:w-[1.575rem] sm:h-[2.025rem] sm:w-[2.025rem]"
          alt={checked ? "선택됨" : "선택되지 않음"}
        />
      </button>
    );
  }
  ```

  <br>

- **App.jsx**에서 위의 두 컴포넌트는 다음과 같은 과정을 이용해 import했다.

  - 12개의 categories를 group, name, key를 갖도록 정의했다.

    ```jsx
    import { Button } from "./components/Button";
    import { Category } from "./components/Category";

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
    ```

    <br>

  - category 버튼은 다음과 같이 `map()`을 사용해 구현했다.
    ```jsx
    {
      categories.map(({ group, name, key }) => {
        return (
          <Category
            categoryGroup={group}
            categoryName={name}
            checked={selectedCategories[key] ?? false}
            key={key}
            onClick={() => {
              if (selectedCategories[key]) {
                const newValue = {
                  ...selectedCategories,
                };
                delete newValue[key];
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
      });
    }
    ```
    <br>
  - Button의 경우 기존 `<a>`태그로 되어있던 부분을 컴포넌트를 만들면서 `<button>`으로 대체했다.
    ```jsx
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
    ```

### Step 4. CategoryList component 만들기

다 컴포넌트로 구현하고 나니, Category 또한 아토믹 디자인 관점에서 보면 ComponentList를 만들어야 한다는 것을 떠올렸다.<br><br>

- CategoryList.jsx에 기존 App.jsx에 있던 Category를 map하는 부분을 옮겨왔다.

  - **CategoryList.jsx**

    ```jsx
    import React from "react";
    import { Category } from "./Category";

    export function CategoryList({
      categories,
      selectedCategories,
      setSelectedCategories,
    }) {
      return (
        <div className="mb-1 grid grid-cols-2 gap-x-2 whitespace-nowrap font-semibold leading-[150%] xs:mb-[1.4rem] sm:mb-[1.8rem] sm:gap-x-3 md:gap-x-5">
          {categories.map(({ group, name, key }) => {
            return (
              <Category
                categoryGroup={group}
                categoryName={name}
                checked={selectedCategories[key] ?? false}
                key={key}
                onClick={() => {
                  if (selectedCategories[key]) {
                    const newValue = {
                      ...selectedCategories,
                    };
                    delete newValue[key];
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
    ```

    <br>

- App.jsx는 아래와 같이 CategoryList를 마크업했다.
  - **App.jsx**
    ```jsx
    <CategoryList
      categories={categories}
      selectedCategories={selectedCategories}
      setSelectedCategories={setSelectedCategories}
    />
    ```
