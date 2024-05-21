import Image from "next/image";
import styles from "../../app/[slug]/page.module.css";

export default function Mc() {
  return (
    <div className={styles.user}>
      <div className={styles.userImageContainer}>
        <Image
          src={"/p1.jpeg"}
          alt=""
          width={45}
          height={45}
          className={styles.avatar}
        />
      </div>
      <div className={styles.userTextContainer}>
        <span className={styles.userName}>John Doe</span>
        <span className={styles.date}>05.18.2024</span>
      </div>
    </div>
  );
}
