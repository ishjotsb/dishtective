import React from 'react';
import Recipes from '../components/Recipes';
import { useLocation } from 'react-router-dom';

export default function RecipesPage() {

    const location = useLocation();
    const {ingredients, isVeg} = location.state || { ingredients: [] };
    console.log('asdas', isVeg);

  return (
    <Recipes ingredients={ingredients} isVeg={isVeg}/>
  )
}
