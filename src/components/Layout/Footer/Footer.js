import Link from "next/link";
import { Button, Container, Image } from "semantic-ui-react";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.footer}>
        <Container>
            <div className={styles.columns}>
                <div>
                    <Link href="/">
                        <Image src="/images/logo2.png" alt="Gaming"/>
                    </Link>
                </div>

                <div>
                    <ul>
                        <Link href="#">Términos y condiciones</Link>
                        <Link href="#">Política de privacidad</Link>
                        <Link href="#">Contacto</Link>
                        <Link href="#">Preguntas Frecuentes</Link>
                    </ul>
                </div>

                <div className={styles.social}>
                    <Button as="a" href="#" circular color="facebook" icon="facebook" />
                    <Button as="a" href="#" circular color="twitter" icon="twitter" />
                    <Button as="a" href="#" circular color="instagram" icon="instagram" />
                    <Button as="a" href="#" circular color="youtube" icon="youtube" />
                </div>
            </div>
            
            <div className={styles.copyright}>
                    <span>Copyright @ 2023 Wgames - All rights reserved</span>
            </div>
        </Container>

    </div>
  )
}
