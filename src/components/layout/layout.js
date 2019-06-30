import Wrapper from '../../hoc/wrapperComponent';
import React from 'react';
import styles from './layout.module.css';

const layout = (props) => {
    return (
        <Wrapper>
            <div>
                ToolBar,SideDrawer,BackDrop
        </div>
            <main className={styles.content}>
                {props.children}
            </main>
        </Wrapper>
    );
};

export default layout;