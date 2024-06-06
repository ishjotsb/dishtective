import React from "react";
import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  function formattedText(text) {
    const textWithoutTags = text.replace(/<[^>]*>/g, "");
    const clippedText = textWithoutTags.slice(0, 250) + "...";
    return clippedText;
  }

  return (
    <div className="shadow-lg w-[370px] rounded-md bg-[#86b584] text-white p-4 grid grid-rows-subgrid gap-2 row-span-4">
      <h2 className="text-center text-2xl font-bold py-2">{recipe.title}</h2>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="rounded-md text-center justify-self-center px-2"
      />
      <p className="p-4">{formattedText(recipe.summary)}</p>
      <div className="flex justify-between px-4 pb-6 items-center">
        <p className="underline">
          <a href={recipe.source}>Recipe Source</a>
        </p>
        <Link to={`/recipes/${recipe.id}`} className="border-white border-2 rounded-md">
          <p className="p-2">View Recipe</p>
        </Link>
      </div>
    </div>
  );
}
