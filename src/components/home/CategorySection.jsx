import React from "react";
import CategoryCard from "./CategoryCard";

const CategorySection = () => {
  return (
    <section className=''>
      <p className='text-center text-2xl'>Select from variety of </p>
      <p className='text-center text-6xl font-semibold'>Categories</p>
      <div className='mt-18 grid grid-cols-4 grid-rows-1 ml-28'>
        <CategoryCard
          image={
            "https://images.pexels.com/photos/1625355/pexels-photo-1625355.jpeg"
          }
          text={"singers"}
        />
        <CategoryCard
          image={
            "https://images.pexels.com/photos/1701199/pexels-photo-1701199.jpeg"
          }
          text={"dancers"}
        />
        <CategoryCard
          image={
            "https://images.pexels.com/photos/5711244/pexels-photo-5711244.jpeg"
          }
          text={"speakers"}
        />
        <CategoryCard
          image={
            "https://images.pexels.com/photos/17320029/pexels-photo-17320029.jpeg"
          }
          text={"Djs"}
        />
      </div>
    </section>
  );
};

export default CategorySection;
