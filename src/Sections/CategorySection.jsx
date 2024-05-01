import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CategorySection = () => {
  const [list, setlist] = useState(null);

  useEffect(() => {
    fetchRandomImage();
  }, [0]);

  const fetchRandomImage = async () => {
    try {
      const response = await axios.get(
        "https://themealdb.com/api/json/v1/1/list.php?i=list"
      );
      setlist(response.data.meals.slice(0, 10));
      console.log(response.data.meals.slice(0, 10));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="py-10 w-full">
      <h1 className="text-center text-3xl m-4 uppercase font-bold ">
        Popular<span className="text-orange-500"> Ingredients</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-12">
        {list &&
          list.slice(0, 10).map((item) => (
            <div
              key={item.idIngredient}
              className="w-[300px] bg-gray-300 p-2 rounded-xl flex flex-col"
            >
              <Link to={`/categoryDetails/${item.strCategory}`}>
                <img
                  className="cursor-pointer"
                  src={`https://themealdb.com/images/ingredients/${item.strIngredient}.png`}
                  alt="category"
                />
              </Link>
              <h1 className="text-lg font-oswald text-center py-1 ">
                {item.strIngredient}
              </h1>
              <p className="line-clamp-4 text-sm text-teal-800">
                {item.strDescription}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CategorySection;
