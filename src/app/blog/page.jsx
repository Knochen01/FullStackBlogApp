import Menu from "@/components/menu/Menu";
import styles from "./page.module.css";

import CardList from "@/components/cardlist/CardList";

export default function page() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Style Blog</h1>
      <h1>Recent Posts</h1>

      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
