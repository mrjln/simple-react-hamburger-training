import React, {PropTypes} from 'react'
import Aux from '../../../hoc/Aux'

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
            <p>Ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
        </Aux>
     );
}
export default OrderSummary