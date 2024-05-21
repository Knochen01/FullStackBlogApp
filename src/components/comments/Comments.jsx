import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Mc from "../Marians_User_Component/Mc";

export default function Comments() {
  const status = "authentificated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authentificated" ? (
        <>
          <div className={styles.write}>
            <textarea
              placeholder="Write a comment..."
              className={styles.input}
            />
            <button className={styles.button}>Send</button>
          </div>
        </>
      ) : (
        <>
          <Link href={"/login"}>Login to leave a comment</Link>
        </>
      )}
      {/* Comment 1 */}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <Mc />
          <div className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            sapiente est repudiandae cumque porro hic amet temporibus ab dolore
            doloremque inventore, voluptatibus tempore unde ea! Numquam ullam
            ducimus corporis recusandae.
          </div>
        </div>
      </div>
      {/* Comment 2 */}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <Mc />
          <div className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            sapiente est repudiandae cumque porro hic amet temporibus ab dolore
            doloremque inventore, voluptatibus tempore unde ea! Numquam ullam
            ducimus corporis recusandae.
          </div>
        </div>
      </div>
      {/* Comment 3 */}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <Mc />
          <div className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            sapiente est repudiandae cumque porro hic amet temporibus ab dolore
            doloremque inventore, voluptatibus tempore unde ea! Numquam ullam
            ducimus corporis recusandae.
          </div>
        </div>
      </div>
    </div>
  );
}
