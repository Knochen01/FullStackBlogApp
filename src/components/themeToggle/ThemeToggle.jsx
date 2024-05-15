"use client";

import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import styles from "./themeToggle.module.css";
import Image from "next/image";

export default function ThemeToggle() {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <div>
      <div
        className={styles.container}
        onClick={toggle}
        style={
          theme === "dark"
            ? { backgroundColor: "white" }
            : { backgroundColor: "#0f172a" }
        }
      >
        <Image src={"/moon.png"} width={14} height={14} alt="moon" />
        <div
          className={styles.circle}
          style={
            theme === "dark"
              ? { left: 1, backgroundColor: "#0f172a" }
              : { right: 1, backgroundColor: "white" }
          }
        ></div>
        <Image src={"/sun.png"} width={14} height={14} alt="sun" />
      </div>
    </div>
  );
}
