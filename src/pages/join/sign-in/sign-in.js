import Link from "next/link";
import { JointLayout } from "@/layouts";
import { LoginForm } from "@/components/Auth";
import styles from "./sign-in.module.scss";

const signInPage = () => {
  return (
    <>
    <JointLayout>
      <div className={styles.signIn}>
        <h2>Iniciar sesión  </h2>

        <LoginForm/>

        <div className={styles.actions}>
          <Link href="/join/sign-up">¿No tienes una cuenta?</Link>
        </div>
      </div>
    </JointLayout>
    </>
  );
};

export default signInPage;
