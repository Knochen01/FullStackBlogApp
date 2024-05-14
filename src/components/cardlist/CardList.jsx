import Pagination from "../pagination/Pagination";
import styles from "./cardlist.module.css";

export default function CardList() {
  return (
    <div className={styles.container}>
      <div>
        <Pagination />
      </div>
    </div>
  );
}
