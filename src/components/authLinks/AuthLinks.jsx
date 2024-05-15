"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";

export default function AuthLinks() {
  const [open, setOpen] = useState(false);
  // Temporary Data
  const status = "notauthentifddicated";

  return (
    <>
      {status === "notauthentifddicated" ? (
        <Link href={"/login"} className={styles.links}>
          Login
        </Link>
      ) : (
        <>
          <Link href={"/write"} className={styles.links}>
            Write
          </Link>
          <span className={styles.link}>Logout</span>
        </>
      )}

      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href={"/"} className={styles.link}>
            Homepage
          </Link>
          <Link href={"/"} className={styles.link}>
            Contact
          </Link>
          <Link href={"/"} className={styles.link}>
            About
          </Link>
          {status === "notauthentifddicated" ? (
            <Link href={"/login"}>Login</Link>
          ) : (
            <>
              {/* <Link href={"/write"}>Write</Link> */}
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
}
