import React from 'react';
import BurgerIngredient from '../burger/burgerIngredient/burgerIngredient';
import styles from './burger.module.css';

export const burger =(props)=>{
    let ingredientLength=0;
    let transformedIngredients=Object.keys(props.ingredients)
          .map(type=>{
            ingredientLength+=props.ingredients[type];
              return [...Array(props.ingredients[type])].map((_,index)=>{
                  return   <BurgerIngredient type={type} key={index} />
              });
          });
   
        if(!ingredientLength){
            transformedIngredients=<p>Please start adding ingredients!</p>
        }
        
    return(
        <div className={styles.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
};

export default burger;