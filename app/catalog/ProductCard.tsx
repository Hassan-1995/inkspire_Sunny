"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ProductCardMap = {
  items: { type: string; title: string; image: string };
};

const ProductCard = ({ items }: ProductCardMap) => {
  return (
    <Link
      href={"/productCustomisation/" + items.type + "/" + items.title}
      onClick={() => localStorage.setItem("catalogItem", items.title)}
      className="group cursor-pointer aspect-[3/4] w-40 flex flex-col rounded-lg border border-stone-200 overflow-hidden"
    >
      <div className="w-full aspect-square relative shrink-0">
        <Image
          src={items.image}
          alt="Model Wearing T-shirt"
          fill
          className="object-cover"
        />
      </div>

      <div className="bg-stone-100 w-full flex-1 flex items-center justify-center group-hover:bg-stone-300 group-hover:text-purple-600">
        <h1 className="font-semibold ">{items.title}</h1>
      </div>
    </Link>
  );
};

export default ProductCard;
