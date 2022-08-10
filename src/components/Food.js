import React, { useState } from "react";
import { data } from "../data/Foods";

const Food = () => {
  const [foods, setFoods] = useState(data);
  // filter by category
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };
  // filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };
  return (
    <div className="max-w-[1640px] mx-4 py-12">
      <h1 className="text-4xl text-center text-orange-600 font-bold">
        Top Rated Menu Items
      </h1>
      <div className="flex flex-col lg:flex-row justify-between">
        {/* filter type */}
        <div>
          <p className="text-gray-700 font-bold">Filter type</p>
          <div className="flex justify-between flex-wrap max-w-[500px]">
            <button
              onClick={() => setFoods(data)}
              className="mr-1 text-orange-600 border-orange-600 hover:text-white hover:bg-orange-600"
            >
              All
            </button>
            <button onClick={() => filterType('burger')} className="mr-1 text-orange-600 border-orange-600 hover:text-white hover:bg-orange-600">
              Burgers
            </button>
            <button onClick={() => filterType('pizza')} className="mr-1 text-orange-600 border-orange-600 hover:text-white hover:bg-orange-600">
              Pizza
            </button>
            <button onClick={() => filterType('salad')} className="mr-1 text-orange-600 border-orange-600 hover:text-white hover:bg-orange-600">
              Salads
            </button>
            <button onClick={() => filterType('chicken')} className="mr-1 text-orange-600 border-orange-600 hover:text-white hover:bg-orange-600">
              Chicken
            </button>
          </div>
        </div>
        {/* filter price */}
        <div>
          <p className="text-gray-700 font-bold">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button onClick={()=>filterPrice('$')} className="mr-1 text-orange-600 border-orange-600 hover:text-white hover:bg-orange-600">
              $
            </button>
            <button onClick={()=>filterPrice('$$')} className="mr-1 text-orange-600 border-orange-600 hover:text-white hover:bg-orange-600">
              $$
            </button>
            <button onClick={()=>filterPrice('$$$')} className="mr-1 text-orange-600 border-orange-600 hover:text-white hover:bg-orange-600">
              $$$
            </button>
            <button onClick={()=>filterPrice('$$$$')} className="mr-1 text-orange-600 border-orange-600 hover:text-white hover:bg-orange-600">
              $$$$
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-4 gap-6">
        {foods.map((food) => (
          <div
            key={food.id}
            className="border shadow-lg hover:scale-105 duration-300 rounded-lg cursor-pointer"
          >
            <img
              src={food.image}
              alt="img"
              className="h-[200px] w-full object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-2">
              <p className="font-bold">{food.name}</p>
              <p>
                <span className="bg-orange-600 p-1 rounded-full text-white">
                  {food.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
