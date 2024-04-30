import React from "react";
import youtube from "../assets/youtube.png";
import { Link } from "react-router-dom";
const ProductCard = ({ meal }) => {
  return (
    <div className="max-w-[300px]  gap-2 bg-slate-800 rounded-xl flex text-white flex-col justify-center items-center ">
      <Link to={`/productDetails/${meal.idMeal}`}>
        <img
          className=" cursor-pointer rounded-xl"
          src={meal.strMealThumb}
          alt="meals"
        />
      </Link>
      <h1 className="text-lg mb uppercase font-bold font-oswald tracking-wide">
        {meal.strMeal}
      </h1>
      <div className="flex gap-2 justify-center items-center">
        <p className="mb-2 flex text-center justify-center tracking-wider font-semibold">
 View prepration
        </p>
        <a href={meal.strYoutube}>
          <img
            className="object-contain mb-2 cursor-pointer"
            src={youtube}
            alt="youtube"
            width={42}
            height={32}
          />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
