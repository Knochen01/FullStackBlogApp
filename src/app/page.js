import CategoryList from "@/components/categoryList/CategoryList";
import Featured from "@/components/featured/Featured";
import styles from "./page.module.css";
import CardList from "@/components/cardlist/CardList";
import Menu from "@/components/menu/Menu";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div> */}
    </div>
  );
}
