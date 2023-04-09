import Link from "next/link";
import { JointLayout } from "@/layouts";
import { RegisterForm } from "@/components/Auth";
import styles from "./sign-up.module.scss";

const SignUpPage = () => {
  return (
    <>
      <JointLayout>
        <div className={styles.signIn}>
          <h2>Crear Cuenta</h2>
          <RegisterForm/>
        
        <div className={styles.actions}>
          <Link href="/join/sign-in">Atras</Link>
        </div>
        </div>
      </JointLayout>
    </>
  );
};

export default SignUpPage;
