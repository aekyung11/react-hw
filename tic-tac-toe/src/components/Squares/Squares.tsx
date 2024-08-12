import styles from "@/components/Squares/Squares.module.css";
import { WINNERS_COLOR } from "@/constants";
import { Square } from "@/components/Square/Square";

type SquaresProps = {
  squares: (string | null)[];
  setSquares: React.Dispatch<React.SetStateAction<(string | null)[]>>;
  winnerInfo: {
    winner: string;
    line: number[];
  } | null;
  currentPlayer: string;
};

export function Squares({
  squares,
  setSquares,
  winnerInfo,
  currentPlayer,
}: SquaresProps) {
  const getHandleSquareClick = (i: number) => {
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
  };

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
