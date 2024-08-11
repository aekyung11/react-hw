import { useState } from "react";
import styles from "@/components/Squares/Squares.module.css";
import {
  calculateWinner,
  INITIAL_SQUARES,
  PLAYER,
  PLAYER_COUNT,
  WINNERS_COLOR,
} from "@/constants";
import { Square } from "@/components/Square/Square";

export function Squares() {
  const [squares, setSquares] = useState(INITIAL_SQUARES);

  const currentMove = squares.filter(Boolean).length;
  const winnerInfo = calculateWinner(squares);
  const isPlayerOneTurn = currentMove % PLAYER_COUNT === 0;
  const currentPlayer = isPlayerOneTurn ? PLAYER.ONE : PLAYER.TWO;

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

  return (
    <div className={styles.component}>
      {squares.map((square, index) => {
        const winnerStyles: React.CSSProperties = {
          backgroundColor: undefined,
        };

        if (winnerInfo) {
          const [x, y, z] = winnerInfo.line;

          if (index === x || index === y || index === z) {
            winnerStyles.backgroundColor = WINNERS_COLOR;
          }
        }
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
