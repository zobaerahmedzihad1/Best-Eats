import React from "react";
import { categories } from "../data/Foods";

const Category = () => {
  return (
    <div className="max-w[1640px] px-8 py-12">
      <h1 className="text-center font-bold text-4xl text-orange-600">
        Top Rated Menu Items
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-6 gap-6">
        {categories.map((category) => (
          <div className="bg-gray-100 flex justify-between items-center p-4 rounded-lg">
            <h3 className="font-bold text-2xl">{category.name}</h3>
            <img className="w-20" src={category.image} alt="img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
