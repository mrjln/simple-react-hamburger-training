import React, {PropTypes} from 'react'
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngrient/BurgerIngredient'

const Burger = (props) => {
    return (
      <div className={classes.Burger}>
          <BurgerIngredient type="bread-top"/>
          <BurgerIngredient type="cheese"/>
          <BurgerIngredient type="meat"/>
          <BurgerIngredient type="bread-bottom"/>
      </div>
    );
};

Burger.propTypes = {}

export default Burger