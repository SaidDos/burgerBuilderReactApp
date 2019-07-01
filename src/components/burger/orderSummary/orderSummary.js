import React from 'react';
import Wrapper from '../../../hoc/wrapperComponent';
import Button from '../../ui/button/button';

const orderSummary = (props)=>{

    let ingredientSummary=Object.keys(props.ingredients).map((type,index)=>{
        return (
            <li key={index}>
                <span style={{textTransform:'capitalize'}}>{type}</span>:{props.ingredients[type]}
            </li>
        );
    });
    return (
       <Wrapper>
       <h3>Your Order</h3>
       <p>A delicious burger with the following ingredients:</p>
       {ingredientSummary}
       <p><strong>Total Price: {props.totalPrice.toFixed(2)}</strong></p>
           <p>Continue to checkout?</p>
           <Button 
           buttonType='Danger'
           clicked={props.cancelPurchase}
           >CANCEL</Button>
           <Button 
           buttonType='Success'
           clicked={props.continuePurchase}
           >CONTINUE</Button>
       </Wrapper>
    );
};

export default orderSummary;