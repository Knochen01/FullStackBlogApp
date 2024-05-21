import styles from "./menu.module.css";

import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

export default function Menu() {
  return (
    // Whats Hot section
    <div className={styles.container}>
      <h2 className={styles.subTitle}>What is hot ?</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts />
      {/* Discover by Topic section */}
      <h2 className={styles.subTitle}>Discover by Topics</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />
      {/* Editors Pick section */}
      <h2 className={styles.subTitle}>Chosen by the Editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
}
