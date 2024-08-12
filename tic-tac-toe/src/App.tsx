import styles from "@/App.module.css";
// import { Squares } from "./components/Squares/Squares";
import Board from "./components/Board/Board";

export default function App() {
  return (
    <div className={styles.game}>
      {/* <div className="status">{status}</div> */}
      <Board />
    </div>
  );
}
