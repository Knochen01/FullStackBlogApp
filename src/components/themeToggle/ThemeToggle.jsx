import styles from "./themeToggle.module.css";
import Image from "next/image";
export default function ThemeToggle() {
  return (
    <div className={styles.container}>
      <Image src={"/moon.png"} width={14} height={14} alt="moon" />
      <div className={styles.circle}></div>
      <Image src={"/sun.png"} width={14} height={14} alt="sun" />
    </div>
  );
}
