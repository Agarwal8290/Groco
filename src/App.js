import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Features from "./components/features";
import Product from "./components/product";
import Categories from "./components/Categories";
import Review from "./components/Review";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Features/>
      <Product/>
      <Categories/>
      <Review/>
      <Blogs/>
      <Footer/>
    </div>
    
  );
}

export default App;
