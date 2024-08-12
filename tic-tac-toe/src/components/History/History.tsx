import styles from "./History.module.css";

type HistoryProps = {
  jumpTo: (nextMove: number) => void;
  history: (string | null)[][];
  historyIdx: number;
};

export default function History({ jumpTo, history, historyIdx }: HistoryProps) {
  return (
    <div className={styles.component}>
      <ol>
        {history.map((_squares, index) => {
          const buttonLabel = index === 0 ? "게임 시작" : `게임 #${index}`;
          const isDisabled = historyIdx === index;

          return (
            <li key={index}>
              <button
                type="button"
                onClick={() => jumpTo(index)}
                disabled={isDisabled}
              >
                {buttonLabel}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
