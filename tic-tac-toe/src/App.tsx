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
