import axios from "axios";
import React, { useEffect, useState } from "react";

const CategorySection = () => {
  const [list, setlist] = useState(null);

  useEffect(() => {
    fetchRandomImage();
  }, []);

  const fetchRandomImage = async () => {
    try {
      const response = await axios.get(
        "https://themealdb.com/api/json/v1/1/categories.php"
      );
      console.log(response);
      //   setlist(response.data);
      //   console.log(list);
    } catch (error) {
      console.error(error);
    }
  };

  return <div>CategorySection</div>;
};

export default CategorySection;
