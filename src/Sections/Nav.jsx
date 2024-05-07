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
  const [dropDown, setDropDown] = useState(false);
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
    <section className="">
      <nav className="flex px-4 py-6 justify-between m-0 items-center">
        <div className="logo relative">
          <div>
            <Link to={"/"}>
              <h1 className="font-oswald text-xl px-2 py-[4px]   rounded-l-lg font-bold     tracking-widest relative z-50 border-2 hover:border-teal-500 duration-200 border-yellow-500 left-6">
                Gotta <span className="py-2 text-orange-500  ">Taste</span>
              </h1>
            </Link>
          </div>
        </div>
        <div className="routes   shadow-md  w-[50%] justify-between rounded-lg sm:flex hidden">
          <input
            onChange={handleChange}
            value={query}
            className="outline-none w-full text-xl rounded-xl px-2"
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
          <FaOpencart size={36} />
          <GiHamburgerMenu
            className="cursor-pointer"
            onClick={() => {
              setDropdown(true);
            }}
            size={36}
          />
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
    </section>
  );
};

export default Nav;
