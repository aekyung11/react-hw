import styles from "@/App.module.css";
import Board from "@/components/Board/Board";
import History from "@/components/History/History";
import { useState } from "react";
import { INITIAL_SQUARES } from "./constants";

export default function Game() {
  const [history, setHistory] = useState<(string | null)[][]>([
    INITIAL_SQUARES,
  ]);
  const [historyIdx, setHistoryIdx] = useState(0);
  const currentSquares = history[historyIdx];

  function handlePlay(nextSquares: (string | null)[]) {
    const nextHistory = [...history.slice(0, historyIdx + 1), nextSquares];
    setHistory(nextHistory);
    setHistoryIdx(nextHistory.length - 1);
  }

  function reset() {
    setHistoryIdx(0);
    setHistory([INITIAL_SQUARES]);
  }

  function jumpTo(nextMove: number) {
    setHistoryIdx(nextMove);
  }

  return (
    <div className={styles.game}>
      <Board squares={currentSquares} onPlay={handlePlay} />
      <History
        jumpTo={jumpTo}
        restart={reset}
        history={history}
        historyIdx={historyIdx}
      />
    </div>
  );
}
