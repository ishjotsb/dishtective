import { faCircleDot } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const API_KEY = process.env.API_KEY;

export default function RecipeDetails() {
    const { id } = useParams();
    const [recipeDetails, setRecipeDetails] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const apiUrl = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${API_KEY}`;

        const getRecipeDetails = async () => {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                setRecipeDetails(data); // Set the fetched data to the state
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };

        getRecipeDetails(); // Fetch recipe details when component mounts

    }, [id]); // Run effect when `id` changes

    return (
        isLoading ? (
            <PacmanLoader />
        ) : (
            <section className='max-w-[80%] mx-auto'>
                <h2 className='text-5xl font-bold font-caveat my-4'>{recipeDetails.title}</h2>

                <div className='grid grid-cols-2 gap-x-4'>
                    <img className='col-start-1 row-start-1 rounded-md' src={recipeDetails.image} alt={recipeDetails.title} />
                    <ul className='col-start-1 row-start-2'>
                        <h3 className='text-xl font-bold uppercase mt-4 mb-1'>Ingredients Required </h3>
                        {recipeDetails.extendedIngredients.map((ingredient, index) => (
                            <li key={index} className='capitalize'>{ingredient.name} - {ingredient.amount} {ingredient.unit}</li>
                        ))}
                    </ul>
                    <div className='row-span-2 grid gap-4 grid-rows-[max-content_max-content_max-content]'>
                        <div>
                            <p className='font-bold text-lg uppercase'>Overview: </p>
                            <div className='flex gap-8'>
                                <p>Prep Time: {recipeDetails.readyInMinutes} minutes</p>
                                <p>Servings: {recipeDetails.servings}</p>
                                <p><FontAwesomeIcon className={`${recipeDetails.vegetarian ? 'text-green-800' : 'text-red-600'} text-xl`} icon={faCircleDot} /></p>
                            </div>
                        </div>
                        <div>
                            <p className='font-bold text-lg uppercase'>Macros (per serving)</p>
                            {/* <div className='flex gap-4'>
                                <p>Calories: {macros.calories}</p>
                                <p>Fat: {macros.fat}g</p>
                                <p>Protein: {macros.protein}g</p>
                            </div> */}
                        </div>
                        <div>
                            <h3 className='text-lg font-bold uppercase'>About the recipe</h3>
                            {/* <p>{formattedText(recipeDetails.summary)}</p> */}
                        </div>
                        <ol className='list-decimal list-inside'>
                            <h3 className='uppercase font-bold text-lg'>Instructions</h3>
                            {recipeDetails.analyzedInstructions[0].steps.map((step, index) => (
                                <li key={index}>{step.step}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </section>
        )
    );
}
