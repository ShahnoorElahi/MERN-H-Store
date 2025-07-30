import React, { useState, useEffect } from "react";

import Example from "./pages/Blog Edit/Blog";

import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/carosel/carosel";
import FAllProducts from "./components/fAllProducts/fAllProducts";
import FBlogs from "./components/fblogs/fblogs";
import KitchenAccessories from "./components/kitchen-accessories/kitchen-accessories";
import BannerSlider from "./components/banner/BannerSlider";
import BannerSlider1 from "./components/detail/BannerSlider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/contact/contact";
import MiniHeaderFixed from "./components/headermini fix/miniHeaderFixed";
import App1 from "./components/image-hover/image-hover";
import AboutUs from "./components/About/about-us";
import Blog1 from "./components/Blog/blog";
import HeaderMini from "./components/headermini/header-mini";
import Footer from "./components/Footer/Footer";
import Footer1 from "./components/Footer/Footer1";
import ProductSections from "./components/ProductSections/productSections";
// import Home from "./pages/Home/Home";
// import styles from "./App.module.css";
import Protected from "./components/Protected/Protected";
import Error from "./pages/Error/Error";
import ProductDetail from "./pages/ProductDetail/productDetail";
// import ProductDetail1 from "./pages/ProductDetail/productDetail copy";
import Login from "./pages/Login/Login";
import { useSelector } from "react-redux";
import Signup from "./pages/Signup/Signup";
// import Crypto from "./pages/Crypto/Crypto";
import Blog from "./pages/Blog/Blog";
import SubmitBlog from "./pages/SubmitBlog/SubmitBlog";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import UpdateBlog from "./pages/UpdateBlog/UpdateBlog";
import useAutoLogin from "./hooks/useAutoLogin";
// import Loader from "./components/Loader/Loader";


import "./App.css"




function App() {


  const bannerData = [
    { image: 'images/banners/674d8653b1a6d.webp', link: 'kitchen-accessories.html', alt: 'Kitchen Gadgets' },
    { image: 'images/banners/674d868003e9b.webp', link: 'kitchen-accessories.html', alt: 'Kitchen Accessories' },
    { image: 'images/banners/674d8680044da.webp', link: 'home-living.html', alt: 'Home Living' }
  ];

  // var ss;
  // console.log("ssssssssssssssss",ss);
  return (
    <div >
      <BrowserRouter>


        <Routes>
          <Route
            path="/"
            exact
            element={
              <div >
                <Navbar />
                <FAllProducts/>
                <FBlogs/>
                <Example/>
              </div>
            }
          />

          <Route
            path="/blogs"
            exact
            element={
              <div >
                {/* <Navbar /> */}
                <App1/>
                <ProductDetail />
                {/* <ProductSections/>
                <Carousel />
                <ProductDetail />
                <Contact/>
                <Blog1/> */}
              </div>
            }
          />
          <Route
            path="/about-us"
            exact
            element={
              <div >
                {/* <HeaderMini /> */}
                <MiniHeaderFixed/>
                <FBlogs/>
                <KitchenAccessories/>
                <FAllProducts />
                <Footer1 />
                <AboutUs/>
              </div>
            }
          />


        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;