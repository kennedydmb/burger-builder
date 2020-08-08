import React from 'react'

import Auxillary from '../../../hoc/Auxillary'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
                </li>)
        });
    return (
        <Auxillary>
            <h3>Your order</h3>
            <p>Toppings selected</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: £{props.price}</strong></p>
            <p>Continue to checkout?</p>
            <Button 
                btnType="Danger" 
                clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button 
                btnType="Success" 
                clicked={props.purchaseContinued}>CONTINUE</Button>
        </Auxillary>
    )
};

export default orderSummary;