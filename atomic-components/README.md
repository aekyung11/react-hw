# Atomic Component

이 README.md는 기존의 atomic-components를 TypeScript로 수정한 뒤 재작성한 것으로, 기존의 README.md와는 내용 진행 순서가 다름.<br><br>

## Figma

- 바닐라 프로젝트 중 선택한 시안 **Enter EUID(엔터이듬)** 中 category 페이지<br>
- **Figma 시안** 바로가기(버튼 클릭)<br>[![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/design/tz3rClA9x8FMncf6oFMkpE/atomic-components?node-id=1-170&t=aYvC7zVs4ele371M-1)<br><br>

## Code

### Step 0. 기존 jsx 파일을 tsx로 변경(24.08.02)

[변경 기록 보기](https://github.com/aekyung11/react-hw/compare/169d62eb428c61af2dc6b9675b58dfe38e943439..6e42aabb74f361388775a65f9a59221d89a9b41a)
<br><br>

### Step 1. React, Vite, TailwindCSS 셋업

- React, Vite → [Creating React App using Vite and PNPM](https://medium.com/@sahu.jyotirmaya26/creating-react-app-using-vite-and-pnpm-746bb0f9a0c2)<br>
- TailwindCSS → [Install Tailwind CSS with Vite](https://tailwindcss.com/docs/guides/vite)
  <br><br>

### Step 2. Coding13-euid 에서 마크업 가져오기

- tailwind.config.js에서 기존 coding13-euid에서 사용한 설정을 가져옴<br>
- App.jsx에 셋업 시 생성되는 기존 코드를 지우고, coding13-euid의 category.html을 가져옴<br>
- index.css에 있는 기존 코드를 삭제 후, coding13-euid의 tailwind.css 코드를 가져옴
  <br><br>

### Step 3. Category, CategoryList 수정

- 기존 코드에서는 category 페이지에 열두개의 `<button>`을 사용함. 이 버튼은 동일한 버튼으로 재사용이 가능하기에 컴포넌트로 만들고자 했음.<br>
- Category.jsx 파일을 CategoryButton.tsx로 확장자와 이름을 변경함.<br>
- jsx을 tsx파일로 변경하면서 type을 지정함. 아래는 변경된 코드이다.<br><br>
  **Category.jsx** (기존)

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

  **⬇️**<br>
  **CategoryButton.tsx** (변경 후. 파일 이름도 직관적으로 변경했다.)

  ```tsx
  import React from "react";

  type CategoryButtonProps = {
    categoryGroup: string;
    categoryName: string;
    checked: boolean;
    onClick: React.ComponentPropsWithoutRef<"button">["onClick"];
  };

  export function CategoryButton({
    categoryGroup,
    categoryName,
    checked,
    onClick,
  }: CategoryButtonProps) {
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
        /* 이 부분은 기존 Category.jsx 파일과 동일함 */
      </button>
    );
  }
  ```

  <br>

  - **난관 및 극복과정**<br>
    &nbsp;&nbsp;별도의 어려운 부분은 없었다. `CategoryButtonProps`를 통해 타입을 지정했다. `categoryGroup`, `categoryName`, `checked` 은 타입이 명확하고 직관적이라 그대로 입력해주었고, `onClick` 같은 경우는 function인데, 타입을 지정하는 여러 방법 중, `React.HTMLProps<HTMLButtonElement>["onClick"]`를 사용했으나, 이후 Button.jsx 파일을 Button.tsx로 변경하는 과정 중에 오류를 발견하게 되면서 최종적으로는 조금 더 사용성이 증가한 `React.ComponentPropsWithoutRef<"button">["onClick"]`로 변경해 타입을 지정했다.
    <br><br>

  **CategoryList.jsx** (기존)

  ```tsx
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

  **⬇️**<br>
  **CategoryList.jsx** (변경 후)

  ```tsx
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
            /* 이 부분은 기존 CategoryList.jsx 파일과 동일함 */
            />
          );
        })}
      </div>
    );
  }
  ```

  <br>

  - **난관 및 극복과정**<br>
    &nbsp;&nbsp;가장 눈에 띄게 달라진 부분은 `import { type Categories } from "@/data/categories.ts";`일 것이다. 기존에 App.jsx에 있던 `categories`에 대한 내용을 src폴더 안에 data폴더를 새로 만들어 categories.ts에 12개의 카테고리들을 정리해 두었다. 해당 파일은 다음과 같다.<br>
    **categories.ts**

    ```ts
    export type Category = {
      group: string;
      name: string;
      key: string;
    };

    export type Categories = Category[];

    export const categories: Categories = [
      {
        group: "프로그래밍",
        name: "프론트엔드",
        key: "front-end",
      },
      ...생략,
    ];
    ```

    &nbsp;&nbsp;이 중에 `type Categories`를 가져왔기 때문에 `CategoryListProps`의 `categories`에 쉽게 타입을 지정할 수 있었다.<br>
    &nbsp;&nbsp;`selectedCategories`의 경우 key가 선택한 카테고리 이름이고, value가 true 또는 false인 것을 알았으나, 고정된 key가 아닌, 선택하는 것에 따라 생겨났다가 사라졌다가 하는 key였기 때문에 `Record<string, boolean>`를 타입으로 전달했고, `setSelectedCategories`의 경우,<br>
    **App.tsx**를

    ```tsx
    const [selectedCategories, setSelectedCategories] = useState<
      Record<string, boolean>
    >({});
    ```

    위와 같이 수정한 뒤, `useState`에 hover했을 때 나타나는 tooltip에 적힌 타입을 복사해 `React.Dispatch<React.SetStateAction<Record<string, boolean>>>`로 정의했다.
    <br><br>

### Step 4. Button 수정

- 맨 아래 있는 '이대로 저장할래요' 버튼 또한 여러 페이지에서 재사용 될 것을 생각하고 그 또한 컴포넌트로 만들기로 결정<br>
- 기존 jsx 파일을 tsx로 변환했다. 코드는 다음과 같다.<br><br>
  **Button.jsx** (기존)

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

  **⬇️**<br>
  **Button.tsx** (변경 후)

  ```tsx
  export type ButtonProps = React.ComponentPropsWithoutRef<"button">;

  export function Button({ children, ...props }: ButtonProps) {
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

  - **난관 및 극복과정**<br>
    &nbsp;&nbsp;`ButtonProps`에서 `children`과 `...props`를 모두 만족할 수 있는 타입을 찾는 과정이 순탄치 않았다. 이 버튼의 경우 사용성을 가장 중점에 둔 버튼으로, `button`의 여러 attribute를 모두 지원하는 것을 우선으로 두었다.<br>
    &nbsp;&nbsp;해당 디자인에서는 `disabled`와 `onClick`만을 사용했지만, 만약 그 두 attributes에 대해서만 별도로 타입을 지정할 경우, 다른 사용자나 다른 페이지에서 사용 시, 이를테면 `type`과 같은 다른 attribute를 필요로 할 때마다 파일에 해당 attribute에 대한 타입을 추가해야하는 번거로움이 발생한다.<br>
    &nbsp;&nbsp;처음에는 `ButtonProps`에 `React.HTMLProps<HTMLButtonElement>`를 주었으나, 곧바로 그럴 경우 앞에 언급한 사용성이 해결되지 않는 문제를 인지 후 `React.ComponentPropsWithoutRef<"button">`을 사용함으로써 이 문제를 해결했다. 이 부분은 [링크](https://blog.bitsrc.io/react-with-typescript-cheatsheet-9dd891dc5bfe#c9ad)를 참고했다.
    <br><br>

### Step 5. index.html 및 기타 수정

지난 atomic-component 과제에 대해, `<noscript>`를 사용해 최소한의 접근성을 준수할 것, public에 있는 icon들이 push 되지 않음, title을 한글로 변경할 것이라는 피드백을 받아 그 점을 개선했다.<br>

- icon들이 push 되지 않은 이슈에 대해서는 내가 기존에 사용한 .gitignore 파일에 icon이 포함되었다는 것을 발견한 후 그 부분을 수정해 해결했고, push가 되는 것까지 확인했다.<br>
- index.html을 다음과 같이 수정했다.<br><br>
  **index.html** (기존)

  ```html
  <!DOCTYPE html>
  <html lang="ko">
    <head>
      <meta charset="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Atomic Components</title>
    </head>
    <body>
      <div id="root"></div>
      <script type="module" src="/src/main.jsx"></script>
    </body>
  </html>
  ```

  **⬇️**<br>
  **index.html** (변경 후)

  ```html
  <!DOCTYPE html>
  <html lang="ko">
    <head>
      <meta charset="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>아토믹 컴포넌트</title>
    </head>
    <body>
      <noscript>이 앱을 사용하려면 JavaScript 활성화가 필요합니다.</noscript>
      <div id="root"></div>
      <script type="module" src="/src/main.tsx"></script>
    </body>
  </html>
  ```
