import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.logo}>
          <Image
            src={"/logo.png"}
            alt=""
            width={50}
            height={50}
            className={styles.image}
          />
          <h1 className={styles.logoText}>{"Marian's Blog"}</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quidem
          unde nam maiores error. Quasi, iste voluptate libero assumenda impedit
          accusamus error voluptatem ab molestiae temporibus, inventore possimus
          laboriosam sed!
        </p>
        <div className={styles.socialAccounts}>
          <Image src={"/facebook.png"} alt="facebook" width={18} height={18} />
          <Image src={"/tiktok.png"} alt="tiktok" width={18} height={18} />
          <Image
            src={"/instagram.png"}
            alt="instagram"
            width={18}
            height={18}
          />
          <Image src={"/youtube.png"} alt="youtube" width={18} height={18} />
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.lists}>
          <ul className={styles.links}>
            <span className={styles.titles}>Links</span>
            <li>
              <Link href={"/"}>Homepage</Link>
            </li>
            <li>
              <Link href={"/blog"}>Blog</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>

        <div className={styles.lists}>
          <ul className={styles.tags}>
            <span className={styles.titles}>Tags</span>
            <li>
              <Link href={"/style"}>Style</Link>
            </li>
            <li>
              <Link href={"/coding"}>Coding</Link>
            </li>
            <li>
              <Link href={"/fashion"}>Fashion</Link>
            </li>
            <li>
              <Link href={"/culture"}>Culture</Link>
            </li>
          </ul>
        </div>
        <div className={styles.lists}>
          <ul className={styles.social}>
            <span className={styles.titles}>Social</span>
            <li>
              <Link href={"/"}>Facebook</Link>
            </li>
            <li>
              <Link href={"/"}>Instagram</Link>
            </li>
            <li>
              <Link href={"/"}>Tiktok</Link>
            </li>
            <li>
              <Link href={"/"}>Twitter</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
