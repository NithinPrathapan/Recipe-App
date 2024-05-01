import axios from "axios";
import React, { useEffect, useState } from "react";

const CategorySection = () => {
  const [list, setlist] = useState(null);

  useEffect(() => {
    fetchRandomImage();
  }, [0]);

  const fetchRandomImage = async () => {
    try {
      const response = await axios.get(
        "https://themealdb.com/api/json/v1/1/categories.php"
      );
      setlist(response.data.categories);
      console.log(response.data.categories);
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
          list.map((item) => (
            <div
              key={item.idCategory}
              className="w-[300px] bg-gray-300 p-2 rounded-xl flex flex-col"
            >
              <img className="cursor-pointer" src={item.strCategoryThumb} alt="category" />
              <h1 className="text-lg font-oswald text-center py-1 ">
                {item.strCategory}
              </h1>
              <p className="line-clamp-4 text-sm text-teal-800">
                {item.strCategoryDescription}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CategorySection;
