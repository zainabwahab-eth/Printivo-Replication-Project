import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Product from "./components/Product";
import Category from "./components/category";
import Testimonial from "./components/Testimonial";
import Countonus from "./components/Countonus";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import Proof from "./components/Proof";

function App() {
  return (
    <div className="text-[#384a60]">
      <Nav />
      <Hero />
      <Banner />
      <Product />
      <Category />
      <Proof/>
      <Testimonial />
      <Countonus />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
