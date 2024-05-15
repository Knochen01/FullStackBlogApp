import styles from "./navBar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

export default function NavBar() {
  return (
    <nav className={styles.container}>
      <div className={styles.social}>
        <Image src={"/facebook.png"} alt="facebook" width={24} height={24} />
        <Image src={"/tiktok.png"} alt="tiktok" width={24} height={24} />
        <Image src={"/instagram.png"} alt="instagram" width={24} height={24} />
        <Image src={"/youtube.png"} alt="youtube" width={24} height={24} />
      </div>
      <div className={styles.logo}>
        <Link href={"/"}>Marians Blog</Link>
      </div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href={"/"} className={styles.link}>
          Homepage
        </Link>
        <Link href={"/"} className={styles.link}>
          Contact
        </Link>
        <Link href={"/"} className={styles.link}>
          About
        </Link>
        <AuthLinks />
      </div>
    </nav>
  );
}
