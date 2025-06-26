import React from "react";
import ProductCard from "./ProductCard";
import Header from "../components/Header";
import CustomProductSection from "./CustomProductSection";

const CatalogPage = () => {
  // need static data for showing catalog
  const apparels = [
    {
      id: 1,
      type: "apparels",
      title: "T-Shirts",
      image: "/apparels/t_shirts.jpg",
    },
    { id: 2, type: "apparels", title: "Polos", image: "/apparels/polo.jpg" },
    {
      id: 3,
      type: "apparels",
      title: "Full-Sleeves",
      image: "/apparels/fullSleeve.jpg",
    },
    {
      id: 5,
      type: "apparels",
      title: "Varsity-Jackets",
      image: "/apparels/varsity.jpg",
    },
    {
      id: 6,
      type: "apparels",
      title: "Hoodies",
      image: "/apparels/hoodie.jpg",
    },
  ];
  const drinkwares = [
    {
      id: 1,
      type: "drinkwares",
      title: "Bottles",
      image: "/drinkwares/Bottles.png",
    },
    { id: 2, type: "drinkwares", title: "Mugs", image: "/drinkwares/Mugs.png" },
    {
      id: 3,
      type: "drinkwares",
      title: "Jars",
      image: "/drinkwares/Jars.png",
    },
    {
      id: 4,
      type: "drinkwares",
      title: "Flasks",
      image: "/drinkwares/Flasks.png",
    },
  ];
  const bags = [
    { id: 1, type: "bags", title: "Tote-Bags", image: "/bags/tote-bag.jpg" },
    {
      id: 2,
      type: "bags",
      title: "Grocery-Bags",
      image: "/bags/grocery-bag.png",
    },
    {
      id: 3,
      type: "bags",
      title: "Laptop-Sleeves",
      image: "/bags/laptop-sleeve.png",
    },
    { id: 4, type: "bags", title: "Pouches", image: "/bags/pouch.png" },
  ];
  const homes = [
    {
      id: 1,
      type: "home",
      title: "Pillow-Cases",
      image: "/homes/pillow-cases.png",
    },
    { id: 2, type: "home", title: "Blankets", image: "/homes/blankets.png" },
    { id: 3, type: "home", title: "Towels", image: "/homes/towels.png" },
    { id: 4, type: "home", title: "Curtains", image: "/homes/curtains.png" },
    {
      id: 5,
      type: "home",
      title: "Wall-Clocks",
      image: "/homes/wall-clocks.png",
    },
    { id: 6, type: "home", title: "Apron", image: "/homes/aprons.png" },
  ];
  const others = [
    { id: 1, type: "others", title: "Banners", image: "/others/banners.png" },
    {
      id: 2,
      type: "others",
      title: "Paddle-Tennis",
      image: "/others/paddle-tennis.png",
    },
    {
      id: 3,
      type: "others",
      title: "Yoga-Mats",
      image: "/others/yoga-mat.png",
    },
  ];

  return (
    <div className="py-3 px-5">
      <Header title="Explore Our Collection" />
      <h1 className="font-semibold my-3 md:text-lg lg:text-2xl text-zinc-700">
        Apparels
      </h1>
      <ul className="flex justify-around gap-4 overflow-x-auto whitespace-nowrap no-scrollbar">
        {apparels.map((apparel) => (
          <li key={apparel.id}>
            <ProductCard items={apparel} />
          </li>
        ))}
      </ul>
      <h1 className="font-semibold my-3 md:text-lg lg:text-2xl text-zinc-700">
        Drinkwares
      </h1>
      <ul className="flex justify-around gap-4 overflow-x-auto whitespace-nowrap no-scrollbar">
        {drinkwares.map((drinkware) => (
          <li key={drinkware.id}>
            <ProductCard items={drinkware} />
          </li>
        ))}
      </ul>
      <h1 className="font-semibold my-3 md:text-lg lg:text-2xl text-zinc-700">
        Bags & Accessories
      </h1>
      <ul className="flex justify-around gap-4 overflow-x-auto whitespace-nowrap no-scrollbar">
        {bags.map((bag) => (
          <li key={bag.id}>
            <ProductCard items={bag} />
          </li>
        ))}
      </ul>
      <h1 className="font-semibold my-3 md:text-lg lg:text-2xl text-zinc-700">
        Home & Living
      </h1>
      <ul className="flex justify-around gap-4 overflow-x-auto whitespace-nowrap no-scrollbar">
        {homes.map((home) => (
          <li key={home.id}>
            <ProductCard items={home} />
          </li>
        ))}
      </ul>
      <h1 className="font-semibold my-3 md:text-lg lg:text-2xl text-zinc-700">
        Others
      </h1>
      <ul className="flex justify-around gap-4 overflow-x-auto whitespace-nowrap no-scrollbar">
        {others.map((other) => (
          <li key={other.id}>
            <ProductCard items={other} />
          </li>
        ))}
      </ul>
      <CustomProductSection />
    </div>
  );
};

export default CatalogPage;
