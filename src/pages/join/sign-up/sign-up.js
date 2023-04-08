import Link from "next/link";
import { JointLayout } from "@/layouts";
import { RegisterForm } from "@/components/Auth";
import styles from "./sign-up.module.scss";

const SignUpPage = () => {
  return (
    <>
      <JointLayout>
        <div className={styles.signIn}>
          <h3>Crear Cuenta</h3>
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
