import Link from "next/link";
import { JointLayout } from "@/layouts";
import { LoginForm } from "@/components/Auth";
import { Seo } from "@/components/Shared";
import styles from "./sign-in.module.scss";

const SignInPage = () => {
  return (
    <>
    <Seo title="Iniciar Sesión"/>

    <JointLayout>
      <div className={styles.signIn}>
        <h2>Iniciar sesión</h2>

        <LoginForm/>

        <div className={styles.actions}>
          <Link href="/join/sign-up">¿No tienes una cuenta?</Link>
        </div>
      </div>
    </JointLayout>
    </>
  );
};

export default SignInPage;

