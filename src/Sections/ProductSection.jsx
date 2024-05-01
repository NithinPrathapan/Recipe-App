import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";

const ProductSection = () => {
  const [meals, setMeals] = useState(null);

  useEffect(() => {
    const fetchAllMeals = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/search.php?s="
        );
        setMeals(response.data.meals);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllMeals();
  }, [0]);

  return (
    <div className="py-10 ">
      <h1 className="text-center text-3xl m-4 uppercase font-bold ">
        Popular<span className="text-orange-500"> meals</span>
      </h1>
      <div className="flex flex-wrap gap-12 justify-center">
        {meals &&
          meals
            .slice(0, 10)
            .map((meal) => <ProductCard meal={meal} key={meal.idMeal} />)}
      </div>
    </div>
  );
};

export default ProductSection;
