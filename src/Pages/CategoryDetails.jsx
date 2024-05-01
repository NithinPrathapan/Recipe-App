import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CategoryDetails = () => {
  const { category } = useParams();
  const [item, setItem] = useState(null);
  useEffect(() => {
    fetchByCategory();
  }, [category]);

  const fetchByCategory = async () => {
    try {
      const response = await axios.get(
        `https://themealdb.com/api/json/v1/1/filter.php?i=${category}`
      );
      setItem(response.data.meals);
      console.log(response.data.meals);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div></div>
      <h1 className="text-center text-3xl m-4 uppercase font-bold ">
        Meals with {category} <span className="text-orange-500">as Ingredient</span>
      </h1>
      <div className="flex gap-12 flex-wrap justify-center mx-auto my-4">
        {item &&
          item.slice(0, 10).map((meal) => (
            <div key={meal.idMeal} className="w-[150px]">
              <img
                className="object-cover rounded-md shadow-md"
                width={170}
                src={meal.strMealThumb}
                alt="meal"
              />
              <h1 className="text-center font-bold">{meal.strMeal}</h1>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CategoryDetails;
