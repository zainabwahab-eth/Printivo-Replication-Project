import React from "react";
import printivoLogo from "../assets/logo.svg";
import cartIcon from "../assets/cart.svg";
import searchIcon from "../assets/search.svg";
import heroImage from "../assets/lp-image.png";

function Hero() {
  return (
    <div className="bg-[#ebe8d9] px-20 py-4 flex flex-col gap-20 pb-24">
      <div className="flex item-center justify-between items-center">
        <img src={printivoLogo} className="w-30" />
        <div className="flex item-center gap-12 items-center text-sm font-semibold text-[#384b52] cursor-pointer">
          <ul className="flex item-center gap-8 items-center">
            <li>All Products</li>
            <li>Become a Reseller</li>
            <li>Merch Store</li>
            <li>Marketplace</li>
          </ul>
          <ul className="flex item-center gap-8 items-center">
            <li className="text-[#d0908e]">Sign in</li>
            <li>Create an Account</li>
            <img src={cartIcon} alt="cart icon" />
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-6">
          <h1 className="text-6xl font-bold">Quality Prints</h1>
          <h3 className="text-3xl font-semibold text-[#6b7282]">
            Shipped to your doorstep
          </h3>
        </div>
        <div className="flex flex-col gap-2">
          <label className="flex flex-col font-medium" for="hero-search">
            What would you like to print today
          </label>
          <div className="relative inline-block w-lg">
            <input
              className="bg-[#f7f6f4] rounded-sm p-6 w-lg "
              id="hero-search"
              type="search"
              placeholder="Search for Business cards, T-shirts, Mugs etc"
            />
            <button className=" p-2 h-10 w-10 absolute right-2 bottom-5">
              <img src={searchIcon} />
            </button>
          </div>
        </div>
        <div className="absolute right-0 bottom-19 w-110">
          <img src={heroImage} alt="hero image" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
