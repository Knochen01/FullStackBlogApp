import Image from "next/image";
import styles from "./featured.module.css";

export default function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b> Hey Marian here !</b> Discover my stories and creative ideas !
      </h1>
      <div className={styles.post}>
        <div className={styles.imageContainer}>
          <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum debitis
            vel voluptas quae soluta, nihil quidem quos hic asperiores tenetur
            facilis voluptatum nemo ducimus ea saepe ratione nobis accusantium
            consequuntur?
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
            soluta tempore, quos distinctio placeat ratione amet voluptatum,
            explicabo nostrum odio voluptate harum quo. Iusto ut minima magnam
            quaerat, aliquid aperiam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ad repellat praesentium, atque asperiores
            perspiciatis porro nihil iure distinctio aperiam ab temporibus unde
            omnis vel sed illum veritatis amet tenetur laborum.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
}
