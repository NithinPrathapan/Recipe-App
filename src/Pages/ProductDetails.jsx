import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductSection from "../Sections/ProductSection";

const ProductDetails = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchById();
  }, [id]);

  const fetchById = async () => {
    try {
      const response = await axios.get(
        `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      setItem(response.data.meals[0]);
    } catch (error) {
      console.error(error);
    }
    console.log(item, "the item uinsg id");
  };
  return (
    <div>
      {item && (
        <div className="md:flex-row flex-col flex sm:px-10 px-4 gap-12 bg-slate-500 py-4 text-slate-200 justify-center items-center ">
          <div className="flex flex-col gap-6 w-[90%] justify-center mx-auto ">
            <img
              className=" cursor-pointer rounded-xl sm:min-w-[300px]"
              src={item.strMealThumb}
              alt="meals"
            />
            <a
              className="text-lg italic underline text-blue-500 font-semibold"
              href={item.strYoutube}
            >
              Click here to watch Video
            </a>
          </div>
          <div>
            <h1 className="flex flex-wrap gap-1 text-lg items-center font-bold">
              Name :{" "}
              <span className="text-sm italic font-semibold">
                {item.strMeal}
              </span>
            </h1>
            <h1 className="flex flex-wrap gap-1 text-lg items-center font-bold">
              Category :{" "}
              <span className="text-sm italic font-semibold">
                {item.strCategory}
              </span>
            </h1>
            <h1 className="flex flex-wrap gap-1 text-lg items-center font-bold">
              Ingredient :{" "}
              <span className="text-sm italic font-semibold">
                {item.strIngredient1}
              </span>
              ,{" "}
              <span className="text-sm italic font-semibold">
                {item.strIngredient2}
              </span>
              ,
              <span className="text-sm italic font-semibold">
                {item.strIngredient4}
              </span>
              ,
              <span className="text-sm italic font-semibold">
                {item.strIngredient5}
              </span>
              ,
              <span className="text-sm italic font-semibold">
                {item.strIngredient6}
              </span>
              ,
              <span className="text-sm italic font-semibold">
                {item.strIngredient7}
              </span>
              ,
              <span className="text-sm italic font-semibold">
                {item.strIngredient8}
              </span>
              ,
              <span className="text-sm italic font-semibold">
                {item.strIngredient9}
              </span>
            </h1>
            <h1 className="line-clamp-6 font-bold text-lg">
              Instructions{" "}
              <span className="text-sm italic font-semibold">
                {item.strInstructions}
              </span>
            </h1>
          </div>
        </div>
      )}
      <ProductSection />
    </div>
  );
};

export default ProductDetails;
