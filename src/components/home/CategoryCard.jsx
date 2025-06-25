import React from "react";

const CategoryCard = ({ image, text }) => {
  return (
    <div
      className='w-40 h-52 md:w-48 md:h-60 lg:w-56 lg:h-72 rounded-3xl p-4 flex justify-end items-end cursor-pointer relative'
      style={{
        backgroundImage: `url('${image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        filter: "brightness(70%)",
      }}
    >
      <p
        className='uppercase absolute text-white brightness-200 bottom-6 right-5 text-lg md:text-xl font-bold z-10'
        style={{ writingMode: "vertical-rl", textOrientation: "upright" }}
      >
        {text}
      </p>
    </div>
  );
};

export default CategoryCard;
