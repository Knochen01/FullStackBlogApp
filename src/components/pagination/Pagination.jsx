import styles from "./pagination.module.css";

export default function Pagination() {
  return (
    <div className={styles.container}>
      <button className={styles.button}>Previous Page</button>
      <button className={styles.button}>Next Page</button>
    </div>
  );
}
