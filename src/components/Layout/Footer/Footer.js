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

                <div>
                    <ul>
                        <Link href="#">Centro de ayuda</Link>
                        <Link href="#">Soporte y Garantía</Link>
                        <Link href="#">Cambios y Devoluciones</Link>
                        <Link href="#">Tienda en Línea</Link>
                    </ul>
                </div>

                <div>
                    <ul>
                        <Link href="#">Defensa al Consumidor</Link>
                        <Link href="#">Promociones Bancarias</Link>
                        <Link href="#">Nuestra Comunidad</Link>
                        <Link href="#">Trabaja con nosotros</Link>
                    </ul>
                </div>

                <div className={styles.social}>
                    <Button as="a" href="#" circular color="brown" icon="facebook" />
                    <Button as="a" href="#" circular color="brown" icon="twitter" />
                    <Button as="a" href="#" circular color="brown" icon="instagram" />
                    <Button as="a" href="#" circular color="brown" icon="youtube" />
                </div>
            </div>
            
            <div className={styles.copyright}>
                    <span>Copyright @ 2023 Wowgames - All rights reserved</span>
            </div>
        </Container>

    </div>
  )
}
