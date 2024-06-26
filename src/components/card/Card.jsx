import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

export default function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>15.05.2024 -</span>
          <span className={styles.category}> Culture</span>
        </div>
        <Link href={"/"}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
          blanditiis. Dolores quidem obcaecati harum, veritatis magnam deserunt
          doloremque aperiam similique beatae ducimus quibusdam, id
          exercitationem ad hic a laboriosam quisquam!
        </p>
        <Link href={"/"} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
}
