import styles from "@/components/Status/Status.module.css";

type StatusProps = {
  winner: string | undefined;
  currentPlayer: string;
  isDraw: boolean;
};

export default function Status({ winner, currentPlayer, isDraw }: StatusProps) {
  if (winner) {
    return <h2 className={styles.component}>승자는 {winner}!</h2>;
  }

  if (isDraw) {
    return <h2 className={styles.component}>비겼어요^_^</h2>;
  }

  return <h2 className={styles.component}>{currentPlayer} 차례예요~</h2>;
}
