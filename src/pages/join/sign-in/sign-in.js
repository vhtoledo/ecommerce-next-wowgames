import Link from "next/link";
import { JointLayout } from "@/layouts";
import styles from "./sign-in.module.scss";

const signInPage = () => {
  return (
    <>
    <JointLayout>
      <div className={styles.signIn}>
        <h3>Iniciar sesión  </h3>

      </div>
    </JointLayout>
    </>
  );
};

export default signInPage;
