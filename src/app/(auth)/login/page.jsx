"use client";

import { signIn, useSession } from "next-auth/react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export const Page = () => {
  const { data, status } = useSession();
  console.log("data = ", data, "status = ", status);

  const router = useRouter();

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }
  if (status === "authenticated") {
    return router.push("/");
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => signIn("google")}>
          Sing in with Google
        </div>
        <div className={styles.socialButton} onClick={() => signIn("github")}>
          {" "}
          Sing in with GitHub
        </div>
        <div className={styles.socialButton}> Sing in with Facebook</div>
      </div>
    </div>
  );
};
export default Page;
