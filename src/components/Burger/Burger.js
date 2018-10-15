import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngrient/BurgerIngredient'

const Burger = (props) => {
    let transIngredients = Object.keys(props.ingredients)
        .map(ingredientKey => {
            return [...Array(props.ingredients[ingredientKey])]
                .map((_, i) => {
                    return <BurgerIngredient type={ingredientKey} key={ingredientKey + i}/>
                })
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);
    if(transIngredients.length === 0) {
        transIngredients = <p> Yo dawg, please add some ingredients on your burger </p>
    }
    return (
      <div className={classes.Burger}>
          <BurgerIngredient type="bread-top"/>
          {transIngredients}
          <BurgerIngredient type="bread-bottom"/>
      </div>
    );
};


export default Burger