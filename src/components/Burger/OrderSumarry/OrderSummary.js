import React, {PropTypes} from 'react'
import Aux from '../../../hoc/Aux'

const OrderSummary = (props) => {
    const ingredientSummary = props.ingredients
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Ingredients:</p>
            <ul>
                
            </ul>
        </Aux>
     );
}
export default OrderSummary