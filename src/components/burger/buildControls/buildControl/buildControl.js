import React from 'react';
import styles from './buildControl.module.css';

const buildControl =(props)=>{
    return(
        <div className={styles.BuildControl}>
            <div className={styles.Label} >{props.label}</div>
            <button className={styles.Less} onClick={event=>props.clickLess(props.label)}>Less</button>
            <button className={styles.More} onClick={event=>props.clickMore(props.label)}>More</button>
        </div>
    );
};

export default buildControl;