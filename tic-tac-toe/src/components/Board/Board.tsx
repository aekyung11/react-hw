import styles from "@/App.module.css";
import { Squares } from "@/components/Squares/Squares";
import { calculateWinner, PLAYER, PLAYER_COUNT } from "@/constants";
import Status from "@/components/Status/Status";

type BoardProps = {
  squares: (string | null)[];
  onPlay: (nextSquares: (string | null)[]) => void;
};

export default function Board({ squares, onPlay }: BoardProps) {
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
        onPlay={onPlay}
        winnerInfo={winnerInfo}
        currentPlayer={currentPlayer}
      />
    </div>
  );
}
