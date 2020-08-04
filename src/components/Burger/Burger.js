import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ( props ) => {
    // keys() ransforms ingredients object from BurgerBuilder.js, to a useable array
    const transformIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            //Have to contruct new array for each element in the object, i.e cheese: 2. Length is 2
           return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey +i} type={igKey} />
           }) 
        });
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;