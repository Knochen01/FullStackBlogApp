import styles from "./page.module.css";

export default function page() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton}>Sing in with Google</div>
        <div className={styles.socialButton}> Sing in with GitHub</div>
        <div className={styles.socialButton}> Sing in with Facebook</div>
      </div>
    </div>
  );
}
