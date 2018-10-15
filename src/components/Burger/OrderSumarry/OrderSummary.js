import React from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(key => {
            return  <li>
                      <span style={{textTransform: 'capitalize'}}>{key}</span>:{props.ingredients[key]}
                    </li>
        });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>price: €{props.price.toFixed(2)}</p>
            <p>Ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled} > Cancel </Button>
            <Button btnType="Success" clicked={props.puchaseContinued}> Continue </Button>
        </Aux>
     );
};
export default OrderSummary