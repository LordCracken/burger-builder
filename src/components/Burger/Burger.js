import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngridient/BurgerIngredient';

const Burger = ({ ingredients }) => {
  let transformedIngredients = Object.keys(ingredients).map(igKey => (
    [...Array(ingredients[igKey])].map((_, i) => (
      <BurgerIngredient key={igKey + i} type={igKey} />
    ))
  )).reduce((arr, el) => arr.concat(el), []);

  if (!transformedIngredients.length) transformedIngredients = <p>Please start adding ingredients!</p>

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
