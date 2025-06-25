"use client";
import ArtistCard from "@/components/explore/ArtistCard";
import { Funnel } from "lucide-react";
import { data } from "@/lib/data";
import CategoryFilterComponent from "@/components/explore/CategoryFilterComponent";
import LocationFilterComponent from "@/components/explore/LocationFilterComponent";
import PriceRangeFilterComponent from "@/components/explore/PriceRangeFilterComponent";
import { useState } from "react";

const ExplorePage = () => {
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");

   const parseRange = (rangeStr) => {
    const [min, max] = rangeStr
      .replace(/\$/g, "")
      .split(" - ")
      .map((s) => parseInt(s.replace(",", ""), 10));
    return { min, max };
  };
  
  const filteredData = data.filter((item) => {
    const matchCategory =
      categoryFilter === "all" || item.category === categoryFilter;
    const matchLocation =
      locationFilter === "all" || item.location === locationFilter;
    const matchPrice =
      priceFilter === "all" ||
      (() => {
        const { min: selectedMin, max: selectedMax } = parseRange(priceFilter);
        const { min: itemMin, max: itemMax } = parseRange(item.feeRange);
        return itemMin <= selectedMax && itemMax >= selectedMin;
      })();

    return matchCategory && matchLocation && matchPrice;
  });

 

  return (
    <div className='p-4 m-auto'>
      <h1 className='text-5xl font-bold mt-4'>Discover Amazing Artists</h1>
      <p className='text-2xl mt-2'>
        Browse through our curated collection of talented performers
      </p>
      <div className='w-full h-fit md:h-40 bg-stone-100 dark:bg-stone-900 mt-10 rounded-3xl p-4 px-6'>
        <div className='flex justify-between items-center'>
          <p className='font-semibold text-xl flex gap-1 items-center'>
            <Funnel className='size-5' />
            Filters
          </p>
        </div>
        <div className='mt-4 w-full flex flex-col md:flex-row gap-10'>
          <CategoryFilterComponent
            selected={categoryFilter}
            onSelect={setCategoryFilter}
          />
          <LocationFilterComponent
            selected={locationFilter}
            onSelect={setLocationFilter}
          />
          <PriceRangeFilterComponent
            selected={priceFilter}
            onSelect={setPriceFilter}
          />
        </div>
      </div>
      <div className='w-fit m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-max gap-x-28 lg:gap-x-10 gap-y-10 mt-10'>
        {filteredData.map((item) => (
          <ArtistCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;
