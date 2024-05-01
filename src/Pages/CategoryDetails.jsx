import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CategoryDetails = () => {
  const { category } = useParams();
  console.log(category);
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
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return <div>CategoryDetails</div>;
};

export default CategoryDetails;
