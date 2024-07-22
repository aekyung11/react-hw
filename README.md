# react-hw

techit 프론트엔드 스쿨 10기 React 과제 저장소<br><br>

## 과제 01. auto-layout 개발 핸드오프

**Figma 시안** 바로가기(버튼 클릭)<br><br>
[![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)](<https://www.figma.com/design/5xqwcpAdXVyJgEbarggDLO/%EB%94%94%EC%9E%90%EC%9D%B8-%E2%86%92-%EA%B0%9C%EB%B0%9C-%ED%95%B8%EB%93%9C%EC%98%A4%ED%94%84-(Copy)?node-id=0-1&t=4aoAmNBP86iVb3qy-1>)<br>

### Step 1. Figma 시안대로 마크업 및 스타일링

<details>
<summary>결과물 보기</summary>

<img width="1031" alt="스크린샷 2024-07-23 오전 3 29 40" src="https://github.com/user-attachments/assets/61dde1a5-ee42-4b15-954a-9bf576e4c572">
</details>

<br>

#### 주요 코드

- **HTML**
  ```html
  <body>
    <h1 class="sr-only">디자인 → 개발 핸드오프</h1>
    <ul id="box-group">
      <li class="box">
        <img
          aria-hidden="true"
          src="./src/history-of-architecture.png"
          alt="History of Architecture thumbnail"
          class="thumbnail"
        />
        <span class="text">History of Architecture</span>
      </li>
      ...
    </ul>
  </body>
  ```
  - 각각의 박스를 list item으로 보고, 박스들을 `<ul>` 태그를 사용해 묶어 시멘틱한 코드를 작성했다.
  - 페이지에는 `<h1>`태그를 이용하여 스크린리더만 읽을 수 있는 제목을 작성했다.
  - 각 `<li>`의 경우 이미 `<span>`에서 정보를 얻을 수 있기 때문에 별도의 `aria-label`은 작성하지 않았다.
  - 각 `<li>` 안의 `<img>` 역시 `<span>`에서 내용을 설명하기 때문에 별도의 추가 설명이 필요 없을 것이라 판단해 `aria-hidden` 속성을 `true`로 주어 스크린리더가 불필요하게 읽지 않을 수 있도록 마크업했다.<br><br><br>
- **CSS**

  ```css
  /* style.css */
  @import url(/style/reset.css);
  @import url(/style/theme.css);
  @import url(/style/base.css);
  @import url(/style/sr-only.css);
  @import url(/style/auto-layout.css);
  ```

  ```css
    /* auto-layout.css */
    body {
      background-color: var(--auto-bg);
      color: var(--auto-text);
    }

    #box-group {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      width: fit-content;
      gap: 0.25rem;

      margin: 10rem auto;
    }
    ...
  ```

  - `style.css`에서는 다른 css를 import해 쓰는 방식으로 코드를 조금 더 깔끔하게 분리했다.
  - `auto-layout.css` 에서는 `px`를 사용하는 대신 모두 `rem`으로 작성했으며, 색상 역시 `theme.css`에 몇가지 색상을 등록해두고 `var`을 이용해 사용함으로써 유지보수가 더 용이하도록 작성했다.<br><br><br>

### Step 2. 각 `<li>`에 키보드로 접근 가능하도록 설정

각 `<li>`에 대해 키보드 방향키 ⬇️, ⬆️로 순서를 바꾸는 것을 가능하도록 하기 위해서는 우선 `tabindex="0"`을 속성을 주어야 한다.

이 과정에서 드래그가 가능하도록 `<li>`에 `draggable="true"`도 함께 주었다.
이에 따른 코드는 다음과 같다.

```html
<li class="box" tabindex="0" draggable="true">
  <img
    aria-hidden="true"
    src="./src/history-of-architecture.png"
    alt="History of Architecture thumbnail"
    class="thumbnail"
  />
  <span class="text">History of Architecture</span>
</li>
...
```

<br><br><br>

### Step 3. drag and drop으로 `<li>`순서 변경하기

<details>
<summary>결과물 보기</summary>

![IMB_G6gNAk](https://github.com/user-attachments/assets/21ec7188-6dc1-4e41-9d7b-1f8365b82117)

</details>

<br>

#### 주요 코드

- **JavaScript**

  ```js
  const items = document.querySelectorAll("#box-group .box");
  items.forEach(function (item) {
    item.addEventListener("dragstart", handleDragStart);
    item.addEventListener("dragenter", handleDragEnter);
    item.addEventListener("dragover", handleDragOver);
    item.addEventListener("dragleave", handleDragLeave);
    item.addEventListener("drop", handleDrop);
    item.addEventListener("dragend", handleDragEnd);
  });
  ```

  - `#box-group` 안에 있는 `.box`에 대하여 drag 이벤트 발생 시 각각의 drag 이벤트와 관련한 function을 실행한다.
  - 해당 function들은 이 코드 윗부분에 정의한다.<br><br>

  ```js
  // dragstart

  function handleDragStart(e) {
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", this.innerHTML);
    this.classList.add("dragging");
  }
  ```

  - `dragSrcEl`를 활용해 현재 내가 선택한 `<li>`가 어떤 것인지 기억한다.
  - `dataTransfer`에 대한 정보는 아래 링크 참고.<br>[DataTransfer](https://developer.mozilla.org/ko/docs/Web/API/DataTransfer)
  - `this.classList.add("dragging")`으로 스타일링을 위한 클래스를 추가함<br><br>

  ```js
  // drop

  function handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    if (dragSrcEl !== this) {
      let items = Array.from(list.querySelectorAll(".box"));
      let dragSrcIndex = items.indexOf(dragSrcEl);
      let dropTargetIndex = items.indexOf(this);

      if (dragSrcIndex < dropTargetIndex) {
        this.parentNode.insertBefore(dragSrcEl, this.nextSibling);
      } else {
        this.parentNode.insertBefore(dragSrcEl, this);
      }
    }
    return false;
  }
  ```

  - 드래그된 요소를 드롭 타겟 요소의 앞이나 뒤에 삽입해서, `<li>`를 재정렬함.
    <br><br><br>

### Step 4. keyboard로 `<li>`순서 변경하기

<details>
<summary>결과물 보기</summary>

![IMB_dCkybu](https://github.com/user-attachments/assets/d8c0e325-f6ee-457d-ba3b-d9c53848556f)

</details>

<br>
