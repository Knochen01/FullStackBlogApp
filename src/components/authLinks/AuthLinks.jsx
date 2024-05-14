"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";

export default function AuthLinks() {
  // Temporary Data
  const status = "notauthentifddicated";

  return (
    <>
      {status === "notauthentificated" ? (
        <Link href={"/login"}>Login</Link>
      ) : (
        <>
          <Link href={"/write"}>Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
    </>
  );
}
