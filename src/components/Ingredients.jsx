import React from "react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import ToggleSwitch from "./ToggleSwitch";

export default function Ingredients() {
  const [ingredients, setIngredients] = useState([]);
  const [isVeg, setIsVeg] = useState(false);
  const ingredient = useRef();

  function handleToggle () {
    setIsVeg(!isVeg)
  }

  function handleAddIngredient() {
    let currIngredient = ingredient.current.value;
    if (ingredient.current.value.trim()) {
      setIngredients((prevState) => [...prevState, currIngredient]);
      ingredient.current.value = "";
    }
  }

  function handleRemoveIngredient(id) {
    console.log(id);
    const updatedIngredients = ingredients.filter((ing, index) => index != id);
    setIngredients(updatedIngredients);
  }

  return (
    <section className="text-center mt-8 max-w-[70%] mx-auto text-[#6c472a]">
      <h2 className="font-caveat text-6xl">Let's get started!</h2>
      <p className="text-xl py-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        dignissimos ipsa voluptas cumque, nisi explicabo. Vel deleniti atque
        quibusdam adipisci.
      </p>
      <div className="max-w-[70%] mx-auto">
        <div className="flex gap-4">
          <input
            ref={ingredient}
            type="text"
            className="min-w-[70%] min-h-12 focus:outline-[#6c472a] p-2 text-xl"
            placeholder="Enter ingredient"
          />
          <button
            className="min-h-12 border-2 border-solid border-[#6c472a] px-4 mx-2 rounded-md font-bold"
            onClick={handleAddIngredient}
          >
            Add +
          </button>
          <ToggleSwitch handleToggle={handleToggle} isOn={isVeg} />
        </div>
        <div className="my-4 max-w-[80%]">
          <ul className="flex flex-wrap gap-4 justify-start">
            {ingredients.map((ing, index) => (
              <li key={index}>
                <button
                  onClick={() => handleRemoveIngredient(index)}
                  className="border-solid border-[#6c472a] border-2 px-4 py-1 rounded-md"
                >
                  {ing} x
                </button>
              </li>
            ))}
          </ul>
        </div>
        {ingredients.length > 0 ? <Link to="/recipes" state={{ingredients, isVeg}} className="border-solid bg-[#fa7070] border-2 text-white py-2 px-4 rounded-md text-lg">Get Recipes</Link> : ''}
      </div>
    </section>
  );
}
