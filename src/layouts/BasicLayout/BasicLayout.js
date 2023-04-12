import { Container } from "semantic-ui-react";
import classNames from "classnames";
import styles from "./BasicLayout.module.scss"

export const BasicLayout = (props) => {
    const { 
        children,
        isOpenSearch = false,
        isContainer = false,
        relative = false, 
    } = props;

    return (
        <>
            {/*TopBar*/}

            <Container fluid>
                <div className={classNames({ [styles.relative]: relative })}>
                    {isContainer ? <Container>{children}</Container> : children}
                </div>
            </Container>

            {/* Footer */}

            
        </>
  );
}
