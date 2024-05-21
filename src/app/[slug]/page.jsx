import Menu from "@/components/menu/Menu";
import styles from "./page.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";
import Mc from "@/components/Marians_User_Component/Mc";

export default function page() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h1>
          {/* <div className={styles.user}>
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
          </div> */}
          <Mc />
          <h1>Lorem, ipsum dolor sit</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero cum
            suscipit, blanditiis, incidunt iure, quos nobis maiores in fuga
            veritatis laudantium minima culpa possimus a. Cumque quidem magni
            alias inventore!
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
        </div>
      </div>
      {/* Left Side */}
      <div className={styles.content}>
        {/* Everything minus the Menu */}
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              deserunt earum repudiandae assumenda quae libero magnam expedita
              officia voluptatum maiores, hic enim tempora laborum obcaecati
              perferendis natus vitae, dolorem id.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              deserunt earum repudiandae assumenda quae libero magnam expedita
              officia voluptatum maiores, hic enim tempora laborum obcaecati
              perferendis natus vitae, dolorem id.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              deserunt earum repudiandae assumenda quae libero magnam expedita
              officia voluptatum maiores, hic enim tempora laborum obcaecati
              perferendis natus vitae, dolorem id.
            </p>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
}
