import axios from "axios";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [randomData, setRandomData] = useState(null);

  useEffect(() => {
    fetchRandomImage();
  }, []);

  const fetchRandomImage = async () => {
    try {
      const response = await axios.get(
        "https://themealdb.com/api/json/v1/1/random.php"
      );
      setRandomData(response.data.meals[0]);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className=" flex flex-col sm:flex-row justify-center gap-12 px-10 py-4 items-center ">
      <div className="w-full">
        <h1 className="font-semibold font-oswald   text-5xl sm:text-4xl md:text-6xl text-center tracking-wide">
          Feast your eyes on this{" "}
          <span className="text-orange-500">delicious dinner spread</span>
        </h1>
      </div>
      <div className="w-full">
        {randomData && (
          <img className="rounded-xl" src={randomData.strMealThumb} alt="pic" />
        )}
      </div>
    </div>
  );
};

export default Hero;
