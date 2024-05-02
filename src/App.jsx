import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";

import ProductDetails from "./Pages/ProductDetails";
import Home from "./Pages/Home";
import Nav from "./Sections/Nav";
import Footer from "./Sections/Footer";
import CategoryDetails from "./Pages/CategoryDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        <Route
          path="/categoryDetails/:category"
          element={<CategoryDetails />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
