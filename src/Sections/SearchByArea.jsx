import axios from "axios";
import React from "react";

const SearchByArea = () => {
  const searchByArea = async () => {
    const response = await axios.get(
      "https://themealdb.com/api/json/v1/1/filter.php?a=in"
    );
    console.log(response.data);
  };
  searchByArea();
  return (
    <div className="py-10 w-full">
      <h1 className="text-center text-3xl m-4 uppercase font-bold ">
        Browse by<span className="text-orange-500"> Country</span>
      </h1>
    </div>
  );
};

export default SearchByArea;
