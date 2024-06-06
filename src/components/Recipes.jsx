import React from 'react'
import { useEffect, useState } from 'react';
import {recipeObj} from "../data.js";
import { recipeDetailsObj } from '../recipeDetailData.js';
import RecipeCard from './RecipeCard.jsx';
import { PacmanLoader } from 'react-spinners';

const API_KEY = process.env.API_KEY;

export default function Recipes({ingredients, isVeg}) {

    const [recipesList, setRecipesList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    let ingredientString = "";
    
    for(let i = 0; i < ingredients.length; i++) {
        if(i == ingredients.length - 1) {
            ingredientString += ingredients[i];
        }
        else {
            ingredientString += ingredients[i] + ',';
        }
    }

    const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientString}&ranking=2&ignorePantry=true&apiKey=${API_KEY}
    `

    useEffect(() => {

        try {
            const fetchRecipes = async () => {
                const response = await fetch(apiUrl);
                const data = await response.json();
                const recipeIds = data.map(recipe => recipe.id);
                console.log(recipeIds);

                const recipeDetails = await Promise.all(recipeIds.map(async id => {
                    const recipeResponse = await fetch(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${API_KEY}`);
                    const recipeData = await recipeResponse.json();
                    return recipeData;
                }));

                const finalRecipeObj = recipeDetails.map(recipe => {
                    const newObj = {
                        id: recipe.id,
                        title: recipe.title,
                        summary: recipe.summary,
                        image: recipe.image,
                        instructions: recipe.instructions,
                        dishTypes: recipe.dishTypes,
                        source: recipe.sourceUrl
                    }
                    return newObj;
                })

                console.log(finalRecipeObj);
                setRecipesList(finalRecipeObj);

                console.log(recipeObj.recipes)
                console.log(recipeDetailsObj)
                // setRecipesList(recipeDetailsObj.recipeDetails.filter(recipe => recipe.isVeg == isVeg))
                setIsLoading(false);

            }

            fetchRecipes();
        }
        catch(err) {
            console.log(err);
        }

    }, [])

  return (
    <section>
        <h2 className='font-caveat text-center text-7xl font-bold my-8 text-[#593a22]'>Recipes</h2>
        <article className='grid grid-cols-3 gap-12 max-w-[80%] mx-auto my-8'>
            {isLoading ? <PacmanLoader color="#36d7b7" /> : 
                recipesList.map((recipe, index) => {
                    return <RecipeCard key={index} recipe={recipe} />
                })
            }
        </article>
    </section>
  )
}
