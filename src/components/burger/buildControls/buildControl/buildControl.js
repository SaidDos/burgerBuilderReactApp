import React from 'react';
import styles from './buildControl.module.css';

const buildControl =(props)=>{
    return(
        <div className={styles.BuildControl}>
            <div className={styles.Label} >{props.label}</div>
            <button 
            className={styles.Less} 
            onClick={props.clickLess} 
            disabled={props.disabled}
            >Less</button>
            <button className={styles.More} onClick={props.clickMore}>More</button>
        </div>
    );
};

export default buildControl;