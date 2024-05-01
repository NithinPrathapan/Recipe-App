import React, { useEffect, useState } from "react";
import { FaOpencart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Nav = () => {
  const [query, setQuery] = useState("");
  const [searchItems, setSearchitems] = useState(null);
  const [searchItembyname, setSearchItemByname] = useState(null);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    const search = async (query) => {
      if (query.length === 1) {
        const response = await axios.get(
          `https://themealdb.com/api/json/v1/1/search.php?f=${query}`
        );
        setSearchitems(response.data.meals);
      }
    };
    search(query);
  }, [query]);
  console.log(flag);
  const handleChange = (e) => {
    setQuery(e.target.value);
    setFlag(true);
    console.log(query);
  };

  const handleSearch = async (query) => {
    setFlag(false);
    try {
      const response = await axios.get(
        `https://themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      setSearchItemByname(response.data.meals[0]);
      console.log(searchItembyname);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="">
      <nav className="flex px-4 py-6 justify-between m-0 items-center">
        <div className="logo relative">
          <div>
            <Link to={"/"}>
              <h1 className="font-oswald text-2xl py-[10px] pl-2 rounded-l-lg font-bold     tracking-widest relative z-50 border-2 border-yellow-500 left-6">
                Gotta{" "}
                <span className="bg-yellow-500 py-2 text-white ">Taste</span>
              </h1>
            </Link>
          </div>
        </div>
        <div className="routes border py-2 shadow-lg px-2 w-[50%] justify-between rounded-lg sm:flex hidden">
          <input
            onChange={handleChange}
            value={query}
            className="outline-none w-full text-xl"
            type="text"
            placeholder="Type Ingredients..."
          />
          <div className="bg-orange-500  justify-center flex h-full p-3 rounded-lg">
            <IoSearch
              onClick={() => {
                handleSearch(query);
              }}
              className="cursor-pointer"
              color="white"
              size={28}
            />
          </div>
        </div>
        <div className="cart-section  flex flex-row  sm:gap-4 gap-2 items-center">
          <FaOpencart size={28} />
          <GiHamburgerMenu size={28} />
        </div>
      </nav>
      {searchItems && searchItems !== null && query.length === 1 && (
        <div className="bg-gradient-to-br from-cyan-50 to-cyan-200 py-12">
          <h1 className="text-center text-3xl m-4 uppercase font-bold ">
            Search<span className="text-orange-500"> Results</span>
          </h1>
          <div className="flex flex-wrap gap-12 justify-center ">
            {searchItems.slice(0, 4).map((item) => (
              <ProductCard meal={item} />
            ))}
          </div>
        </div>
      )}
      {searchItembyname &&
        searchItembyname !== null &&
        query.length !== 0 &&
        !flag && (
          <div className="bg-gradient-to-br from-cyan-50 to-cyan-200 py-12">
            <h1 className="text-center text-3xl m-4 uppercase font-bold ">
              Search<span className="text-orange-500"> Results</span>
            </h1>
            <div className="flex flex-wrap gap-12 justify-center ">
              <ProductCard meal={searchItembyname} />
            </div>
          </div>
        )}
    </div>
  );
};

export default Nav;
