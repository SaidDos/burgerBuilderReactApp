import React from 'react';
import styles from './buildControls.module.css';
import BuildControl from './buildControl/buildControl';

const buildControls =(props)=>{
    let buildControls=Object.keys(props.ingredients).map((type,index)=>{
        return <BuildControl 
        label={type} 
        key={index} 
        clickLess={()=>props.clickLess(type)}
        clickMore={()=>props.clickMore(type)}
        disabled={props.disabled[type]}
        />
    });
    return(
        <div className={styles.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
           {buildControls}
           <button 
           className={styles.OrderButton} 
           disabled={!props.purchasable}
           onClick={props.order}
           >ORDER NOW</button>
        </div>
    );
};

export default buildControls;
