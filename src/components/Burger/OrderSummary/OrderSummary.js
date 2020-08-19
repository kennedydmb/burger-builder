import React, { Component } from 'react'

import Auxillary from '../../../hoc/Auxillary'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
    // This could be a functional component
    componentDidUpdate() {
        console.log('[OrderSummary] Did Update')
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>)
            });

        return (
            <Auxillary>
                <h3>Your order</h3>
                <p>Toppings selected</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: £{this.props.price}</strong></p>
                <p>Continue to checkout?</p>
                <Button
                    btnType="Danger"
                    clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button
                    btnType="Success"
                    clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Auxillary>
        );
    }
}

export default OrderSummary;