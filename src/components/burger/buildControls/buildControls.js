import React from 'react';
import styles from './buildControls.module.css';
import BuildControl from './buildControl/buildControl';

const buildControls =(props)=>{
    let buildControls=Object.keys(props.ingredients).map((type,index)=>{
        return <BuildControl 
        label={type} 
        key={index} 
        clickLess={(label)=>props.clickLess(label)}
        clickMore={(label)=>props.clickMore(label)}
        />
    });
    return(
        <div className={styles.BuildControls}>
           {buildControls}
        </div>
    );
};

export default buildControls;
