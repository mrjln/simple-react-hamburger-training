import React, { Component }from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
    componentWillUpdate(){
        console.log('will update')
    }
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(key => {
                return  <li>
                    <span style={{textTransform: 'capitalize'}}>{key}</span>:{this.props.ingredients[key]}
                </li>
            });

        return <Aux>
            <h3>Your Order</h3>
            <p>price: €{this.props.price.toFixed(2)}</p>
            <p>Ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled} > Cancel </Button>
            <Button btnType="Success" clicked={this.props.puchaseContinued}> Continue </Button>
        </Aux>
    }
}

export default OrderSummary