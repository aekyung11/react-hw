# Tic-Tac-Toe

아직 완성되지 않은 상태이다.<br><br>지난 주 정규 수업을 병결 등, 컨디션 난조로 인해 거의 제대로 듣지 못했기에, 이번 과제는 보다 발전된 버전을 만드는 것보다는, 수업시간에 배웠을 부분을 온전히 이해하는 것을 개인적인 목표로 삼았다.<br>따라서, 바로 선생님의 코드를 보며 다시 타이핑을 해보는 대신, 우선 공식 문서를 보며 제일 기본적인 버전을 이해하고 만든 후, 선생님의 코드와 비교해 기존 코드에서 수정 및 추가하는 방법으로 진행하고자 했다.<br><br>진행과정은 다음과 같다:<br>

- React 공식문서를 보고 그대로 만들기
  - Basic 버전 만들기(틱택토 게임, 승자 표시, 턴 번갈아가며 진행)
  - Time Travel 추가해 History 볼 수 있도록 완성하기<br><br>
- [야무쌤](https://github.com/yamoo9/likelion-10th/tree/lecture/13-tic-tac-toe-game) 버전과 비교하며 기존 코드 수정하기
  - 기존 틱택토의 Basic 버전으로 돌아가 컴포넌트로 분리하기(야무쌤의 step.10까지 구현) → **현재 여기까지 구현 완료**
  - Status 표시하기(시작, 누구의 턴인지, 누가 이겼는지, 비겼을 경우)
  - History를 나타내 해당 단계부터 다시 실행할 수 있도록 할 것
  - 추가 기능 구현(restart 버튼, 사용자의 원하는 아이콘 선택, (가능하다면 언젠가) 컴퓨터 스스로 2nd player가 되어 게임을 실행할 수 있도록 등등)<br><br>

## React Library Version

- React 공식 문서 [Tic-Tac-Toe 튜토리얼](https://react.dev/learn/tutorial-tic-tac-toe)을 참고해 구현을 완료했다.<br>
- 공식문서에서는 jsx를 사용했으나, 나는 tsx, 즉, TypeScript를 이용해 구현했기 때문에 코드가 동일하지는 않다.<br>

### Code

기본적으로 문서에 나온 순서 그대로 동일하게 진행했으나 아래 부분은 조금 다르게 작성했다.<br><br>**React ver.**

```jsx
function handleClick(i) {
  if (calculateWinner(squares) || squares[i]) {
    return;
  }
  const nextSquares = squares.slice();
  if (xIsNext) {
    nextSquares[i] = "X";
  } else {
    nextSquares[i] = "O";
  }
  setSquares(nextSquares);
  setXIsNext(!xIsNext);
}
```

<br>

**aekyung11 ver.**

```tsx
function handleClick(i: number) {
  if (squares[i] || calculateWinner(squares)) {
    return;
  }
  const nextSquares = [...squares];
  if (xIsNext) {
    nextSquares[i] = "X";
  } else {
    nextSquares[i] = "O";
  }
  setSquares(nextSquares);
  setXIsNext(!xIsNext);
}
```

<br>

눈에 띄게 달라진 부분은 없으나, `const nextSquares` 후 정의하는 방식이 달라졌다. 기존의 경우, `squares.slice()`를 사용해 원본 배열을 복사해서 사용했다. 그러나 나의 경우, 굳이 `slice()`를 사용하지 않아도 `[...squares]`를 사용해도 동일한 효과 있었고, 그 편이 조금 더 가독성이 좋다고 판단해 그렇게 수정했다.<br><br>또한, 야무쌤 버전과 비교해 작성했을 때, Time Travel 전으로 revert해 진행했기 때문에 React Tutorial 문서대로 작성한 코드는 [여기](https://github.com/aekyung11/react-hw/tree/ca336ddb8f8b1f168993e34e6b8465e3405ddc9a/tic-tac-toe)에서 볼 수 있다.<br><br>

## 야무쌤 Version

- 야무쌤의 버전을 참고해 나와 다른 점을 비교 후, 차례로 내 코드에 적용해보며 발전시켜 나가는
- 24.08.11 현재 status, history를 제외한 부분까지는 컴포넌트를 분리해 구현한 상태이다.<br>

### Code

이 역시 선생님의 코드를 그대로 가져오지는 않았으며, 선생님 코드의 원리를 이해하는 데에 집중했다.<br><br>**App.tsx**

```tsx
import styles from "@/App.module.css";
import { Squares } from "./components/Squares/Squares";

export default function Board() {
  return (
    <div className={styles.game}>
      {/* <div className="status">{status}</div> */}
      <Squares />
    </div>
  );
}
```

<br>

주석처리 한 부분은 추후 구현할 부분으로, 우선은 `Squares`를 따로 컴포넌트로 만들었다.<br><br>**Squares.tsx**

```tsx
// imports

export function Squares() {
  const [squares, setSquares] = useState(INITIAL_SQUARES);
  ...

  // getHandleSquareClick 함수 정의

  return (
    <div className={styles.component}>
      {squares.map((square, index) => {
        const winnerStyles: React.CSSProperties = {
          backgroundColor: undefined,
        };
        // 승리 조건 박스들 배경색 입히기

        return (
          <Square
            key={index}
            style={winnerStyles}
            onSquareClick={getHandleSquareClick(index)}
          >
            {square}
          </Square>
        );
      })}
    </div>
  );
}
```

<br>

중간중간 생략하긴 했으나 기본적으로는 `Square` 컴포넌트를 가져와 `map`을 통해 9칸을 그리는 방식이다. `Square` 에 대해서는 추후 설명하며, 우선 `INITIAL_SQUARES`와 같은 constants를 정의한 파일과 `getHandleSquareClick`함수에 대해 서술하고자 한다.<br><br>**getHandleSquareClick**

```tsx
function getHandleSquareClick(i: number) {
  return () => {
    if (squares[i] || winnerInfo) {
      return;
    }
    setSquares((prevSquares) => {
      const nextSquares = [...prevSquares];
      nextSquares[i] = currentPlayer;
      return nextSquares;
    });
  };
}
```

<br>

선생님의 코드와 동일하지는 않지만, 선생님의 `handlePlayGame`와 동일한 기능을 한다. `if (squares[i] || winnerInfo) {return;}`의 경우, 이미 승자가 있거나(게임이 종료됐거나), 이미 선택된 박스를 선택할 경우 함수가 실행되지 않도록 막아주는 역할을 한다.<br>`setSquares`는 `prevSquares` 배열을 복사해 `nextSquares`를 만들고, 사용자가 선택한 박스(`nextSquares[i]`)에 현재 플레이어를 표시한다.<br>`currentPlayer`는 생략한 부분에서 `const currentPlayer = isPlayerOneTurn ? PLAYER.ONE : PLAYER.TWO;`에서 정의하며 이 때 `PLAYER`의 경우 constants 파일에 정의되어있다. constants 파일은 다음과 같다:<br><br>**constants.ts**

```ts
export const PLAYER = { ONE: "🏐", TWO: "🐲" };
export const PLAYER_COUNT = Object.keys(PLAYER).length;
export const INITIAL_SQUARES = Array(9).fill(null);
export const WINNERS_COLOR = "#FFDAB9";

const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function calculateWinner(squares: string | null[]) {
  for (let i = 0; i < WINNING_LINES.length; i++) {
    const [a, b, c] = WINNING_LINES[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a, b, c] };
    }
  }
  return null;
}
```

<br>

특히 `WINNING_LINES`와 `calculateWinner`의 경우, 기존 React tutorial에서 작성한 부분을 가져왔다.<br>Square파일의 경우, 다음과 같다.<br><br>**Square.tsx**

```tsx
import styles from "@/components/Square/Square.module.css";

type SquareProps = React.ComponentPropsWithoutRef<"button"> & {
  onSquareClick: React.ComponentPropsWithoutRef<"button">["onClick"];
};

export function Square({ children, onSquareClick, ...restProps }: SquareProps) {
  const isDisabled = !!children;

  return (
    <button
      className={styles.component}
      onClick={onSquareClick}
      disabled={isDisabled}
      {...restProps}
    >
      {children}
    </button>
  );
}
```

<br><br>

## Thoughts

아직 다 마무리 하지 못한 점이 아쉽다. 수업을 한 번 놓치기 시작하니 시간이 몇 배는 더 걸리는 것 같다. 기한은 지키지 못했으나, 자습시간, 수업이 끝난 후의 자투리 시간 등등 Tic-Tac-Toe는 완성하고 싶은 욕심이 커서, 과제와는 관계없이 지속적으로 업데이트할 예정이다.
