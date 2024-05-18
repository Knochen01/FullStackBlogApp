import Pagination from "../pagination/Pagination";
import styles from "./cardlist.module.css";
import SinglePost from "../card/Card";
import Card from "../card/Card";

export default function CardList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <div className={styles.post}>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div>
        <Pagination />
      </div>
    </div>
  );
}
