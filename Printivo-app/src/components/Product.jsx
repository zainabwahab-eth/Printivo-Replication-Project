import React from "react";
import Card from "./Card";
const products = [
  {
    image: "/product-images/business-cards.png",
    name: "Two-side Business Cards",
    price: "15,000",
    per: 100,
  },
  {
    image: "/product-images/trifold-brochure.png",
    name: "Trifold Bronchures",
    price: "47,500",
    per: 100,
  },
  {
    image: "/product-images/round-stickers.png",
    name: 'Round Stickers (3.5" Diameter)',
    price: "17,000",
    per: 100,
  },
  {
    image: "/product-images/simple-mugs.png",
    name: "Simple Mugs",
    price: "4,800",
    per: 1,
  },
  {
    image: "/product-images/a2-posters.png",
    name: "A2 Posters",
    price: "71,000",
    per: 100,
  },
  {
    image: "/product-images/a4-courier-bag.jpeg",
    name: "A4 Courier Bags",
    price: "27,000",
    per: 100,
  },
  {
    image: "/product-images/a4-branded-paper-bags.png",
    name: "A4 Branded Paper Bags",
    price: "115,000",
    per: 100,
  },
];
function Product() {
  return <Card object={products} name ="Products"/>;
}

export default Product;
