import styles from "@/App.module.css";
import { Squares } from "@/components/Squares/Squares";
import {
  calculateWinner,
  INITIAL_SQUARES,
  PLAYER,
  PLAYER_COUNT,
} from "@/constants";
import { useState } from "react";
import Status from "@/components/Status/Status";

export default function Board() {
  const [squares, setSquares] = useState<(string | null)[]>(INITIAL_SQUARES);

  const currentMove = squares.filter(Boolean).length;
  const winnerInfo = calculateWinner(squares);
  const isPlayerOneTurn = currentMove % PLAYER_COUNT === 0;
  const currentPlayer = isPlayerOneTurn ? PLAYER.ONE : PLAYER.TWO;
  const isDraw = !winnerInfo && squares.every(Boolean);

  return (
    <div className={styles.game}>
      <Status
        winner={winnerInfo?.winner}
        currentPlayer={currentPlayer}
        isDraw={isDraw}
      />
      <Squares
        squares={squares}
        setSquares={setSquares}
        winnerInfo={winnerInfo}
        currentPlayer={currentPlayer}
      />
    </div>
  );
}
