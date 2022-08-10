import React from "react";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] p-4 mx-auto py-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full text-white p-4 rounded-xl bg-black/50">
          <p className="text-2xl font-bold px-2 pt-2"> Sun's Out, BOGO's Out</p>
          <p className="px-2">Through 8/24</p>
          <button className="border-white bg-white text-black font-bold absolute bottom-3">
            Order Now
          </button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="img"
          className="max-h-[160px] md:max-h-[200px] w-full rounded-xl object-cover"
        />
      </div>
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full text-white p-4 rounded-xl bg-black/50">
          <p className="text-2xl font-bold px-2 pt-2"> New Restaurants</p>
          <p className="px-2">Added Daily</p>
          <button className="border-white bg-white text-black font-bold absolute bottom-3">
            Order Now
          </button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="img"
          className="max-h-[160px] md:max-h-[200px] w-full rounded-xl object-cover"
        />
      </div>
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full text-white p-4 rounded-xl bg-black/50">
          <p className="text-2xl font-bold px-2 pt-2"> We Deliver Desserts Too</p>
          <p className="px-2">Tasty Treats</p>
          <button className="border-white bg-white text-black font-bold absolute bottom-3">
            Order Now
          </button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="img"
          className="max-h-[160px] md:max-h-[200px] w-full rounded-xl object-cover"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
