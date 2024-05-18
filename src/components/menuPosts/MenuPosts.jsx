import Link from "next/link";
import styles from "../menu/menu.module.css";
import Image from "next/image";

export default function MenuPosts({ withImage }) {
  return (
    <div>
      <div className={styles.items}>
        <Link href={"/"} className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image
                src={"/p1.jpeg"}
                alt=""
                fill
                className={styles.image}
              ></Image>
            </div>
          )}
          <div className={styles.textContainer}>
            <div className={`${styles.category} ${styles.travel}`}>Travel</div>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
              fugit.
            </h3>
            <div className={styles.detail}>
              <div className={styles.username}>John Doe- </div>
              <div className={styles.date}> 5.16.2024</div>
            </div>
          </div>
        </Link>
        <Link href={"/"} className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image
                src={"/p1.jpeg"}
                alt=""
                fill
                className={styles.image}
              ></Image>
            </div>
          )}
          <div className={styles.textContainer}>
            <div className={`${styles.category} ${styles.culture}`}>Travel</div>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
              fugit.
            </h3>
            <div className={styles.detail}>
              <div className={styles.username}>John Doe- </div>
              <div className={styles.date}> 5.16.2024</div>
            </div>
          </div>
        </Link>
        <Link href={"/"} className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image
                src={"/p1.jpeg"}
                alt=""
                fill
                className={styles.image}
              ></Image>
            </div>
          )}
          <div className={styles.textContainer}>
            <div className={`${styles.category} ${styles.food}`}>Travel</div>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
              fugit.
            </h3>
            <div className={styles.detail}>
              <div className={styles.username}>John Doe- </div>
              <div className={styles.date}> 5.16.2024</div>
            </div>
          </div>
        </Link>
        <Link href={"/"} className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image
                src={"/p1.jpeg"}
                alt=""
                fill
                className={styles.image}
              ></Image>
            </div>
          )}
          <div className={styles.textContainer}>
            <div className={`${styles.category} ${styles.fashion}`}>Travel</div>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
              fugit.
            </h3>
            <div className={styles.detail}>
              <div className={styles.username}>John Doe- </div>
              <div className={styles.date}> 5.16.2024</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
