import React from "react";
import Card from "./Card";

const categories = [
  {
    image: "/category-images/greeting-card.png",
    name: "Greeting Cards",
    price: "29,800",
    per: 50,
  },
  {
    image: "/category-images/stickers.png",
    name: "Stickers",
    price: "5,400",
    per: 75,
  },
];

function Category() {
  return <Card object={categories} name="Categories"/>;
}

export default Category;
