import Link from "next/link";
import { Icon, Image } from "semantic-ui-react";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks";
import styles from "./JoinLayout.module.scss";

export const JointLayout = (props) => {

  const { children } = props;
  const { user } = useAuth();
  const router = useRouter();

  if (user) router.push("/");

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <Link href="/">
          <Image src="/images/logo2.png" alt="Gaming"/>
        </Link>

        <Link href="/">
          <Icon name="close"/>
        </Link>
      </div>

      <div className={styles.blockLeft}>{children}</div>

    </div>
  )
}
